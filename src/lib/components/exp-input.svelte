<script lang="ts">
	import { calcLevelAndRemainder } from '$lib/exp-calcs';
	import { EXP_AMOUNTS, EXP_MAXES, LEVEL_MAXES } from '$lib/data';
	import { createEventDispatcher } from 'svelte';
	import Number from '$lib/components/number.svelte';
	import { makeId } from '$lib/id';
	import CloseIcon from './close-icon.svelte';

	export let exp = 0;
	export let times = 1;
	export let rarity: Rarity = 5;
	export let noRemainder = false;
	export let noRaritySet = false;
	export let readOnly = false;
	export let showTimes = false;

	const dispatch = createEventDispatcher();
	const exportId = makeId();
	const levelId = makeId();
	const expId = makeId();

	$: [level, remainder] = calcLevelAndRemainder(exp, rarity);
</script>

<div class="grid grid-cols-label-content items-center gap-2 leading-4">
	{#if !noRaritySet}
		<label for={exportId} class="text-right">Rarity</label>
		<select id={exportId} bind:value={rarity}>
			<option value={1}>1</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
			<option value={5}>5</option>
		</select>
	{/if}
	<label for={levelId} class="text-right">Level</label>
	{#if readOnly}
		<Number number={level} />
	{:else}
		<input
			id={levelId}
			type="number"
			value={level}
			min="0"
			max={LEVEL_MAXES[rarity]}
			readonly={readOnly}
			on:change={(e) => (exp = EXP_AMOUNTS[rarity][e.currentTarget.valueAsNumber] + remainder)}
		/>
	{/if}
	{#if !noRemainder}
		<label for={expId} class="text-right">EXP</label>
		{#if readOnly}
			<span>
				<Number number={remainder} />
				/
				<Number number={EXP_MAXES[rarity][level]} />
			</span>
		{:else}
			<input
				id={expId}
				type="number"
				value={remainder}
				min="0"
				max={EXP_MAXES[rarity][level]}
				readonly={readOnly}
				on:change={(e) => (exp = EXP_AMOUNTS[rarity][level] + e.currentTarget.valueAsNumber)}
			/>
		{/if}
	{/if}
	<div class="text-right">=</div>
	<Number number={exp} unit="exp" />
	{#if showTimes}
		<div class="text-right text-lg">&times;</div>
		<div class="flex gap-2">
			<input bind:value={times} type="number" min="0" class="w-12" />
			<button title="Remove" class="text-red-300" on:click={() => dispatch('delete')}>
				<CloseIcon />
			</button>
		</div>
	{/if}
</div>
