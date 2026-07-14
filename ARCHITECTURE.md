# Network Architecture

A design-level overview of the VoiceBan network. Everything described here corresponds to pallets you can enumerate yourself in [INTERFACE.md](INTERFACE.md) and query live per [VERIFY.md](VERIFY.md).

```
┌─────────────────────────────────────────────────────────────────┐
│                        APPLICATIONS                             │
│   voiceban.io · explorer.voiceban.com · wallets (MetaMask,      │
│   Ledger, any EIP-1193) · Polkadot.js · your dapp               │
├─────────────────────────────────────────────────────────────────┤
│                      PUBLIC RPC BOUNDARY                        │
│              wss / https  explorer.voiceban.com/rpc             │
├──────────────────────────┬──────────────────────────────────────┤
│   SMART CONTRACTS        │        ON-CHAIN SOCIAL LAYER         │
│   EVM (Solidity,         │   Profiles · Groups · Posts ·        │
│   chain id 9956)         │   Usernames · IPFS content           │
│   + WASM contracts       │   addressing · fee logic             │
├──────────────────────────┴──────────────────────────────────────┤
│                      ECONOMIC LAYER                             │
│   VBAN balances · fees · staking (NPoS) · nomination pools ·    │
│   treasury · bounties · custom assets                           │
├─────────────────────────────────────────────────────────────────┤
│                      CONSENSUS LAYER                            │
│   BABE block production · GRANDPA finality · validator          │
│   elections · offence handling · session keys                   │
└─────────────────────────────────────────────────────────────────┘
```

## Consensus: Nominated Proof-of-Stake

VoiceBan uses the hybrid consensus proven by the Polkadot ecosystem:

- **BABE** assigns block-production slots to validators pseudo-randomly, weighted by stake.
- **GRANDPA** finalizes chains of blocks — once finalized, a block is irreversible.
- **NPoS elections** (`ElectionProviderMultiPhase` + `BagsList`) select the active validator set each era from validator candidates and the nominators backing them.
- **Liveness & slashing** (`ImOnline`, `Offences`, `Staking`) — validators that equivocate or go offline are publicly reported and economically penalized.

Anyone can observe the validator set, era points and election outcomes live (see [VERIFY.md](VERIFY.md) §2).

## Staking

- **Validators** run nodes and secure the network; they set a commission and stake their own VBAN.
- **Nominators** back validators with stake and share rewards proportionally.
- **Nomination pools** (`NominationPools`) let smaller holders pool stake with a lower minimum and no infrastructure.
- Rewards, slashes and payouts are all on-chain, per-era, and publicly auditable.

## Accounts

User accounts are **Ethereum-format (`0x…`)** — the same keys, wallets and signing hardware that work on Ethereum work on VoiceBan. SS58 (`5…`) keys exist only as validator session keys inside the consensus layer. Details in [CHAIN.md](CHAIN.md).

## Dual smart-contract environments

VoiceBan is one of the few networks running **both** contract stacks side by side:

| | EVM | WASM |
|---|---|---|
| Pallets | `EVM`, `Ethereum`, `BaseFee` (Frontier) | `Contracts` |
| Languages | Solidity, Vyper | ink! (Rust) |
| Tooling | MetaMask, Hardhat, Foundry, ethers.js | cargo-contract, Polkadot.js |
| Fees | EIP-1559-style dynamic base fee | Weight-based |

## The on-chain social layer

This is VoiceBan's distinguishing feature — social primitives as first-class chain citizens rather than contracts:

- **`VbanProfiles`** — user profiles bound to accounts
- **`VbanGroups`** — group creation and membership
- **`VbanPosts`** — posts and interactions recorded on-chain
- **`VbanFees`** — fee logic for social actions
- **`Username`** — human-readable names
- **`IpfsCore` / `IpfsAddress`** — content addressing: large media lives on IPFS, its identity and provenance live on-chain
- **`TransactionStorage`** — on-chain data storage with proofs

Because these are runtime pallets (not app-server features), every profile, group and post inherits the chain's properties: no single party can silently delete, edit or censor them, and their full history is publicly verifiable.

## Governance & treasury

`Council`, `Treasury`, `Bounties` and `AssetRate` provide collective decision-making and on-chain funding of network development. `Funding` handles designated funding flows.

## Administrative capability — stated plainly

The runtime includes the standard `Sudo` pallet (visible in [INTERFACE.md](INTERFACE.md) — we don't hide it). Every use of it is, by construction, a public on-chain extrinsic: it cannot act silently. See [SECURITY.md](SECURITY.md) for the custody audit covering this, and the roadmap for its retirement as the validator set decentralizes.
