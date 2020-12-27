<script>
    import save from "$library/save";
    import Command from "$components/Command.svelte";
    import AlignLeft from "$components/icons/AlignLeft.svelte";
    import Save from "$components/icons/Save.svelte";

    let doc = {
        title: "New document",
        prose: ""
    };
</script>

<div class="w-screen flex flex-row space-x-4 justify-center p-10">
    <div class="w-1/2 min-h-screen p-8 rounded bg-black shadow flex flex-col space-y-4">
        <h1 contenteditable="true" class="font-bold text-white text-4xl" >{doc.title}</h1>
        <textarea
            bind:value={doc.prose}
            placeholder="Start typing..."
            class="w-full h-full bg-transparent text-gray-50 font-medium text-xl leading-loose resize-none" />
    </div>
    <div class="space-y-4">
        <Command><AlignLeft class="h-6 w-6" /></Command>
        <Command on:click={() => save(doc)}><Save class="h-6 w-6" /></Command>
    </div>
</div>