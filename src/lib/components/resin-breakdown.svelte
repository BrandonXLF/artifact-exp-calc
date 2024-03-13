<script lang="ts">
	import { ARTIFACTS_PER_RUN, DOMAIN_RARITIES } from '$lib/data';
	import Number from '$lib/components/number.svelte';

	export let requiredRunsAvg: number;
	export let requiredRunsWC: number;
	export let resinInfo: ResinInfo;

	$: requiredArtifacts = Object.fromEntries(
		DOMAIN_RARITIES.map((rarity) => [
			rarity,
			{
				avg: requiredRunsAvg * ARTIFACTS_PER_RUN[resinInfo.domainLevel][rarity],
				wc: requiredRunsWC * ARTIFACTS_PER_RUN[resinInfo.domainLevel][rarity]
			}
		])
	);
</script>

<div>
	<div class="my-1">
		<label>
			<span>Domain level:</span>
			<select bind:value={resinInfo.domainLevel}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
			</select>
		</label>
	</div>
	<table class="text-right [&>tr>:not(:first-child)]:pl-3">
		<tr>
			<th></th>
			<th></th>
			<th>Average</th>
			<th>x1 Only</th>
		</tr>
		{#each DOMAIN_RARITIES as rarity}
			<tr>
				<td><input type="checkbox" bind:checked={resinInfo.use[rarity]} /></td>
				<td>{rarity}-star</td>
				<td>
					{#if resinInfo.use[rarity]}
						<Number number={requiredArtifacts[rarity].avg} decimals={1} />
					{:else}-{/if}
				</td>
				<td>
					{#if resinInfo.use[rarity]}
						<Number number={requiredArtifacts[rarity].wc} decimals={1} />
					{:else}-{/if}
				</td>
			</tr>
		{/each}
	</table>
</div>
