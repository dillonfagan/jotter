<script>
    let prose = "";
</script>

<div class="w-screen flex flex-row justify-center p-10">
    <div id="page" class="w-1/2 min-h-screen p-8 rounded bg-black shadow">
        <textarea
            bind:value={prose}
            placeholder="Start typing..."
            class="page w-full h-full bg-transparent text-gray-50 font-serif text-lg leading-loose resize-none" />
    </div>
</div>

<style>
    .page {
        caret-color: lightseagreen;
    }

    .page::selection {
		background-color: lightseagreen;
	}
</style>