<script>
	import "./global.pcss";
</script>

<svelte:head>
    <title>Jotter</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:root {
		@apply bg-gray-200;
	}
</style>