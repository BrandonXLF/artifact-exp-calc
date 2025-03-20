<script lang="ts">
	export let number: number;
	export let decimals: number = 0;
	export let unit = '';

	$: formattedNumber = number.toLocaleString(undefined, {
		maximumFractionDigits: decimals
	});
</script>

<span
	>{formattedNumber}{#if unit}{' '}{unit}{/if}</span
>
