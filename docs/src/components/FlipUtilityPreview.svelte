<script lang="ts">
    import Preview from "../components/Preview.svelte"

    let { utilities }: { utilities: [string, string][] } = $props()
</script>

<Preview>
    <div class="flex flex-wrap gap-8">
        {@render Item({ utility: "ORIGINAL" })}
        {#each utilities as [utility]}
            {@render Item({ utility, className: "font-mono" })}
        {/each}
    </div>
</Preview>

{#snippet Item({ utility, className }: { utility: string; className?: string })}
    <div
        class="mt-0! flex flex-1 flex-col items-center justify-center gap-2 p-8 text-nowrap"
    >
        <span class="text-sm text-gray-400 {className}">{utility}</span>
        <div
            class="size-8 border-4 border-gray-200 border-r-(--sl-color-green) border-b-(--sl-color-green) {utility}"
        ></div>
    </div>
{/snippet}
