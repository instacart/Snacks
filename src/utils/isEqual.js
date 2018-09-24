const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null

const has = (obj, path) => obj != null && hasOwnProperty.call(obj, path)

const isFunctionAndFromConstructor = (val) => {
  typeof val === 'function' && val instanceof val
}

const notObject= (val) => typeof val !== 'object'

const isBool = arg => typeof arg === 'boolean'

const fromClassName = (className, a, b) => {
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return ` ${a}` === ` ${b}`
    case '[object Number]':
      if (+a !== +a) return +b !== +b
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
    case '[object Symbol]':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)
  }
}

const haveDifferentConstructorProps = (a, b) => {
  const aCtor = a.constructor
  const bCtor = b.constructor
  const objectsMatch = aCtor !== bCtor
  const notMatchingFunctions = !(isFunctionAndFromConstructor(aCtor) && isFunctionAndFromConstructor(bCtor))
  const bothConstructors = ('constructor' in a && 'constructor' in b)
  return objectsMatch && notMatchingFunctions && bothConstructors
}

const nonArray = (areArrays, a, b) => {
  const notObjects = (notObject(a) || notObject(b))
  const nonObjectsWithConstructorDifferences = notObjects || haveDifferentConstructorProps(a, b)
  if (!areArrays && nonObjectsWithConstructorDifferences) {
    return false
  }
}

const objectKeysMismatch = (a, b, aStack, bStack) => { // eslint-disable-line max-params
  let key
  const keys = Object.keys(a)
  let length = keys.length
  if (Object.keys(b).length !== length) return false
  while (length--) {
    key = keys[length]
    if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false
  }
}

const arraysUnequal = (a, b, aStack, bStack) => { // eslint-disable-line max-params
  let length = a.length
  if (length !== b.length) return false
  while (length--) {
    if (!eq(a[length], b[length], aStack, bStack)) return false
  }
}

const deepEq = (a, b, aStack, bStack) => { // eslint-disable-line max-params
  if (a._wrapped) a = a._wrapped
  if (b._wrapped) b = b._wrapped
  const className = Object.prototype.toString.call(a)
  if (className !== Object.prototype.toString.call(b)) return false

  const classNameDerivedBoolean = fromClassName(className, a, b)

  if (isBool(classNameDerivedBoolean)) return classNameDerivedBoolean

  const areArrays = className === '[object Array]'

  if(nonArray(areArrays, a, b) === false) return false

  aStack = aStack || []
  bStack = bStack || []

  let length = aStack.length

  while (length--) {
    if (aStack[length] === a) return bStack[length] === b
  }

  aStack.push(a)
  bStack.push(b)

  const unequalArrays = areArrays && arraysUnequal(a, b, aStack, bStack) === false
  const unequalNonArrays = !areArrays && objectKeysMismatch(a, b, aStack, bStack) === false

  if (unequalArrays || unequalNonArrays) {
    return false
  }

  aStack.pop()
  bStack.pop()
  return true
}


export default function eq(a, b, aStack, bStack) { // eslint-disable-line max-params
  if (a === b) return a !== 0 || 1 / a === 1 / b
  if (a == null || b == null) return false
  if (a !== a) return b !== b
  const type = typeof a
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false
  return deepEq(a, b, aStack, bStack)
}
