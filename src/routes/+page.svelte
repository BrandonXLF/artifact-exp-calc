<script lang="ts">
	import { calculateTotalExp, calcMaxExp } from '$lib/exp-calcs';
	import Row from '$lib/components/row.svelte';
	import Cell from '$lib/components/cell.svelte';
	import ExpInput from '$lib/components/exp-input.svelte';
	import MatInput from '$lib/components/mat-input.svelte';
	import VSep from '$lib/components/v-sep.svelte';
	import Title from '$lib/components/title.svelte';
	import FodderInput from '$lib/components/fodder-input.svelte';
	import RequiredCells from '$lib/components/required-cells.svelte';
	import Bottom from '$lib/components/bottom.svelte';

	let fodderList: Fodder[] = [];
	let currentExp = 0;
	let matExp = 0;
	let rarity: Rarity = 5;
	let targetExp = calcMaxExp(rarity);

	$: final = calculateTotalExp(currentExp, matExp, fodderList);
	$: waste = Math.sign(targetExp - final) < 0;
	$: baseRequired = Math.abs(targetExp - final);
	$: targetExp = calcMaxExp(rarity);
</script>

<div>
	<Row noSep>
		<Title />
	</Row>
	<Row noSep>
		<Cell title="Current">
			<ExpInput bind:exp={currentExp} bind:rarity />
		</Cell>
		<VSep />
		<Cell title="Materials">
			<MatInput bind:exp={matExp} />
		</Cell>
		<VSep />
		<Cell title="Fodder / Salvage" fullHeight noStyle>
			<FodderInput bind:fodderList />
		</Cell>
	</Row>
	<Row>
		<Cell title="Final">
			<ExpInput bind:exp={final} {rarity} noRaritySet readOnly />
		</Cell>
	</Row>
	<Row>
		<Cell title="Target">
			<ExpInput bind:exp={targetExp} {rarity} noRaritySet noRemainder />
		</Cell>
	</Row>
	<Row>
		<RequiredCells {waste} {baseRequired} />
	</Row>
	<Row noSep>
		<Bottom />
	</Row>
</div>
