<script lang="ts">
	export let noSep = false;
</script>

<div class="my-3 flex gap-3 overflow-auto pb-3" class:border-t={!noSep} class:pt-3={!noSep}>
	<slot />
</div>
