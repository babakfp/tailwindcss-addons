/**
 * @param {number[]} sizes
 */
export const sizeToRem = sizes =>
    Object.fromEntries(sizes.map(size => [size, `${size / 4}rem`]))
