export default func => {
  const memoizedFunc = function(...args) {
    let result
    const key = JSON.stringify(args)
    if (memoizedFunc.cache[key] !== undefined) {
      result = memoizedFunc.cache[key]
    } else {
      result = func(...args)
      memoizedFunc.cache[key] = result
    }
    return result
  }
  memoizedFunc.cache = {}
  return memoizedFunc
}
