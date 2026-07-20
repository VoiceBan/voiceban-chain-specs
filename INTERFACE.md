# VoiceBan Runtime Interface Reference

> Auto-generated from the live chain's public metadata (`state_getMetadata`).
> Anyone can reproduce this document by connecting to the public RPC endpoint.

| | |
|---|---|
| Chain | VoiceBan |
| Runtime | `node-vb` v200 (tx v2) |
| Node version | 0.1.0-unknown |
| Properties | `{"isEthereum":false,"ss58Format":null,"tokenDecimals":[18],"tokenSymbol":["VBAN"],"SS58Prefix":"9956"}` |
| Metadata version | V14 |

## Pallets

| # | Pallet | Calls | Storage items | Events | Constants |
|---|--------|-------|---------------|--------|-----------|
| 0 | [System](#pallet-system) | 11 | 20 | 8 | 6 |
| 1 | [Babe](#pallet-babe) | 3 | 17 | 0 | 4 |
| 2 | [Timestamp](#pallet-timestamp) | 1 | 2 | 0 | 1 |
| 3 | [Authorship](#pallet-authorship) | 0 | 1 | 0 | 0 |
| 4 | [Balances](#pallet-balances) | 9 | 7 | 30 | 4 |
| 5 | [TransactionPayment](#pallet-transactionpayment) | 0 | 3 | 1 | 1 |
| 6 | [ElectionProviderMultiPhase](#pallet-electionprovidermultiphase) | 5 | 10 | 6 | 15 |
| 7 | [Staking](#pallet-staking) | 32 | 42 | 19 | 7 |
| 8 | [Session](#pallet-session) | 2 | 8 | 4 | 1 |
| 9 | [Council](#pallet-council) | 8 | 7 | 10 | 1 |
| 10 | [Grandpa](#pallet-grandpa) | 3 | 7 | 3 | 3 |
| 11 | [Treasury](#pallet-treasury) | 6 | 7 | 12 | 6 |
| 12 | [AssetRate](#pallet-assetrate) | 3 | 1 | 3 | 0 |
| 13 | [Contracts](#pallet-contracts) | 10 | 7 | 10 | 13 |
| 14 | [Sudo](#pallet-sudo) | 5 | 1 | 4 | 0 |
| 15 | [ImOnline](#pallet-imonline) | 1 | 4 | 3 | 1 |
| 16 | [AuthorityDiscovery](#pallet-authoritydiscovery) | 0 | 2 | 0 | 0 |
| 17 | [Offences](#pallet-offences) | 0 | 2 | 1 | 0 |
| 18 | [Historical](#pallet-historical) | 0 | 2 | 2 | 0 |
| 19 | [RandomnessCollectiveFlip](#pallet-randomnesscollectiveflip) | 0 | 1 | 0 | 0 |
| 20 | [Bounties](#pallet-bounties) | 11 | 4 | 12 | 9 |
| 21 | [Assets](#pallet-assets) | 34 | 6 | 32 | 7 |
| 22 | [Mmr](#pallet-mmr) | 0 | 3 | 0 | 0 |
| 23 | [NominationPools](#pallet-nominationpools) | 26 | 21 | 23 | 3 |
| 24 | [Username](#pallet-username) | 2 | 4 | 2 | 0 |
| 25 | [IpfsCore](#pallet-ipfscore) | 1 | 1 | 0 | 0 |
| 26 | [IpfsAddress](#pallet-ipfsaddress) | 2 | 2 | 1 | 0 |
| 27 | [Ethereum](#pallet-ethereum) | 1 | 6 | 1 | 0 |
| 28 | [EVM](#pallet-evm) | 4 | 3 | 5 | 0 |
| 29 | [BaseFee](#pallet-basefee) | 2 | 2 | 3 | 0 |
| 30 | [HotfixSufficients](#pallet-hotfixsufficients) | 1 | 0 | 0 | 0 |
| 32 | [BagsList](#pallet-bagslist) | 3 | 7 | 2 | 2 |
| 33 | [Funding](#pallet-funding) | 2 | 3 | 2 | 5 |
| 34 | [TransactionStorage](#pallet-transactionstorage) | 3 | 7 | 9 | 2 |
| 35 | [Utility](#pallet-utility) | 8 | 0 | 8 | 1 |
| 39 | [VbanFees](#pallet-vbanfees) | 1 | 1 | 2 | 2 |
| 40 | [VbanProfiles](#pallet-vbanprofiles) | 2 | 4 | 2 | 1 |
| 41 | [VbanGroups](#pallet-vbangroups) | 4 | 6 | 4 | 5 |
| 42 | [VbanPosts](#pallet-vbanposts) | 5 | 12 | 5 | 3 |
| 43 | [VbanEcon](#pallet-vbanecon) | 1 | 1 | 1 | 0 |
| 44 | [VbanTipping](#pallet-vbantipping) | 3 | 4 | 3 | 0 |
| 45 | [VbanEpoch](#pallet-vbanepoch) | 4 | 7 | 5 | 2 |
| 46 | [VbanUpgrade](#pallet-vbanupgrade) | 3 | 2 | 4 | 3 |

### Pallet: System

**Extrinsics (callable functions):**

- `System.remark(remark)` — Make some on-chain remark
- `System.set_heap_pages(pages)` — Set the number of pages in the WebAssembly environment's heap.
- `System.set_code(code)` — Set the new runtime code.
- `System.set_code_without_checks(code)` — Set the new runtime code without doing any checks of the given code
- `System.set_storage(items)` — Set some items of storage.
- `System.kill_storage(keys)` — Kill some items from storage.
- `System.kill_prefix(prefix, subkeys)` — Kill all storage items with a key that starts with the given prefix
- `System.remark_with_event(remark)` — Make some on-chain remark and emit event.
- `System.authorize_upgrade(code_hash)` — Authorize an upgrade to a given code_hash for the runtime
- `System.authorize_upgrade_without_checks(code_hash)` — Authorize an upgrade to a given code_hash for the runtime
- `System.apply_authorized_upgrade(code)` — Provide the preimage (runtime binary) code for an upgrade that has been authorized

**Storage items:** `Account`, `ExtrinsicCount`, `InherentsApplied`, `BlockWeight`, `BlockSize`, `BlockHash`, `ExtrinsicData`, `Number`, `ParentHash`, `Digest`, `Events`, `EventCount`, `EventTopics`, `LastRuntimeUpgrade`, `BlocksTillUpgrade`, `UpgradedToU32RefCount`, `UpgradedToTripleRefCount`, `ExecutionPhase`, `AuthorizedUpgrade`, `ExtrinsicWeightReclaimed`

**Events:** `ExtrinsicSuccess`, `ExtrinsicFailed`, `CodeUpdated`, `NewAccount`, `KilledAccount`, `Remarked`, `UpgradeAuthorized`, `RejectedInvalidAuthorizedUpgrade`

### Pallet: Babe

**Extrinsics (callable functions):**

- `Babe.report_equivocation(equivocation_proof, key_owner_proof)` — Report authority equivocation/misbehavior
- `Babe.report_equivocation_unsigned(equivocation_proof, key_owner_proof)` — Report authority equivocation/misbehavior
- `Babe.plan_config_change(config)` — Plan an epoch config change

**Storage items:** `EpochIndex`, `Authorities`, `GenesisSlot`, `CurrentSlot`, `Randomness`, `PendingEpochConfigChange`, `NextRandomness`, `NextAuthorities`, `SegmentIndex`, `UnderConstruction`, `Initialized`, `AuthorVrfRandomness`, `EpochStart`, `Lateness`, `EpochConfig`, `NextEpochConfig`, `SkippedEpochs`

### Pallet: Timestamp

**Extrinsics (callable functions):**

- `Timestamp.set(now)` — Set the current time

**Storage items:** `Now`, `DidUpdate`

### Pallet: Authorship

**Storage items:** `Author`

### Pallet: Balances

**Extrinsics (callable functions):**

- `Balances.transfer_allow_death(dest, value)` — Transfer some liquid free balance to another account
- `Balances.force_transfer(source, dest, value)` — Exactly as transfer_allow_death, except the origin must be root and the source account may be specified.
- `Balances.transfer_keep_alive(dest, value)` — Same as the [transfer_allow_death] call, but with a check that the transfer will not kill the origin account
- `Balances.transfer_all(dest, keep_alive)` — Transfer the entire transferable balance from the caller account
- `Balances.force_unreserve(who, amount)` — Unreserve some balance from a user by force
- `Balances.upgrade_accounts(who)` — Upgrade a specified account
- `Balances.force_set_balance(who, new_free)` — Set the regular balance of a given account
- `Balances.force_adjust_total_issuance(direction, delta)` — Adjust the total issuance in a saturating way
- `Balances.burn(value, keep_alive)` — Burn the specified liquid free balance from the origin account

**Storage items:** `TotalIssuance`, `InactiveIssuance`, `Account`, `Locks`, `Reserves`, `Holds`, `Freezes`

**Events:** `Endowed`, `DustLost`, `Transfer`, `BalanceSet`, `Reserved`, `Unreserved`, `ReserveRepatriated`, `Deposit`, `Withdraw`, `Slashed`, `Minted`, `MintedCredit`, `Burned`, `BurnedDebt`, `Suspended`, `Restored`, `Upgraded`, `Issued`, `Rescinded`, `Locked`, `Unlocked`, `Frozen`, `Thawed`, `TotalIssuanceForced`, `Held`, `BurnedHeld`, `TransferOnHold`, `TransferAndHold`, `Released`, `Unexpected`

### Pallet: TransactionPayment

**Storage items:** `NextFeeMultiplier`, `StorageVersion`, `TxPaymentCredit`

**Events:** `TransactionFeePaid`

### Pallet: ElectionProviderMultiPhase

**Extrinsics (callable functions):**

- `ElectionProviderMultiPhase.submit_unsigned(raw_solution, witness)` — Submit a solution for the unsigned phase
- `ElectionProviderMultiPhase.set_minimum_untrusted_score(maybe_next_score)` — Set a new value for MinimumUntrustedScore
- `ElectionProviderMultiPhase.set_emergency_election_result(supports)` — Set a solution in the queue, to be handed out to the client of this pallet in the next call to ElectionProvider::elect
- `ElectionProviderMultiPhase.submit(raw_solution)` — Submit a solution for the signed phase
- `ElectionProviderMultiPhase.governance_fallback()` — Trigger the governance fallback

**Storage items:** `Round`, `CurrentPhase`, `QueuedSolution`, `Snapshot`, `DesiredTargets`, `SnapshotMetadata`, `SignedSubmissionNextIndex`, `SignedSubmissionIndices`, `SignedSubmissionsMap`, `MinimumUntrustedScore`

**Events:** `SolutionStored`, `ElectionFinalized`, `ElectionFailed`, `Rewarded`, `Slashed`, `PhaseTransitioned`

### Pallet: Staking

**Extrinsics (callable functions):**

- `Staking.bond(value, payee)` — Take the origin account as a stash and lock up value of its balance
- `Staking.bond_extra(max_additional)` — Add some extra amount that have appeared in the stash free_balance into the balance up for staking
- `Staking.unbond(value)` — Schedule a portion of the stash to be unlocked ready for transfer out after the bond period ends
- `Staking.withdraw_unbonded(num_slashing_spans)` — Remove any unlocked chunks from the unlocking queue from our management
- `Staking.validate(prefs)` — Declare the desire to validate for the origin controller
- `Staking.nominate(targets)` — Declare the desire to nominate targets for the origin controller
- `Staking.chill()` — Declare no desire to either validate or nominate
- `Staking.set_payee(payee)` — (Re-)set the payment target for a controller
- `Staking.set_controller()` — (Re-)sets the controller of a stash to the stash itself
- `Staking.set_validator_count(new)` — Sets the ideal number of validators
- `Staking.increase_validator_count(additional)` — Increments the ideal number of validators up to maximum of ElectionProviderBase::MaxWinners
- `Staking.scale_validator_count(factor)` — Scale up the ideal number of validators by a factor up to maximum of ElectionProviderBase::MaxWinners
- `Staking.force_no_eras()` — Force there to be no new eras indefinitely
- `Staking.force_new_era()` — Force there to be a new era at the end of the next session
- `Staking.set_invulnerables(invulnerables)` — Set the validators who cannot be slashed (if any)
- `Staking.force_unstake(stash, num_slashing_spans)` — Force a current staker to become completely unstaked, immediately
- `Staking.force_new_era_always()` — Force there to be a new era at the end of sessions indefinitely
- `Staking.cancel_deferred_slash(era, slash_indices)` — Cancel enactment of a deferred slash
- `Staking.payout_stakers(validator_stash, era)` — Pay out next page of the stakers behind a validator for the given era
- `Staking.rebond(value)` — Rebond a portion of the stash scheduled to be unlocked
- `Staking.reap_stash(stash, num_slashing_spans)` — Remove all data structures concerning a staker/stash once it is at a state where it can be considered dust in the staking system
- `Staking.kick(who)` — Remove the given nominations from the calling validator
- `Staking.set_staking_configs(min_nominator_bond, min_validator_bond, max_nominator_count, max_validator_count, chill_threshold, min_commission, max_staked_rewards)` — Update the various staking configurations
- `Staking.chill_other(stash)` — Declare a controller to stop participating as either a validator or nominator
- `Staking.force_apply_min_commission(validator_stash)` — Force a validator to have at least the minimum commission
- `Staking.set_min_commission(new)` — Sets the minimum amount of commission that each validators must maintain
- `Staking.payout_stakers_by_page(validator_stash, era, page)` — Pay out a page of the stakers behind a validator for the given era and page
- `Staking.update_payee(controller)` — Migrates an account's RewardDestination::Controller to RewardDestination::Account(controller)
- `Staking.deprecate_controller_batch(controllers)` — Updates a batch of controller accounts to their corresponding stash account if they are not the same
- `Staking.restore_ledger(stash, maybe_controller, maybe_total, maybe_unlocking)` — Restores the state of a ledger which is in an inconsistent state
- `Staking.migrate_currency(stash)` — Removes the legacy Staking locks if they exist
- `Staking.manual_slash(validator_stash, era, slash_fraction)` — This function allows governance to manually slash a validator and is a **fallback mechanism**

**Storage items:** `ValidatorCount`, `MinimumValidatorCount`, `Invulnerables`, `Bonded`, `MinNominatorBond`, `MinValidatorBond`, `MinimumActiveStake`, `MinCommission`, `Ledger`, `Payee`, `Validators`, `CounterForValidators`, `MaxValidatorsCount`, `Nominators`, `CounterForNominators`, `VirtualStakers`, `CounterForVirtualStakers`, `MaxNominatorsCount`, `CurrentEra`, `ActiveEra`, `ErasStartSessionIndex`, `ErasStakers`, `ErasStakersOverview`, `ErasStakersClipped`, `ErasStakersPaged`, `ClaimedRewards`, `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`, `ErasTotalStake`, `ForceEra`, `MaxStakedRewards`, `SlashRewardFraction`, `CanceledSlashPayout`, `UnappliedSlashes`, `BondedEras`, `ValidatorSlashInEra`, `NominatorSlashInEra`, `SlashingSpans`, `SpanSlash`, `CurrentPlannedSession`, `ChillThreshold`

**Events:** `EraPaid`, `Rewarded`, `Slashed`, `SlashReported`, `OldSlashingReportDiscarded`, `StakersElected`, `Bonded`, `Unbonded`, `Withdrawn`, `Kicked`, `StakingElectionFailed`, `Chilled`, `PayoutStarted`, `ValidatorPrefsSet`, `SnapshotVotersSizeExceeded`, `SnapshotTargetsSizeExceeded`, `ForceEra`, `ControllerBatchDeprecated`, `CurrencyMigrated`

### Pallet: Session

**Extrinsics (callable functions):**

- `Session.set_keys(keys, proof)` — Sets the session key(s) of the function caller to keys
- `Session.purge_keys()` — Removes any session key(s) of the function caller

**Storage items:** `Validators`, `CurrentIndex`, `QueuedChanged`, `QueuedKeys`, `DisabledValidators`, `NextKeys`, `KeyOwner`, `ExternallySetKeys`

**Events:** `NewSession`, `NewQueued`, `ValidatorDisabled`, `ValidatorReenabled`

### Pallet: Council

**Extrinsics (callable functions):**

- `Council.set_members(new_members, prime, old_count)` — Set the collective's membership
- `Council.execute(proposal, length_bound)` — Dispatch a proposal from a member using the Member origin
- `Council.propose(threshold, proposal, length_bound)` — Add a new proposal to either be voted on or executed directly
- `Council.vote(proposal, index, approve)` — Add an aye or nay vote for the sender to the given proposal
- `Council.disapprove_proposal(proposal_hash)` — Disapprove a proposal, close, and remove it from the system, regardless of its current state
- `Council.close(proposal_hash, index, proposal_weight_bound, length_bound)` — Close a vote that is either approved, disapproved or whose voting period has ended
- `Council.kill(proposal_hash)` — Disapprove the proposal and burn the cost held for storing this proposal
- `Council.release_proposal_cost(proposal_hash)` — Release the cost held for storing a proposal once the given proposal is completed

**Storage items:** `Proposals`, `ProposalOf`, `CostOf`, `Voting`, `ProposalCount`, `Members`, `Prime`

**Events:** `Proposed`, `Voted`, `Approved`, `Disapproved`, `Executed`, `MemberExecuted`, `Closed`, `Killed`, `ProposalCostBurned`, `ProposalCostReleased`

### Pallet: Grandpa

**Extrinsics (callable functions):**

- `Grandpa.report_equivocation(equivocation_proof, key_owner_proof)` — Report voter equivocation/misbehavior
- `Grandpa.report_equivocation_unsigned(equivocation_proof, key_owner_proof)` — Report voter equivocation/misbehavior
- `Grandpa.note_stalled(delay, best_finalized_block_number)` — Note that the current authority set of the GRANDPA finality gadget has stalled

**Storage items:** `State`, `PendingChange`, `NextForced`, `Stalled`, `CurrentSetId`, `SetIdSession`, `Authorities`

**Events:** `NewAuthorities`, `Paused`, `Resumed`

### Pallet: Treasury

**Extrinsics (callable functions):**

- `Treasury.spend_local(amount, beneficiary)` — Propose and approve a spend of treasury funds
- `Treasury.remove_approval(proposal_id)` — Force a previously approved proposal to be removed from the approval queue
- `Treasury.spend(asset_kind, amount, beneficiary, valid_from)` — Propose and approve a spend of treasury funds
- `Treasury.payout(index)` — Claim a spend
- `Treasury.check_status(index)` — Check the status of the spend and remove it from the storage if processed
- `Treasury.void_spend(index)` — Void previously approved spend

**Storage items:** `ProposalCount`, `Proposals`, `Deactivated`, `Approvals`, `SpendCount`, `Spends`, `LastSpendPeriod`

**Events:** `Spending`, `Awarded`, `Burnt`, `Rollover`, `Deposit`, `SpendApproved`, `UpdatedInactive`, `AssetSpendApproved`, `AssetSpendVoided`, `Paid`, `PaymentFailed`, `SpendProcessed`

### Pallet: AssetRate

**Extrinsics (callable functions):**

- `AssetRate.create(asset_kind, rate)` — Initialize a conversion rate to native balance for the given asset
- `AssetRate.update(asset_kind, rate)` — Update the conversion rate to native balance for the given asset
- `AssetRate.remove(asset_kind)` — Remove an existing conversion rate to native balance for the given asset

**Storage items:** `ConversionRateToNative`

**Events:** `AssetRateCreated`, `AssetRateRemoved`, `AssetRateUpdated`

### Pallet: Contracts

**Extrinsics (callable functions):**

- `Contracts.call_old_weight(dest, value, gas_limit, storage_deposit_limit, data)` — Deprecated version if [Self::call] for use in an in-storage Call.
- `Contracts.instantiate_with_code_old_weight(value, gas_limit, storage_deposit_limit, code, data, salt)` — Deprecated version if [Self::instantiate_with_code] for use in an in-storage Call.
- `Contracts.instantiate_old_weight(value, gas_limit, storage_deposit_limit, code_hash, data, salt)` — Deprecated version if [Self::instantiate] for use in an in-storage Call.
- `Contracts.upload_code(code, storage_deposit_limit, determinism)` — Upload new code without instantiating a contract from it
- `Contracts.remove_code(code_hash)` — Remove the code stored under code_hash and refund the deposit to its owner
- `Contracts.set_code(dest, code_hash)` — Privileged function that changes the code of an existing contract
- `Contracts.call(dest, value, gas_limit, storage_deposit_limit, data)` — Makes a call to an account, optionally transferring some balance
- `Contracts.instantiate_with_code(value, gas_limit, storage_deposit_limit, code, data, salt)` — Instantiates a new contract from the supplied code optionally transferring some balance
- `Contracts.instantiate(value, gas_limit, storage_deposit_limit, code_hash, data, salt)` — Instantiates a contract from a previously deployed wasm binary
- `Contracts.migrate(weight_limit)` — When a migration is in progress, this dispatchable can be used to run migration steps

**Storage items:** `PristineCode`, `CodeInfoOf`, `Nonce`, `ContractInfoOf`, `DeletionQueue`, `DeletionQueueCounter`, `MigrationInProgress`

**Events:** `Instantiated`, `Terminated`, `CodeStored`, `ContractEmitted`, `CodeRemoved`, `ContractCodeUpdated`, `Called`, `DelegateCalled`, `StorageDepositTransferredAndHeld`, `StorageDepositTransferredAndReleased`

### Pallet: Sudo

**Extrinsics (callable functions):**

- `Sudo.sudo(call)` — Authenticates the sudo key and dispatches a function call with Root origin.
- `Sudo.sudo_unchecked_weight(call, weight)` — Authenticates the sudo key and dispatches a function call with Root origin
- `Sudo.set_key(new)` — Authenticates the current sudo key and sets the given AccountId (new) as the new sudo key.
- `Sudo.sudo_as(who, call)` — Authenticates the sudo key and dispatches a function call with Signed origin from a given account
- `Sudo.remove_key()` — Permanently removes the sudo key

**Storage items:** `Key`

**Events:** `Sudid`, `KeyChanged`, `KeyRemoved`, `SudoAsDone`

### Pallet: ImOnline

**Extrinsics (callable functions):**

- `ImOnline.heartbeat(heartbeat, signature)` — Complexity: - O(K) where K is length of Keys (heartbeat.validators_len)   - O(K): decoding of length K

**Storage items:** `HeartbeatAfter`, `Keys`, `ReceivedHeartbeats`, `AuthoredBlocks`

**Events:** `HeartbeatReceived`, `AllGood`, `SomeOffline`

### Pallet: AuthorityDiscovery

**Storage items:** `Keys`, `NextKeys`

### Pallet: Offences

**Storage items:** `Reports`, `ConcurrentReportsIndex`

**Events:** `Offence`

### Pallet: Historical

**Storage items:** `HistoricalSessions`, `StoredRange`

**Events:** `RootStored`, `RootsPruned`

### Pallet: RandomnessCollectiveFlip

**Storage items:** `RandomMaterial`

### Pallet: Bounties

**Extrinsics (callable functions):**

- `Bounties.propose_bounty(value, description)` — Propose a new bounty
- `Bounties.approve_bounty(bounty_id)` — Approve a bounty proposal
- `Bounties.propose_curator(bounty_id, curator, fee)` — Propose a curator to a funded bounty
- `Bounties.unassign_curator(bounty_id)` — Unassign curator from a bounty
- `Bounties.accept_curator(bounty_id)` — Accept the curator role for a bounty
- `Bounties.award_bounty(bounty_id, beneficiary)` — Award bounty to a beneficiary account
- `Bounties.claim_bounty(bounty_id)` — Claim the payout from an awarded bounty after payout delay
- `Bounties.close_bounty(bounty_id)` — Cancel a proposed or active bounty
- `Bounties.extend_bounty_expiry(bounty_id, remark)` — Extend the expiry time of an active bounty
- `Bounties.approve_bounty_with_curator(bounty_id, curator, fee)` — Approve bountry and propose a curator simultaneously
- `Bounties.poke_deposit(bounty_id)` — Poke the deposit reserved for creating a bounty proposal

**Storage items:** `BountyCount`, `Bounties`, `BountyDescriptions`, `BountyApprovals`

**Events:** `BountyProposed`, `BountyRejected`, `BountyBecameActive`, `BountyAwarded`, `BountyClaimed`, `BountyCanceled`, `BountyExtended`, `BountyApproved`, `CuratorProposed`, `CuratorUnassigned`, `CuratorAccepted`, `DepositPoked`

### Pallet: Assets

**Extrinsics (callable functions):**

- `Assets.create(id, admin, min_balance)` — Issue a new class of fungible assets from a public origin
- `Assets.force_create(id, owner, is_sufficient, min_balance)` — Issue a new class of fungible assets from a privileged origin
- `Assets.start_destroy(id)` — Start the process of destroying a fungible asset class
- `Assets.destroy_accounts(id)` — Destroy all accounts associated with a given asset
- `Assets.destroy_approvals(id)` — Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit)
- `Assets.finish_destroy(id)` — Complete destroying asset and unreserve currency
- `Assets.mint(id, beneficiary, amount)` — Mint assets of a particular class
- `Assets.burn(id, who, amount)` — Reduce the balance of who by as much as possible up to amount assets of id
- `Assets.transfer(id, target, amount)` — Move some assets from the sender account to another
- `Assets.transfer_keep_alive(id, target, amount)` — Move some assets from the sender account to another, keeping the sender account alive
- `Assets.force_transfer(id, source, dest, amount)` — Move some assets from one account to another
- `Assets.freeze(id, who)` — Disallow further unprivileged transfers of an asset id from an account who
- `Assets.thaw(id, who)` — Allow unprivileged transfers to and from an account again
- `Assets.freeze_asset(id)` — Disallow further unprivileged transfers for the asset class
- `Assets.thaw_asset(id)` — Allow unprivileged transfers for the asset again
- `Assets.transfer_ownership(id, owner)` — Change the Owner of an asset
- `Assets.set_team(id, issuer, admin, freezer)` — Change the Issuer, Admin and Freezer of an asset
- `Assets.set_metadata(id, name, symbol, decimals)` — Set the metadata for an asset
- `Assets.clear_metadata(id)` — Clear the metadata for an asset
- `Assets.force_set_metadata(id, name, symbol, decimals, is_frozen)` — Force the metadata for an asset to some value
- `Assets.force_clear_metadata(id)` — Clear the metadata for an asset
- `Assets.force_asset_status(id, owner, issuer, admin, freezer, min_balance, is_sufficient, is_frozen)` — Alter the attributes of a given asset
- `Assets.approve_transfer(id, delegate, amount)` — Approve an amount of asset for transfer by a delegated third-party account
- `Assets.cancel_approval(id, delegate)` — Cancel all of some asset approved for delegated transfer by a third-party account
- `Assets.force_cancel_approval(id, owner, delegate)` — Cancel all of some asset approved for delegated transfer by a third-party account
- `Assets.transfer_approved(id, owner, destination, amount)` — Transfer some asset balance from a previously delegated account to some third-party account
- `Assets.touch(id)` — Create an asset account for non-provider assets
- `Assets.refund(id, allow_burn)` — Return the deposit (if any) of an asset account or a consumer reference (if any) of an account
- `Assets.set_min_balance(id, min_balance)` — Sets the minimum balance of an asset
- `Assets.touch_other(id, who)` — Create an asset account for who
- `Assets.refund_other(id, who)` — Return the deposit (if any) of a target asset account
- `Assets.block(id, who)` — Disallow further unprivileged transfers of an asset id to and from an account who
- `Assets.transfer_all(id, dest, keep_alive)` — Transfer the entire transferable balance from the caller asset account
- `Assets.set_reserves(id, reserves)` — Sets the trusted reserve information of an asset

**Storage items:** `Asset`, `Account`, `Approvals`, `Metadata`, `Reserves`, `NextAssetId`

**Events:** `Created`, `Issued`, `Transferred`, `Burned`, `TeamChanged`, `OwnerChanged`, `Frozen`, `Thawed`, `AssetFrozen`, `AssetThawed`, `AccountsDestroyed`, `ApprovalsDestroyed`, `DestructionStarted`, `Destroyed`, `ForceCreated`, `MetadataSet`, `MetadataCleared`, `ApprovedTransfer`, `ApprovalCancelled`, `TransferredApproved`, `AssetStatusChanged`, `AssetMinBalanceChanged`, `Touched`, `Blocked`, `Deposited`, `Withdrawn`, `ReservesUpdated`, `ReservesRemoved`, `IssuedCredit`, `BurnedCredit`, `IssuedDebt`, `BurnedDebt`

### Pallet: Mmr

**Storage items:** `RootHash`, `NumberOfLeaves`, `Nodes`

### Pallet: NominationPools

**Extrinsics (callable functions):**

- `NominationPools.join(amount, pool_id)` — Stake funds with a pool
- `NominationPools.bond_extra(extra)` — Bond extra more funds from origin into the pool to which they already belong
- `NominationPools.claim_payout()` — A bonded member can use this to claim their payout based on the rewards that the pool has accumulated since their last claimed payout (OR since joining if this is their first time claiming rewards)
- `NominationPools.unbond(member_account, unbonding_points)` — Unbond up to unbonding_points of the member_account's funds from the pool
- `NominationPools.pool_withdraw_unbonded(pool_id, num_slashing_spans)` — Call withdraw_unbonded for the pools account
- `NominationPools.withdraw_unbonded(member_account, num_slashing_spans)` — Withdraw unbonded funds from member_account
- `NominationPools.create(amount, root, nominator, bouncer)` — Create a new delegation pool
- `NominationPools.create_with_pool_id(amount, root, nominator, bouncer, pool_id)` — Create a new delegation pool with a previously used pool id   Arguments  same as create with the inclusion of * pool_id - A valid PoolId.
- `NominationPools.nominate(pool_id, validators)` — Nominate on behalf of the pool
- `NominationPools.set_state(pool_id, state)` — Set a new state for the pool
- `NominationPools.set_metadata(pool_id, metadata)` — Set a new metadata for the pool
- `NominationPools.set_configs(min_join_bond, min_create_bond, max_pools, max_members, max_members_per_pool, global_max_commission)` — Update configurations for the nomination pools
- `NominationPools.update_roles(pool_id, new_root, new_nominator, new_bouncer)` — Update the roles of the pool
- `NominationPools.chill(pool_id)` — Chill on behalf of the pool
- `NominationPools.bond_extra_other(member, extra)` — origin bonds funds from extra for some pool member member into their respective pools
- `NominationPools.set_claim_permission(permission)` — Allows a pool member to set a claim permission to allow or disallow permissionless bonding and withdrawing
- `NominationPools.claim_payout_other(other)` — origin can claim payouts on some pool member other's behalf
- `NominationPools.set_commission(pool_id, new_commission)` — Set the commission of a pool
- `NominationPools.set_commission_max(pool_id, max_commission)` — Set the maximum commission of a pool
- `NominationPools.set_commission_change_rate(pool_id, change_rate)` — Set the commission change rate for a pool
- `NominationPools.claim_commission(pool_id)` — Claim pending commission
- `NominationPools.adjust_pool_deposit(pool_id)` — Top up the deficit or withdraw the excess ED from the pool
- `NominationPools.set_commission_claim_permission(pool_id, permission)` — Set or remove a pool's commission claim permission
- `NominationPools.apply_slash(member_account)` — Apply a pending slash on a member
- `NominationPools.migrate_delegation(member_account)` — Migrates delegated funds from the pool account to the member_account
- `NominationPools.migrate_pool_to_delegate_stake(pool_id)` — Migrate pool from [adapter::StakeStrategyType::Transfer] to [adapter::StakeStrategyType::Delegate]

**Storage items:** `TotalValueLocked`, `MinJoinBond`, `MinCreateBond`, `MaxPools`, `MaxPoolMembers`, `MaxPoolMembersPerPool`, `GlobalMaxCommission`, `PoolMembers`, `CounterForPoolMembers`, `BondedPools`, `CounterForBondedPools`, `RewardPools`, `CounterForRewardPools`, `SubPoolsStorage`, `CounterForSubPoolsStorage`, `Metadata`, `CounterForMetadata`, `LastPoolId`, `ReversePoolIdLookup`, `CounterForReversePoolIdLookup`, `ClaimPermissions`

**Events:** `Created`, `Bonded`, `PaidOut`, `Unbonded`, `Withdrawn`, `Destroyed`, `StateChanged`, `MemberRemoved`, `RolesUpdated`, `PoolSlashed`, `UnbondingPoolSlashed`, `PoolCommissionUpdated`, `PoolMaxCommissionUpdated`, `PoolCommissionChangeRateUpdated`, `PoolCommissionClaimPermissionUpdated`, `PoolCommissionClaimed`, `MinBalanceDeficitAdjusted`, `MinBalanceExcessAdjusted`, `MemberClaimPermissionUpdated`, `MetadataUpdated`, `PoolNominationMade`, `PoolNominatorChilled`, `GlobalParamsUpdated`

### Pallet: Username

**Extrinsics (callable functions):**

- `Username.create_user_name(username)`
- `Username.create_user_profile(first_name, last_name, country, birthday, avatar)`

**Storage items:** `UsernameToAccountIdMap`, `AccountIdToUserIdMap`, `AccountIdToUsernameMap`, `AccountIdToUserProfile`

**Events:** `AccountIdCreated`, `ProfileCreated`

### Pallet: IpfsCore

**Extrinsics (callable functions):**

- `IpfsCore.set_version(version)`

**Storage items:** `Version`

### Pallet: IpfsAddress

**Extrinsics (callable functions):**

- `IpfsAddress.add_peer_id(peer_id, authority_index, signature)`
- `IpfsAddress.store_published_data(data, authority_index, signature)`

**Storage items:** `ValidatorPeerID`, `LastPublishedData`

**Events:** `IPFSCidAdded`

### Pallet: Ethereum

**Extrinsics (callable functions):**

- `Ethereum.transact(transaction)` — Transact an Ethereum transaction.

**Storage items:** `Pending`, `CounterForPending`, `CurrentBlock`, `CurrentReceipts`, `CurrentTransactionStatuses`, `BlockHash`

**Events:** `Executed`

### Pallet: EVM

**Extrinsics (callable functions):**

- `EVM.withdraw(address, value)` — Withdraw balance from EVM into currency/balances pallet.
- `EVM.call(source, target, input, value, gas_limit, max_fee_per_gas, max_priority_fee_per_gas, nonce, access_list, authorization_list)` — Issue an EVM call operation
- `EVM.create(source, init, value, gas_limit, max_fee_per_gas, max_priority_fee_per_gas, nonce, access_list, authorization_list)` — Issue an EVM create operation
- `EVM.create2(source, init, salt, value, gas_limit, max_fee_per_gas, max_priority_fee_per_gas, nonce, access_list, authorization_list)` — Issue an EVM create2 operation.

**Storage items:** `AccountCodes`, `AccountCodesMetadata`, `AccountStorages`

**Events:** `Log`, `Created`, `CreatedFailed`, `Executed`, `ExecutedFailed`

### Pallet: BaseFee

**Extrinsics (callable functions):**

- `BaseFee.set_base_fee_per_gas(fee)`
- `BaseFee.set_elasticity(elasticity)`

**Storage items:** `BaseFeePerGas`, `Elasticity`

**Events:** `NewBaseFeePerGas`, `BaseFeeOverflow`, `NewElasticity`

### Pallet: HotfixSufficients

**Extrinsics (callable functions):**

- `HotfixSufficients.hotfix_inc_account_sufficients(addresses)` — Increment sufficients for existing accounts having a nonzero nonce but zero sufficients, consumers and providers value

### Pallet: BagsList

**Extrinsics (callable functions):**

- `BagsList.rebag(dislocated)` — Declare that some dislocated account has, through rewards or penalties, sufficiently changed its score that it should properly fall into a different bag than its current one
- `BagsList.put_in_front_of(lighter)` — Move the caller's Id directly in front of lighter
- `BagsList.put_in_front_of_other(heavier, lighter)` — Same as [Pallet::put_in_front_of], but it can be called by anyone

**Storage items:** `ListNodes`, `CounterForListNodes`, `ListBags`, `NextNodeAutoRebagged`, `Lock`, `PendingRebag`, `CounterForPendingRebag`

**Events:** `Rebagged`, `ScoreUpdated`

### Pallet: Funding

**Extrinsics (callable functions):**

- `Funding.claim(account, signature)` — Claim initial funding using an unsigned extrinsic authorized by an account signature
- `Funding.set_funding_enabled(enabled)` — Enable or disable the funding mechanism

**Storage items:** `Claimed`, `FundingEnabled`, `ClaimCount`

**Events:** `FundingClaimed`, `FundingStatusChanged`

### Pallet: TransactionStorage

**Extrinsics (callable functions):**

- `TransactionStorage.store(data)` — Index and store data off chain
- `TransactionStorage.renew(block, index)` — Renew previously stored data
- `TransactionStorage.check_proof(proof)` — Check storage proof for block number block_number() - RetentionPeriod

**Storage items:** `Authorizations`, `Transactions`, `ByteFee`, `EntryFee`, `RetentionPeriod`, `BlockTransactions`, `ProofChecked`

**Events:** `Stored`, `Renewed`, `ProofChecked`, `AccountAuthorized`, `AccountAuthorizationRefreshed`, `PreimageAuthorized`, `PreimageAuthorizationRefreshed`, `ExpiredAccountAuthorizationRemoved`, `ExpiredPreimageAuthorizationRemoved`

### Pallet: Utility

**Extrinsics (callable functions):**

- `Utility.batch(calls)` — Send a batch of dispatch calls
- `Utility.as_derivative(index, call)` — Send a call through an indexed pseudonym of the sender
- `Utility.batch_all(calls)` — Send a batch of dispatch calls and atomically execute them
- `Utility.dispatch_as(as_origin, call)` — Dispatches a function call with a provided origin
- `Utility.force_batch(calls)` — Send a batch of dispatch calls
- `Utility.with_weight(call, weight)` — Dispatch a function call with a specified weight
- `Utility.if_else(main, fallback)` — Dispatch a fallback call in the event the main call fails to execute
- `Utility.dispatch_as_fallible(as_origin, call)` — Dispatches a function call with a provided origin

**Events:** `BatchInterrupted`, `BatchCompleted`, `BatchCompletedWithErrors`, `ItemCompleted`, `ItemFailed`, `DispatchedAs`, `IfElseMainSuccess`, `IfElseFallbackCalled`

### Pallet: VbanFees

**Extrinsics (callable functions):**

- `VbanFees.withdraw_fees(to, amount)`

**Storage items:** `TotalCollected`

**Events:** `FeeCharged`, `FeesWithdrawn`

### Pallet: VbanProfiles

**Extrinsics (callable functions):**

- `VbanProfiles.follow_account(account)` — Follow another account
- `VbanProfiles.unfollow_account(account)` — Unfollow an account

**Storage items:** `Following`, `Followers`, `FollowersCount`, `FollowingCount`

**Events:** `AccountFollowed`, `AccountUnfollowed`

### Pallet: VbanGroups

**Extrinsics (callable functions):**

- `VbanGroups.create_group(name, visibility, logo)` — Create a new group with the given name, visibility, and logo
- `VbanGroups.join_group(group_id)` — Join an existing group by group ID
- `VbanGroups.leave_group(group_id)` — Leave a group by group ID
- `VbanGroups.delete_group(group_id)` — Delete a group by group ID

**Storage items:** `NextGroupId`, `Groups`, `GroupMembers`, `UserGroups`, `GroupMemberCount`, `GroupKeywords`

**Events:** `GroupCreated`, `MemberAdded`, `MemberRemoved`, `GroupDeleted`

### Pallet: VbanPosts

**Extrinsics (callable functions):**

- `VbanPosts.create_post(post_type, content, visibility, group_id)`
- `VbanPosts.delete_post(post_id)`
- `VbanPosts.add_post_reaction(post_id, reaction)`
- `VbanPosts.delete_post_reaction(post_id)`
- `VbanPosts.track_post_view(post_id)`

**Storage items:** `NextPostId`, `Posts`, `TotalPostCount`, `PostReactions`, `ViewedPosts`, `CommentCount`, `AccountPostCount`, `AccountPosts`, `GlobalFeedCount`, `GlobalFeedBySeq`, `CommentSeqCount`, `CommentsByParent`

**Events:** `PostCreated`, `PostDeleted`, `ReactionCreated`, `ReactionDeleted`, `PostViewed`

### Pallet: VbanEcon

**Extrinsics (callable functions):**

- `VbanEcon.set_params(upd)` — Update any subset of the economic parameters

**Storage items:** `EconParams`

**Events:** `ParamsUpdated`

### Pallet: VbanTipping

**Extrinsics (callable functions):**

- `VbanTipping.tip(post, amount)` — Tip a post's owner
- `VbanTipping.report_post(post)` — File a report against a post, reserving report_stake
- `VbanTipping.resolve_report(id, upheld)` — Resolve a report (moderation authority = the econ admin origin, i.e

**Storage items:** `PostTips`, `TipsReceived`, `NextReportId`, `Reports`

**Events:** `TipSent`, `PostReported`, `ReportResolved`

### Pallet: VbanEpoch

**Extrinsics (callable functions):**

- `VbanEpoch.bind_referrer(referrer)` — Bind the caller to the referrer who brought them
- `VbanEpoch.settle_epoch(payouts)` — Settle this epoch's merit payouts from the pool (council origin)
- `VbanEpoch.claim()` — Pay out every matured pending reward of the caller from the pool account
- `VbanEpoch.clawback(who, epoch)` — Void an unclaimed (typically still-vesting) reward — the clawback for later-flagged fakes

**Storage items:** `CurrentEpoch`, `EpochStartedAt`, `ReferrerOf`, `ReferralCount`, `Pending`, `EpochSpent`, `EarnedInEpoch`

**Events:** `EpochAdvanced`, `ReferrerBound`, `EpochSettled`, `Claimed`, `ClawedBack`

### Pallet: VbanUpgrade

**Extrinsics (callable functions):**

- `VbanUpgrade.schedule(call)` — Queue call for Root execution after the standard delay
- `VbanUpgrade.fast_track(call)` — Queue call with the EMERGENCY delay
- `VbanUpgrade.cancel(id)` — Withdraw a queued call before it executes.

**Storage items:** `NextId`, `Queue`

**Events:** `Scheduled`, `Cancelled`, `Executed`, `Undecodable`


---
*Generated from live chain metadata. To reproduce: connect any Substrate client to the public RPC and call `state_getMetadata`.*