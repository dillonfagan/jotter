<script>
    import Command from "$components/Command.svelte";
    import AlignLeft from "$components/icons/AlignLeft.svelte";
    import Save from "$components/icons/Save.svelte";

    let title = "New document";
    let prose = "";
</script>

<div class="w-screen flex flex-row space-x-4 justify-center p-10">
    <div class="w-1/2 min-h-screen p-8 rounded bg-black shadow flex flex-col space-y-4">
        <h1 class="font-bold text-white text-4xl">{title}</h1>
        <textarea
            bind:value={prose}
            placeholder="Start typing..."
            class="w-full h-full bg-transparent text-gray-50 font-medium text-xl leading-loose resize-none" />
    </div>
    <div class="space-y-4">
        <Command><AlignLeft class="h-6 w-6" /></Command>
        <Command><Save class="h-6 w-6" /></Command>
    </div>
</div>