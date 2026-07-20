# Chain Parameters

Connection and identity parameters for the VoiceBan network. Every value below is verifiable against the live chain — see [VERIFY.md](VERIFY.md).

## Network identity

| Parameter | Value |
|---|---|
| Chain name | `VoiceBan` (chain id `vban_launch`) |
| Mainnet launch | **2026-07-20** (genesis event — see below) |
| Genesis hash | `0x0dcfcb171cbfe70864b424c25cf1848a131541d687ca3a049381600b84aedc2c` |
| Runtime spec | `node-vb` |
| Runtime version | v200 (transaction version 2) |
| Metadata version | V14 |
| Consensus | BABE (block production) + GRANDPA (finality), Nominated Proof-of-Stake |
| Root / sudo | **None** — no sudo key exists; upgrades go through governance (see below) |

## Genesis allocation (2026-07-20)

The launch genesis was generated from fresh, offline-held keys (the pre-launch development chain and all
its keys were retired at the cut):

| Account | Allocation |
|---|---|
| Network owner (cold wallet) | 90,000,000,000 VBAN |
| Creators / promotions pool (`vbn/prom` pallet account) | 9,000,000,000 VBAN |
| Onboarding grants pool (`vbn/fund` pallet account) | 1,000,000,000 VBAN |
| Genesis validators (3 × 10,000, of which 1,000 bonded each) | 30,000 VBAN |

Welcome grants are **paid from the grants pool by transfer** — they do not mint new supply.

## Runtime upgrades — public and timelocked

There is no sudo key. Runtime upgrades follow a single path, entirely on-chain and public:
**Council approval (2-of-3 threshold) → public timelock delay → forkless `setCode`.**
Every pending upgrade is visible on-chain before it takes effect; state is never reset.

## Boot nodes

| Node | Multiaddr |
|---|---|
| vban1 | `/dns/vban1.voiceban.com/tcp/30333/p2p/12D3KooWEmPJ9AsM6NdBWyTHyBbeT527HfmQqaToUCcQrMy3ZJCm` |
| vban2 | `/dns/vban2.voiceban.com/tcp/30333/p2p/12D3KooWKKjHhE45yWCb4xcqkKMadQvYJCbHsmqiAFpDn2VGszDg` |

## Token

| Parameter | Value |
|---|---|
| Symbol | **VBAN** |
| Decimals | 18 |
| Smallest unit | 10⁻¹⁸ VBAN (wei-compatible for EVM tooling) |

## Endpoints

| Service | URL |
|---|---|
| Public RPC (WebSocket) | `wss://explorer.voiceban.com/rpc` |
| Public RPC (HTTP) | `https://explorer.voiceban.com/rpc` |
| Block explorer | [explorer.voiceban.com](https://explorer.voiceban.com) |
| Faucet | via [explorer.voiceban.com](https://explorer.voiceban.com) (100 VBAN / 24 h) |

## EVM layer

| Parameter | Value |
|---|---|
| Chain ID | `9956` (`0x26e4`) |
| RPC | `https://explorer.voiceban.com/rpc` |
| Account format | Ethereum `0x…` (20-byte), standard `secp256k1` signatures |
| Compatible wallets | MetaMask, Ledger, and any EIP-1193 wallet |

### Add to MetaMask

```
Network name:    VoiceBan
RPC URL:         https://explorer.voiceban.com/rpc
Chain ID:        9956
Currency symbol: VBAN
Block explorer:  https://explorer.voiceban.com
```

## Accounts: one chain, two key formats

- **`0x…` (Ethereum-format) accounts** are the user-facing account model — balances, transfers, staking, contracts. If you have a MetaMask address, you have a VoiceBan address.
- **`5…` (SS58-format) keys** appear only in consensus roles (validator session keys: BABE, GRANDPA, ImOnline, authority discovery). They are not user wallets.

This split lets VoiceBan pair Substrate-grade consensus with the Ethereum wallet ecosystem users already have.
