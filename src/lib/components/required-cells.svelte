<script lang="ts">
	import Resin from '$lib/components/resin.svelte';
	import Number from '$lib/components/number.svelte';
	import { AVERAGE_BONUS } from '$lib/data';
	import ResinBreakdown from '$lib/components/resin-breakdown.svelte';
	import { calcRunsRequired } from '$lib/exp-calcs';
	import Cell from '$lib/components/cell.svelte';
	import InfoIcon from './info-icon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import { makeId } from '$lib/id';

	let requiredWC: number;
	export { requiredWC as baseRequired };
	export let waste: boolean;

	const [popperRef, popperContent] = createPopperActions();
	const popperId = makeId();

	let resinInfo = {
		domainLevel: 4,
		use: { 3: true, 4: true, 5: false }
	} satisfies ResinInfo;
	let showResinInfo = false;

	$: requiredAvg = requiredWC / AVERAGE_BONUS;
	$: requiredRunsAvg = calcRunsRequired(requiredAvg, resinInfo);
	$: requiredRunsWC = calcRunsRequired(requiredWC, resinInfo);
</script>

<Cell title={waste ? 'Excess' : 'Required'} titleClass={waste ? 'text-red-400' : ''}>
	<div>
		<div>
			<span>Avg:</span>
			<span>
				<Number number={requiredAvg} unit="exp" />
				≈
				<Resin requiredRuns={requiredRunsAvg} />
			</span>
		</div>
		<div>
			<span>
				<abbr title="Worst-case">WC</abbr>:
			</span>
			<span>
				<Number number={requiredWC} unit="exp" />
				≈
				<Resin requiredRuns={requiredRunsWC} />
			</span>
		</div>
	</div>
</Cell>

<div class="flex flex-col items-center">
	<h3 class="text-xl font-bold">&ZeroWidthSpace;</h3>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex flex-1 items-center" on:mouseleave={() => (showResinInfo = false)}>
		<button
			use:popperRef
			aria-label="Toggle resin breakdown"
			aria-expanded={showResinInfo ? 'true' : 'false'}
			aria-controls={showResinInfo ? popperId : undefined}
			class="rounded-lg border border-light bg-bg p-2"
			on:click={() => (showResinInfo = !showResinInfo)}
			on:mouseenter={() => (showResinInfo = true)}
		>
			<InfoIcon />
		</button>
		{#if showResinInfo}
			<div
				id={popperId}
				use:popperContent={{
					placement: 'top-start',
					strategy: 'fixed',
					modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
				}}
			>
				<Cell title="Resin Breakdown">
					<ResinBreakdown bind:resinInfo {requiredRunsAvg} {requiredRunsWC} />
				</Cell>
			</div>
		{/if}
	</div>
</div>
