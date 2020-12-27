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
		@apply bg-gray-900 font-serif;
		caret-color: #93C5FD;
	}

    ::selection {
		background: #60A5FA;
	}
</style>