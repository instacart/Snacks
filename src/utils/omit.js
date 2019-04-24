export default function omit(obj, ...blacklistedKeys) {
  return Object.entries(obj)
    .filter(([key]) => !blacklistedKeys.includes(key))
    .reduce((newObj, [key, val]) => Object.assign(newObj, { [key]: val }), {})
}
