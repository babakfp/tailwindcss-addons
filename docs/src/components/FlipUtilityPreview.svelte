<script lang="ts">
    import Preview from "../components/Preview.svelte"

    let { utilities }: { utilities: [string, string][] } = $props()
</script>

<Preview >
    <div class="flex flex-wrap gap-8">
        {@render Item({ utility: "ORIGINAL" })}
        {#each utilities as [utility]}
            {@render Item({ utility, className: "font-mono" })}
        {/each}
    </div>
</Preview>

{#snippet Item({ utility, className }: { utility: string; className?: string })}
    <div class="flex mt-0! flex-col flex-1 gap-2 justify-center text-nowrap p-8 items-center">
        <span class="text-gray-400 text-sm {className}">{utility}</span>
        <div
            class="size-8 border-4 border-b-(--sl-color-green) border-r-(--sl-color-green) border-gray-200 {utility}" 
        ></div>
    </div>
{/snippet}
