---
title: CHANGELOG
---

## 4.0.3

- fix: rename sizing utility of `bg-grid-*` to `bg-grid-size-*` because of issues with Tailwind CSS 4.

## 4.0.2

- fix: `bg-grid-border-*` and `bg-radial-size-*` utilities not working.

## 4.0.1

- fix: class/utility `bg-grid-border-*` was renamed to `bg-grid-border-w-*` by mistake.

## 4.0.0

:::danger
From this version on, this package only supports Tailwind CSS 4 and above.
:::

:::note
As tested, all utilities work fine, however autocomplete/intellisense may not work for some utilities and/or in some cases.
:::

### Breaking Changes

- No longer works with JavaScript. The new CSS files can be imported like how it's recommended by Tailwind CSS.
- [Disabling core plugins](https://tailwindcss.com/docs/upgrade-guide#disabling-core-plugins) is no longer supported in Tailwind CSS 4.
- The `supports-hover`, `supports-focus` and `supports-hocus` variants are removed.
- The `reset-number-input` and `reset-search-input` preflights are imported by default.
- The `flattenColorPalette` function is removed. You can import the built-in version from `import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"`.
- The `sizeToRem` function is removed.

### New Features

- The `not-*` variants are removed in favor of the built-in version; The built-in version is more advanced.
- Added new `text-3xs` utility.

### Other Changes

- `extraDefaults` plugin is removed in favor of the built-in Tailwind CSS features.
