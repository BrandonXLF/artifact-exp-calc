<script lang="ts">
	import Icon from './icon.svelte';
	import NumberDisplay from '$lib/components/number-display.svelte';
	import { RESIN_PER_RUN } from '$lib/data';

	export let requiredRuns: number;

	$: requiredResin = RESIN_PER_RUN * requiredRuns;
</script>

<span class="inline-flex items-center gap-[0.35rem]">
	<NumberDisplay number={requiredResin} />
	<Icon alt="Resin" src="resin.webp" />
</span>
