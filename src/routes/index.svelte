<script>
    import save from "$library/save";
    import Command from "$components/Command.svelte";
    import Bold from "$components/icons/Bold.svelte";
    import Italic from "$components/icons/Italic.svelte";
    import AlignLeft from "$components/icons/AlignLeft.svelte";
    import Save from "$components/icons/Save.svelte";

    let doc = {
        title: "New document",
        prose: ""
    };

    const embolden = () => document.execCommand('bold');
</script>

<div class="w-screen flex flex-row space-x-4 justify-center p-10">
    <div class="w-1/2 min-h-screen p-8 rounded bg-black shadow flex flex-col space-y-4">
        <h1 bind:textContent={doc.title} contenteditable="true" class="font-bold text-white text-4xl" />
        <textarea
            bind:value={doc.prose}
            placeholder="Start typing..."
            class="w-full h-full bg-transparent text-gray-50 font-medium text-xl leading-loose resize-none" />
    </div>
    <div class="space-y-4">
        <Command on:click={embolden}><Bold class="h-6 w-6" /></Command>
        <Command><Italic class="h-6 w-6" /></Command>
        <Command><AlignLeft class="h-6 w-6" /></Command>
        <Command on:click={() => save(doc)}><Save class="h-6 w-6" /></Command>
    </div>
</div>