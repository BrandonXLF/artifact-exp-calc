<script lang="ts">
	import Icon from './icon.svelte';
	import Number from '$lib/components/number.svelte';
	import { RESIN_PER_RUN } from '$lib/data';

	export let requiredRuns: number;

	$: requiredResin = RESIN_PER_RUN * requiredRuns;
</script>

<span class="inline-flex items-center gap-[0.35rem]">
	<Number number={requiredResin} />
	<Icon alt="Resin" src="resin.webp" />
</span>
