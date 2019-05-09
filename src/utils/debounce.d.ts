declare function debounce<T extends Function>(func: T, wait: number): T

export default debounce
