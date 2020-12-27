<script>
    import Command from "$components/Command.svelte";
    import Save from "$components/icons/Save.svelte";
    let prose = "";
</script>

<div class="w-screen flex flex-row space-x-4 justify-center p-10">
    <div id="page" class="w-1/2 min-h-screen p-8 rounded bg-black shadow">
        <textarea
            bind:value={prose}
            placeholder="Start typing..."
            class="page w-full h-full bg-transparent text-gray-50 font-serif font-medium text-lg leading-loose resize-none" />
    </div>
    <div>
        <Command><Save class="h-6 w-6" /></Command>
    </div>
</div>

<style>
    .page {
        caret-color: #93C5FD;
    }

    .page::selection {
		background-color: #60A5FA;
	}
</style>