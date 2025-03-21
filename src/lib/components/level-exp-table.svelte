<script lang="ts">
	import { EXP_AMOUNTS, EXP_MAXES, LEVEL_MAXES } from '$lib/data';
	import NumberDisplay from './number-display.svelte';

	export let rarity: Rarity = 5;
</script>

<table class="m-2">
	<thead>
		<tr>
			<th class="p-0 pr-4 text-left" scope="col">Level</th>
			<th class="p-0 px-4 text-left" scope="col">Total EXP</th>
			<th class="p-0 pl-2 text-left" scope="col">EXP to Next</th>
		</tr>
	</thead>
	<tbody>
		{#each EXP_AMOUNTS[rarity] as x, i}
			<tr>
				<th rowspan="2" class:border-t={i !== 0} class="h-8 p-0 pr-4 text-left" scope="row">
					{i}
				</th>
				<td rowspan="2" class:border-t={i !== 0} class="h-8 p-0 px-4">
					<NumberDisplay number={x} />
				</td>
				{#if i === 0}
					<td class="h-4"></td>
				{/if}
			</tr>
			<tr>
				{#if i < LEVEL_MAXES[rarity]}
					<td rowspan="2" class="h-8 p-0 pl-2">
						+ <NumberDisplay number={EXP_MAXES[rarity][i]} />
					</td>
				{:else}
					<td class="h-4"></td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
