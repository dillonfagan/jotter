<script>
    import { onMount } from "svelte";
    import showdown from "showdown";
    import settings from "$data/settings";
    import { loadSettings } from "$data/settings";
    import save from "$library/save";
    import Command from "$components/Command.svelte";
    import Sun from "$components/icons/Sun.svelte";
    import Moon from "$components/icons/Moon.svelte";
    import Eye from "$components/icons/Eye.svelte";
    import Save from "$components/icons/Save.svelte";

    const converter = new showdown.Converter({
        smoothLivePreview: true,
        noHeaderId: true,
        requireSpaceBeforeHeadingText: true,
        simpleLineBreaks: true,
        headerLevelStart: 2
    });

    let doc = {
        title: "New document",
        prose: ""
    };

    let showPreview = false;
    let markup = "";

    onMount(() => {
        loadSettings();
    });

    function preview() {
        markup = converter.makeHtml(doc.prose);
        showPreview = !showPreview;
    }
</script>

<div class="w-screen flex flex-row space-x-4 justify-center p-10">
    <div class="page min-h-screen p-8 rounded bg-gray-50 dark:bg-black shadow flex flex-col space-y-4">
        <h1 bind:textContent={doc.title} contenteditable="true" class="font-bold text-black dark:text-white text-4xl outline-none" />
        <div class="w-full h-full text-gray-800 dark:text-gray-50 font-medium text-xl leading-loose">
            {#if showPreview}
                {@html markup}
            {:else}
                <textarea
                    bind:value={doc.prose}
                    placeholder="Start typing..."
                    class="w-full h-full bg-transparent outline-none resize-none" />
            {/if}
        </div>
    </div>
    <div class="space-y-4">
        <Command on:click={() => settings.dark = !settings.dark}>
            {#if settings.dark}
                <Sun class="h-6 w-6" />
            {:else}
                <Moon class="h-6 w-6" />
            {/if}
        </Command>
        <Command on:click={preview}><Eye class="h-6 w-6" /></Command>
        <Command on:click={() => save(doc)}><Save class="h-6 w-6" /></Command>
    </div>
</div>

<style>
    .page {
        width: 8in;
    }
</style>