// Extract the public runtime interface from the live VoiceBan chain into Markdown.
// Everything dumped here is ALREADY public via any RPC connection — this only documents it.
const { ApiPromise, WsProvider } = require('@polkadot/api');

(async () => {
  const api = await ApiPromise.create({ provider: new WsProvider('wss://explorer.voiceban.com/rpc', 2000), noInitWarn: true });
  const [chain, version, props] = await Promise.all([
    api.rpc.system.chain(), api.rpc.system.version(), api.rpc.system.properties(),
  ]);
  const rt = api.runtimeVersion;
  const md = [];
  md.push(`# VoiceBan Runtime Interface Reference`);
  md.push(``);
  md.push(`> Auto-generated from the live chain's public metadata (\`state_getMetadata\`).`);
  md.push(`> Anyone can reproduce this document by connecting to the public RPC endpoint.`);
  md.push(``);
  md.push(`| | |`);
  md.push(`|---|---|`);
  md.push(`| Chain | ${chain.toString()} |`);
  md.push(`| Runtime | \`${rt.specName.toString()}\` v${rt.specVersion.toString()} (tx v${rt.transactionVersion.toString()}) |`);
  md.push(`| Node version | ${version.toString()} |`);
  md.push(`| Properties | \`${JSON.stringify(props.toJSON())}\` |`);
  md.push(`| Metadata version | V${api.runtimeMetadata.version} |`);
  md.push(``);
  md.push(`## Pallets`);
  md.push(``);

  const modules = api.runtimeMetadata.asLatest.pallets;
  const lookup = api.registry.lookup;
  const sorted = [...modules].sort((a, b) => a.index.toNumber() - b.index.toNumber());
  // Summary table
  md.push(`| # | Pallet | Calls | Storage items | Events | Constants |`);
  md.push(`|---|--------|-------|---------------|--------|-----------|`);
  const detail = [];
  for (const p of sorted) {
    const name = p.name.toString();
    const calls = p.calls.isSome ? lookup.getSiType(p.calls.unwrap().type).def.asVariant.variants : [];
    const events = p.events.isSome ? lookup.getSiType(p.events.unwrap().type).def.asVariant.variants : [];
    const storage = p.storage.isSome ? p.storage.unwrap().items : [];
    const consts = p.constants;
    md.push(`| ${p.index.toNumber()} | [${name}](#pallet-${name.toLowerCase()}) | ${calls.length} | ${storage.length} | ${events.length} | ${consts.length} |`);

    const d = [];
    d.push(`### Pallet: ${name}`);
    d.push(``);
    if (calls.length) {
      d.push(`**Extrinsics (callable functions):**`);
      d.push(``);
      for (const c of [...calls].sort((a, b) => a.index.toNumber() - b.index.toNumber())) {
        const args = c.fields.map(f => `\`${f.name.isSome ? f.name.unwrap().toString() : '_'}\``).join(', ');
        const doc = c.docs.map(x => x.toString()).join(' ').split('. ')[0].replace(/[#`|]/g, '').trim();
        d.push(`- \`${name}.${c.name.toString()}(${args ? args.replace(/`/g, '') : ''})\`${doc ? ` — ${doc}` : ''}`);
      }
      d.push(``);
    }
    if (storage.length) {
      d.push(`**Storage items:** ${storage.map(s => `\`${s.name.toString()}\``).join(', ')}`);
      d.push(``);
    }
    if (events.length) {
      d.push(`**Events:** ${events.map(e => `\`${e.name.toString()}\``).join(', ')}`);
      d.push(``);
    }
    detail.push(d.join('\n'));
  }
  md.push(``);
  md.push(detail.join('\n'));
  md.push(``);
  md.push(`---`);
  md.push(`*Generated from live chain metadata. To reproduce: connect any Substrate client to the public RPC and call \`state_getMetadata\`.*`);
  require('fs').writeFileSync(process.argv[2] || '/dev/stdout', md.join('\n'));
  console.error('pallets:', sorted.length);
  process.exit(0);
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
