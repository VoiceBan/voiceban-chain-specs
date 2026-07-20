# Verify It Yourself

Nothing in this repository needs to be taken on trust. Every claim about the VoiceBan network can be checked from your own machine with standard, third-party tools. This guide shows how.

**Public RPC endpoint:** `wss://explorer.voiceban.com/rpc` (WebSocket) / `https://explorer.voiceban.com/rpc` (HTTP)

## 1. Confirm the chain is live (30 seconds, no install)

```bash
# Chain identity
curl -s -X POST https://explorer.voiceban.com/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"system_chain","params":[]}'

# Latest finalized block
curl -s -X POST https://explorer.voiceban.com/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"chain_getFinalizedHead","params":[]}'

# Runtime identity and version
curl -s -X POST https://explorer.voiceban.com/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"state_getRuntimeVersion","params":[]}'
```

Run the second command twice a minute apart — the head hash changes, because blocks are being produced and finalized continuously.

## 2. Browse the full chain with Polkadot.js Apps (independent, third-party tool)

1. Open **[polkadot.js.org/apps](https://polkadot.js.org/apps/)** — software we do not control.
2. Top-left network selector → *Development* → *Custom endpoint* → `wss://explorer.voiceban.com/rpc`.
3. You now have unrestricted access to:
   - **Explorer** — live block production and finality
   - **Chain state** — query *any* storage item of *any* pallet (compare with [INTERFACE.md](INTERFACE.md))
   - **Staking** — the active validator set, nominators, era points
   - **Extrinsics** — the complete list of callable functions

This is the key point: the chain is **self-describing**. The metadata your client downloads in step 2 is the same metadata [INTERFACE.md](INTERFACE.md) was generated from. The network cannot have secret functionality — anything callable is enumerated there.

## 3. Reproduce INTERFACE.md yourself

```bash
git clone https://github.com/VoiceBan/voiceban-chain-specs
cd voiceban-chain-specs/tools
```

Expected anchors for mainnet (launched 2026-07-20): genesis hash
`0x0dcfcb171cbfe70864b424c25cf1848a131541d687ca3a049381600b84aedc2c`, runtime `node-vb` v200.

```bash
npm install
node generate-interface.js ../INTERFACE.regenerated.md
diff ../INTERFACE.md ../INTERFACE.regenerated.md
```

If the network's interface ever changes (a runtime upgrade), the diff will show exactly what changed — and the upgrade itself is a public on-chain event (see §5).

## 4. Extract and fingerprint the runtime itself

The compiled runtime is stored *in public chain state* under the well-known key `:code`:

```bash
curl -s -X POST https://explorer.voiceban.com/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"state_getStorage","params":["0x3a636f6465"]}' \
  | python3 -c "import sys,json,hashlib; h=json.load(sys.stdin)['result']; b=bytes.fromhex(h[2:]); print('runtime size:', len(b), 'bytes'); print('sha256:', hashlib.sha256(b).hexdigest())"
```

Record the hash. Every observer in the world extracting the runtime gets the same bytes — there is one runtime, visible to all, and no party (including us) can serve you a different one without changing it for everyone.

## 5. Watch for runtime changes

A Substrate runtime can only change through an **on-chain, publicly visible extrinsic** which emits a `System.CodeUpdated` event. Subscribe in Polkadot.js Apps (*Network → Events*) or index the chain yourself. There is no silent-upgrade path: if the code hash from §4 ever changes, the block, the extrinsic and its origin are permanently on the public record.

## 6. Verify the EVM layer with Ethereum tooling

```bash
# Chain ID (expect 0x26e4 = 9956)
curl -s -X POST https://explorer.voiceban.com/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}'
```

Or add the network to MetaMask — RPC `https://explorer.voiceban.com/rpc`, chain ID `9956`, symbol `VBAN` — and inspect it with any Ethereum tool you already trust.

## Questions this kit answers

| Question | Where |
|---|---|
| Is the chain real and producing blocks? | §1, §2 |
| What can the chain do — completely? | §2, §3, [INTERFACE.md](INTERFACE.md) |
| What code is the network running? | §4 |
| Could functionality change without anyone noticing? | §5 |
| Does the EVM side really work? | §6 |

Found something that doesn't check out? Open an issue — that's what this repository is for.
