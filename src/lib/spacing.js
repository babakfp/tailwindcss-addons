/**
 * @param {number[]} sizes
 */
export const spacing = sizes =>
    Object.fromEntries(sizes.map(size => [size, `${size / 4}rem`]))
