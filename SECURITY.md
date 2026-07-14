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
| `force_transfer`, `force_set_balance`, forced asset operations, `set_code` (runtime upgrade) | Gated to Root/Council origins — **currently uncallable by any signed account** |
| `Sudo` pallet | Compiled in but **keyless — no sudo key is set**. It cannot be invoked by anyone |
| Bare Root origin | **Unreachable** — there is no on-chain dispatcher (no democracy/scheduler path) that can synthesize Root, and the Council cannot |
| Staking precompile (`0x800`) | Acts **only on the caller's own account** (`msg.sender`) |
| EVM → native balance bridging | `WithdrawOrigin = Never` — no EVM path into the balances pallet |
| A block-producing validator | Can order or delay transactions in blocks it authors; **cannot forge a transfer** from a key it does not hold |

## Structural guarantees (not policy — construction)

- **No silent administration.** Any use of a privileged origin would be an on-chain extrinsic emitting public events. There is no off-chain override.
- **No silent upgrades.** Runtime changes emit `System.CodeUpdated`; the runtime hash is publicly extractable at any time ([VERIFY.md](VERIFY.md) §4-5).
- **Self-describing surface.** The chain cannot expose functionality that is absent from its own public metadata. [INTERFACE.md](INTERFACE.md) *is* the complete list.

## Known launch-phase items — stated openly

We publish these rather than hide them (they are also disclosed on [voiceban.io/how](https://voiceban.io/how)):

1. **Genesis key concentration.** In the current pre-launch phase, the initial supply allocation and validator power derive from team-held genesis keys. This affects *those* accounts and consensus operation — it has no path into user wallets. Rotation to fresh, offline-generated keys is a launch-gate requirement.
2. **Onboarding faucet.** The welcome-funding mechanism is enabled by default and hard-capped by the runtime (10M VBAN total), with per-address, per-IP and rate caps at the service layer. Its administrative off-switch is being moved to a reachable governance origin as part of the launch cut.
3. **Sudo end-state.** Sudo is inert today (keyless). Its permanent fate — removal, or replacement by a real governance Root path — is a launch-cut decision that will be made and published before mainnet designation.

## Reporting

Found a vulnerability or something that contradicts this document? Open a GitHub issue for non-sensitive matters. For sensitive disclosures, contact the team via [voiceban.io](https://voiceban.io) — do not post exploit details publicly before we've had a chance to respond.
