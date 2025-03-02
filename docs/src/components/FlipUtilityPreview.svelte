<script lang="ts">
    import Preview from "../components/Preview.svelte"

    let { utilities }: { utilities: [string, string][] } = $props()
</script>

<Preview class="p-8">
    <div class="flex flex-wrap gap-8">
        <div class="grid flex-1 justify-items-center gap-4">
            <!-- TODO: remove ...? -->
            <span class="font-mono text-gray-400">...</span>
            <div class="size-8 border-t-2 border-l-2 border-gray-200"></div>
        </div>
        {#each utilities as [utility]}
            <div class="grid flex-1 justify-items-center gap-4">
                <span class="font-mono text-gray-400">.{utility}</span>
                <div
                    class="size-8 border-t-2 border-l-2 border-gray-200 {utility}"
                ></div>
            </div>
        {/each}
    </div>
</Preview>
