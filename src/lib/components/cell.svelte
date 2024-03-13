<script lang="ts">
	export let title = '';
	export let titleClass = '';
	export let cellClass = '';
	export let noStyle = false;
	export let fullHeight = false;
</script>

<div class:flex={fullHeight} class:flex-col={fullHeight} class:flex-1={fullHeight}>
	{#if title}
		<h3 class={`text-xl font-bold ${titleClass}`}>{title}</h3>
	{/if}
	<div
		class={cellClass}
		class:border={!noStyle}
		class:border-extra-light={!noStyle}
		class:bg-secondary={!noStyle}
		class:p-2={!noStyle}
		class:rounded-lg={!noStyle}
		class:flex-1={fullHeight}
	>
		<slot />
	</div>
</div>
