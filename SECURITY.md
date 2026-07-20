# Security Posture & Custody Audit

## The question that matters

*"Can anyone other than me move my VBAN?"*

**No.** That is the central finding of a three-way code audit completed **2026-07-14**, and the reasoning below can be independently checked against the chain's public interface ([INTERFACE.md](INTERFACE.md)) and live state ([VERIFY.md](VERIFY.md)).

## Audit scope and headline findings

Three independent audit passes were run over the node and runtime implementation:

1. **Runtime privilege audit** — every privileged dispatch path
2. **Custom pallet audit** — the VoiceBan-specific pallets (social layer, funding, fees, usernames, IPFS)
3. **Genesis, keys & precompile audit** — key handling and the EVM/staking boundary

**Result: no covert backdoor.** No hidden key check, no privileged fund-moving call reachable by any ordinary signed or EVM account.

## Who can do what — verified

| Capability | Status |
|---|---|
| Move VBAN from your `0x` address | **Only your private key.** No admin path exists |
| `force_transfer`, `force_set_balance`, forced asset operations | Gated to Root origin — **uncallable by any signed account** |
| `set_code` (runtime upgrade) | **Only** via the public upgrade path: Council approval (2-of-3) → public timelock → forkless `setCode`. Every pending upgrade is visible on-chain before enactment |
| `Sudo` pallet | Compiled in but **keyless — no sudo key is set, permanently** (verified at genesis, 2026-07-20). It cannot be invoked by anyone |
| Bare Root origin | Reachable **only** through the timelocked council upgrade path above — never silently, never instantly |
| Staking precompile (`0x800`) | Acts **only on the caller's own account** (`msg.sender`) |
| EVM → native balance bridging | `WithdrawOrigin = Never` — no EVM path into the balances pallet |
| A block-producing validator | Can order or delay transactions in blocks it authors; **cannot forge a transfer** from a key it does not hold |

## Structural guarantees (not policy — construction)

- **No silent administration.** Any use of a privileged origin would be an on-chain extrinsic emitting public events. There is no off-chain override.
- **No silent upgrades.** Runtime changes emit `System.CodeUpdated`; the runtime hash is publicly extractable at any time ([VERIFY.md](VERIFY.md) §4-5).
- **Self-describing surface.** The chain cannot expose functionality that is absent from its own public metadata. [INTERFACE.md](INTERFACE.md) *is* the complete list.

## Launch-phase items — resolved at mainnet launch (2026-07-20)

Earlier revisions of this document disclosed three open launch-phase items. All three were closed by the
mainnet launch cut:

1. **Genesis key rotation — DONE.** The mainnet genesis was generated from fresh, offline-held keys. The
   pre-launch development chain — and every key that had ever been exposed during development — was retired
   with it. No historical key controls any mainnet account or validator.
2. **Onboarding grants — now pool-funded with a governance switch.** Welcome grants pay out of a fixed,
   publicly visible 1B VBAN pool by *transfer* (no minting), with a claim cap and an on/off switch reachable
   by the governance origin.
3. **Sudo end-state — resolved: keyless, permanently.** There is no sudo key on mainnet. The upgrade
   authority is a Council (2-of-3) whose approved upgrades enact only after a **public on-chain timelock**.
   This is a stronger claim than a dead sudo key: not "no backdoor we promise," but **no *hidden* backdoor
   is possible** — every change is a public, delayed, on-chain event anyone can observe before it happens.

## Remaining honest disclosures

- **Small validator set.** Mainnet launched with 3 genesis validators. GRANDPA finality requires >⅔ of the
  set online; with 3 validators, one going offline pauses finality (block production continues) until it
  returns. This dissolves as community validators join.
- **Council composition.** The council currently has a single member (the network owner) and will expand to
  independent members by on-chain motion. Until then, treasury and upgrade decisions are effectively
  team decisions — we say so here rather than call it decentralized governance.

## Reporting

Found a vulnerability or something that contradicts this document? Open a GitHub issue for non-sensitive matters. For sensitive disclosures, contact the team via [voiceban.io](https://voiceban.io) — do not post exploit details publicly before we've had a chance to respond.
