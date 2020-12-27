<script>
	import "./global.pcss";
</script>

<svelte:head>
    <title>Jotter</title>
</svelte:head>

<main class="h-full w-full bg-gray-300 dark:bg-gray-900">
	<slot />
</main>

<style>
	:root {
		@apply font-serif;
		caret-color: #93C5FD;
	}

    ::selection {
		background: #60A5FA;
	}
</style>