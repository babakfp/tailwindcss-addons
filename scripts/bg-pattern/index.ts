import fs from "node:fs"
import path from "node:path"

type Pattern = {
    title: string
    "background-image": string
}

const patterns = JSON.parse(
    fs.readFileSync(
        path.join(process.cwd(), "/bg-pattern/patterns.json"),
        "utf-8"
    )
) as Pattern[]

const bgPatternDotMdxContent = fs.readFileSync(
    path.join(process.cwd(), "/bg-pattern/bg-pattern.mdx"),
    "utf-8"
)

const documentationTemplateRegex =
    /--pattern-start--\s*([\s\S]*?)\s*--pattern-end--/s

const documentationTemplateMatch = bgPatternDotMdxContent.match(
    documentationTemplateRegex
)!

const documentationTemplate = documentationTemplateMatch[1]

let patternExamplesContent = ""
patterns.forEach((pattern, i) => {
    const utilityName = pattern.title
        .toLowerCase()
        .replaceAll("&", "and")
        .replaceAll(" ", "-")

    if (i !== 0) {
        patternExamplesContent += "\n\n"
    }

    patternExamplesContent += documentationTemplate
        .replace("--pattern-title--", pattern.title)
        .replaceAll("--pattern-class--", `bg-pattern-${utilityName}-gray-700`)
})

fs.writeFileSync(
    path.join(
        process.cwd(),
        "../docs/src/content/docs/utilities/bg-pattern.mdx"
    ),
    bgPatternDotMdxContent.replace(
        documentationTemplateRegex,
        patternExamplesContent
    )
)

// -------------------------------------------------------------

const bgPatternDotJsContent = fs.readFileSync(
    path.join(process.cwd(), "/bg-pattern/bg-pattern.js"),
    "utf-8"
)

const newBgPatternDotJsContent = bgPatternDotJsContent.replace(
    '"{patterns.json}"',
    JSON.stringify(patterns)
)

fs.writeFileSync(
    path.join(process.cwd(), "../package/src/utilities/bg-pattern.js"),
    newBgPatternDotJsContent
)
