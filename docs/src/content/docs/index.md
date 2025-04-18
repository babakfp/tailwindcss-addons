---
title: Tailwind CSS Addons
description: A set of Tailwind CSS preflights, themes, utilities and variants.
---

A set of Tailwind CSS preflights, themes, utilities and variants.

## Installation

:::danger
The newest version of this library is designed for Tailwind CSS v4.
If you're using Tailwind CSS v3, you can install the previous version instead:

```bash
npm install tailwindcss-addons@3.0.0
```

These docs are for the latest version and Tailwind CSS v4, so some things may be different from the previous version. If possible, we recommend updating to the latest version for the best experience.
:::

1. Install the package:

```bash
npm install tailwindcss-addons
```

2. Import the package:

```css {2}
@import "tailwindcss";
@import "tailwindcss-addons";
```

:::note
As tested, all utilities work fine, however autocomplete/intellisense may not work for some utilities and/or in some cases.
:::

## How to import?

All of the preflights, themes, utilities, and variants are imported by default, except:

- `"tailwindcss-addons/theme/font-weight-regular.css"`
- `"tailwindcss-addons/utilities/align-justify-place.css"`

### Preflight

Import all preflights using:

```css
@import "tailwindcss-addons/preflight";
```

The following preflights are available:

```css
@import "tailwindcss-addons/preflight/reset-details-summary-marker.css";
@import "tailwindcss-addons/preflight/reset-number-input.css";
@import "tailwindcss-addons/preflight/reset-search-input.css";
```

### Theme

Import all themes using:

```css
@import "tailwindcss-addons/theme";
```

The `font-weight-regular` theme is not included.

The following themes are available:

```css
@import "tailwindcss-addons/theme/font-size.css";
/* @import "tailwindcss-addons/theme/font-weight-regular.css"; */
```

### Utilities

Import all utilities using:

```css
@import "tailwindcss-addons/utilities";
```

The `align-justify-place` utilities is not included.

The following utilities are available:

```css
/* @import "tailwindcss-addons/utilities/align-justify-place.css"; */
@import "tailwindcss-addons/utilities/bg-grid.css";
@import "tailwindcss-addons/utilities/bg-radial.css";
@import "tailwindcss-addons/utilities/dir.css";
@import "tailwindcss-addons/utilities/drag.css";
@import "tailwindcss-addons/utilities/flip.css";
@import "tailwindcss-addons/utilities/hide-show.css";
@import "tailwindcss-addons/utilities/inset-center.css";
@import "tailwindcss-addons/utilities/overflow-unset.css";
@import "tailwindcss-addons/utilities/reset-number-input.css";
@import "tailwindcss-addons/utilities/reset-search-input.css";
@import "tailwindcss-addons/utilities/scrollbar-color.css";
@import "tailwindcss-addons/utilities/scrollbar-width.css";
@import "tailwindcss-addons/utilities/tap.css";
```

### Variants

Import all variants using:

```css
@import "tailwindcss-addons/variants";
```

The following variants are available:

```css
@import "tailwindcss-addons/variants/hocus.css";
```
