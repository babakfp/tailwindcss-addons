// Paste the following code into the browser console of the https://heropatterns.com site to copy the patterns to the clipboard.
;(() => {
    const getPatternsData = () => {
        const items = document.querySelectorAll(".pattern-container")

        if (!items.length) {
            throw new Error("No items found.")
        }

        return Array.from(items).map((item) => {
            const title = item.querySelector(".pattern-title")

            if (!title) {
                throw new Error("No title found.")
            }

            return {
                title: title.textContent,
                "background-image": item.style.backgroundImage,
            }
        })
    }

    const copyPatternsToClipboard = async () => {
        const patternsData = getPatternsData()
        const textToCopy = JSON.stringify(patternsData, null, 4)

        try {
            console.log(
                "Focus on the page and the patterns will be copied to clipboard in 3 seconds."
            )
            const justWait = new Promise((resolve) => setTimeout(resolve, 3000))
            justWait.then(async () => {
                await navigator.clipboard.writeText(textToCopy)
                console.log("Copied to clipboard.")
            })
        } catch (err) {
            throw new Error("Failed to copy to clipboard.", { cause: err })
        }
    }

    copyPatternsToClipboard()
})()
