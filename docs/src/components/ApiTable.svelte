<!-- https://github.com/tailwindlabs/tailwindcss.com/blob/cccc78041c533fa52f8514baa55d42017eb4bbbc/src/components/api-table.tsx -->

<script lang="ts">
    import clsx from "clsx"

    let { rows }: { rows: [string, string][] } = $props()

    let isExpanded = $state(false)

    let isExpandable = rows.length > 15

    let aboveTheFold = isExpandable ? rows.slice(0, 10) : rows
    let belowTheFold = isExpandable ? rows.slice(10) : []

    let ref = $state<HTMLTableSectionElement>()

    // Dependency: isExpanded
    $effect(() => {
        let element = ref
        if (!element) return

        if (!("onbeforematch" in document.body)) {
            element.hidden = !isExpanded
            return
        }

        if (isExpanded) {
            element.removeAttribute("hidden")
        } else {
            element.setAttribute("hidden", "until-found")
        }

        function onBeforeMatch() {
            isExpanded = true
        }

        element.addEventListener("beforematch", onBeforeMatch)
        return () => {
            element.removeEventListener("beforematch", onBeforeMatch)
        }
    })
</script>

<div
    id="quick-reference"
    class="relative isolate scroll-mt-[calc(var(--sl-nav-height)+var(--sl-mobile-toc-height))]"
>
    <div class="w-full overflow-x-auto whitespace-nowrap">
        <table class="grid! w-full grid-cols-[auto_auto]">
            <thead class="col-span-2 grid grid-cols-subgrid">
                <tr class="col-span-2 grid grid-cols-subgrid">
                    <th
                        class="px-2! py-2.5 text-left text-sm/7 font-semibold text-gray-950 dark:text-white"
                    >
                        Class
                    </th>
                    <th
                        class="mt-0! px-2! py-2.5 text-left text-sm/7 font-semibold text-gray-950 dark:text-white"
                    >
                        Styles
                    </th>
                </tr>
            </thead>
            <tbody class="col-span-2 mt-0! grid grid-cols-subgrid">
                {#each aboveTheFold as [utility, styles], i}
                    {@render ApiTableRow({ utility, styles })}
                {/each}
            </tbody>
            {#if isExpandable}
                <tbody
                    class="col-span-2 grid grid-cols-subgrid"
                    hidden={true}
                    bind:this={ref}
                >
                    {#each belowTheFold as [utility, styles], i}
                        {@render ApiTableRow({
                            utility,
                            styles,
                            className: "first:border-t",
                        })}
                    {/each}
                </tbody>
            {/if}
        </table>
    </div>
    {#if isExpandable}
        <div
            class={clsx(
                "z-10 flex justify-center bg-linear-to-t from-white to-white/40 text-gray-950 hover:text-gray-950/70 dark:from-gray-950 dark:to-gray-950/40 dark:text-white dark:hover:text-white/70",
                isExpanded
                    ? "sticky bottom-0 h-12 to-white/80 py-1"
                    : "absolute bottom-0 h-26 w-full translate-y-1/2 py-8",
            )}
        >
            <button
                class="rounded-full border border-gray-950 bg-gray-950 px-3 py-1 font-mono text-xs/7 font-medium tracking-widest text-white uppercase dark:border-gray-700 dark:bg-gray-700"
                onclick={() => (isExpanded = !isExpanded)}
            >
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </div>
    {/if}
</div>

{#snippet highlight(input: string)}
    <code>
        {#each input.split(/(<[^>]+>)|(\/\*.*?\*\/)/g) as part, i (i)}
            {#if part?.startsWith("<") && part.endsWith(">")}
                <!-- Variables -->
                <var class="font-normal italic opacity-100">
                    {part}
                </var>
            {:else if part?.startsWith("/*") && part.endsWith("*/")}
                <!-- Comments -->
                <span class="text-gray-400 italic">
                    {part}
                </span>
            {:else}
                {part}
            {/if}
        {/each}
    </code>
{/snippet}

{#snippet ApiTableRow({
    utility,
    styles,
    className,
}: {
    utility: string
    styles: string[] | string
    className?: string
})}
    <tr
        class={clsx(
            "col-span-2 mt-0! grid grid-cols-subgrid not-last:border-b not-last:border-gray-950/5 dark:not-last:border-white/5",
            className,
        )}
    >
        <td
            class="px-2! py-2! align-top font-mono text-xs/6 font-medium text-sky-500 dark:text-sky-400"
        >
            {@render highlight(utility)}
        </td>
        <td
            class="mt-0! px-2! py-2! align-top font-mono text-xs/6 text-violet-600 dark:text-violet-400"
        >
            {#each Array.isArray(styles) ? styles : [styles] as style, i}
                <div class="*:whitespace-pre!">
                    {@render highlight(style)}
                </div>
            {/each}
        </td>
    </tr>
{/snippet}

<style>
    table :global(code) {
        background: transparent;
        padding: 0;
    }
</style>
