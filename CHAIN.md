# Chain Parameters

Connection and identity parameters for the VoiceBan network. Every value below is verifiable against the live chain — see [VERIFY.md](VERIFY.md).

## Network identity

| Parameter | Value |
|---|---|
| Chain name | `Live` |
| Runtime spec | `node-vb` |
| Runtime version | v103 (transaction version 2) |
| Metadata version | V16 |
| Consensus | BABE (block production) + GRANDPA (finality), Nominated Proof-of-Stake |

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
