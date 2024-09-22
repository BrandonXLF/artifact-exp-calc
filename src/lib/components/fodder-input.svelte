<script lang="ts">
	import Cell from '$lib/components/cell.svelte';
	import ExpInput from '$lib/components/exp-input.svelte';
	import AddIcon from '$lib/components/add-icon.svelte';

	export let fodderList: Fodder[];

	function deleteFodder(i: number) {
		fodderList.splice(i, 1);
		fodderList = fodderList;
	}
</script>

<div class="flex h-full gap-4">
	{#each fodderList as [exp, rarity, times], i}
		<Cell>
			<ExpInput
				bind:exp
				bind:rarity
				bind:times
				showTimes
				isFodder
				on:delete={() => deleteFodder(i)}
			/>
		</Cell>
	{/each}
	<div class="flex items-center">
		<button
			title="Add Fodder"
			class="rounded-lg border border-solid border-light bg-secondary p-2"
			on:click={() => (fodderList = [...fodderList, [0, 4, 1]])}
		>
			<AddIcon />
		</button>
	</div>
</div>
