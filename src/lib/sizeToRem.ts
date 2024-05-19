export const sizeToRem = (sizes: number[]) =>
    Object.fromEntries(sizes.map((size) => [size, `${size / 4}rem`]))
