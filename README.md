# VoiceBan Network — Public Specifications & Transparency Documentation

**VoiceBan** is a live, decentralized Layer-1 blockchain — **mainnet launched 2026-07-20** (genesis `0x0dcfcb17…aedc2c`, runtime v200, sudo-less with timelocked public governance upgrades). It is purpose-built for censorship-resistant social interaction — profiles, groups, posts and payments recorded on-chain, secured by Nominated Proof-of-Stake, with full Ethereum (EVM) and WebAssembly smart-contract support.

- 🌐 Website: [voiceban.io](https://voiceban.io)
- 🔭 Live explorer: [explorer.voiceban.com](https://explorer.voiceban.com)
- 🔌 Public RPC: `wss://explorer.voiceban.com/rpc`
- 📄 White paper: [voiceban.io/whitepaper](https://voiceban.io/whitepaper)

## What this repository is

This repository is the **public specification and verification kit** for the VoiceBan network. It exists so that anyone — users, researchers, exchanges, node operators — can independently confirm three things **without trusting us**:

1. **The network is real and live** — blocks, validators and state are publicly observable.
2. **Its complete on-chain capability surface is known** — every pallet, callable function, storage item and event is enumerated here, generated directly from the live chain's own metadata.
3. **Nothing is hidden on-chain** — the chain's interface is self-describing by design; this repo documents it in human-readable form and shows you how to reproduce every document yourself.

| Document | What it proves |
|---|---|
| [INTERFACE.md](INTERFACE.md) | The complete runtime interface — all 43 pallets, every extrinsic/storage/event — generated from live chain metadata |
| [VERIFY.md](VERIFY.md) | Step-by-step: verify the chain, its runtime, validators and state yourself with standard tools |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Network design: consensus, account model, staking, EVM + WASM contracts, on-chain social layer |
| [CHAIN.md](CHAIN.md) | Chain parameters: token, decimals, chain ID, endpoints |
| [SECURITY.md](SECURITY.md) | Security posture and the 2026 custody audit summary |

## What this repository is not

We are deliberate and transparent about scope: **this is documentation, not the source code of the node or runtime.** VoiceBan's implementation represents 5 years of proprietary work; source availability follows a staged roadmap rather than a single release:

| Stage | What opens | When |
|---|---|---|
| ✅ Now | Full public specifications, interface reference, verification kit (this repo) | Live |
| 🔜 External validator launch | Node client source — external operators must be able to audit what they run | With the validator program |
| 🔭 Under evaluation | Runtime source under a source-available license (read/verify permitted, commercial forking prohibited) | Post-launch |

Meanwhile, note what is *already* independently verifiable today: the compiled runtime lives **in public chain state** (anyone can extract and hash it — see [VERIFY.md](VERIFY.md)), and the full capability surface in [INTERFACE.md](INTERFACE.md) is reproducible by anyone with an RPC connection. The chain cannot do anything that is not listed there.

## Quick start — see it live in 60 seconds

1. Open [Polkadot.js Apps](https://polkadot.js.org/apps/) → switch endpoint to `wss://explorer.voiceban.com/rpc`.
2. Watch blocks finalize in real time; browse validators, staking and every storage item.
3. Or add the EVM side to MetaMask: RPC `https://explorer.voiceban.com/rpc`, chain ID `9956`, symbol `VBAN`.

## License

Documentation in this repository is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). It does not grant any license to the VoiceBan node or runtime implementation.
