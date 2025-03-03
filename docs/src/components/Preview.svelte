<script lang="ts">
    import clsx from "clsx"
    import type { Snippet } from "svelte"

    let {
        class: class_,
        useGrid = true,
        children,
    }: {
        class?: string
        useGrid?: boolean
        children: Snippet
    } = $props()
</script>

<div
    class={clsx(
        "rounded border-2 border-gray-800 p-4",
        useGrid ?
            "bg-grid-gray-800/50 bg-center shadow-[inset_0_0_4rem_2rem_var(--sl-color-black)]"
        :   "",
    )}
>
    {@render children()}
</div>
