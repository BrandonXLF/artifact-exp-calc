<script lang="ts">
	export let src: string | undefined = undefined;
	export let alt: string | undefined = undefined;
</script>

<img class="inline h-5" {alt} title={alt} {src} />
