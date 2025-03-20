<script lang="ts">
	import { makeId } from '$lib/id';
	import Icon from './icon.svelte';
	import LabelContentGrid from './label-content-grid.svelte';
	import NumberDisplay from './number-display.svelte';

	export let exp = 0;

	let essence = 0;
	let unction = 0;

	const essenceId = makeId();
	const unctionId = makeId();

	function setExp() {
		exp = essence * 10000 + unction * 2500;
	}
</script>

<LabelContentGrid>
	<label for={essenceId} class="text-right">
		<Icon alt="Essence" src="essence.png" />
	</label>
	<input id={essenceId} type="number" bind:value={essence} min="0" max="9999" on:change={setExp} />
	<label for={unctionId} class="text-right">
		<Icon alt="Unction" src="unction.png" />
	</label>
	<input id={unctionId} type="number" bind:value={unction} min="0" max="9999" on:change={setExp} />
	<div class="text-right">=</div>
	<NumberDisplay number={exp} unit="exp" />
</LabelContentGrid>
