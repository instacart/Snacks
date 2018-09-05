const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null

const has = (obj, path) => obj != null && hasOwnProperty.call(obj, path)

const deepEq = (a, b, aStack, bStack) => { // eslint-disable-line max-params
  if (a._wrapped) a = a._wrapped
  if (b._wrapped) b = b._wrapped
  const className = toString.call(a)
  if (className !== toString.call(b)) return false
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

  const areArrays = className === '[object Array]'
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false
    const aCtor = a.constructor
    const bCtor = b.constructor
    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor &&
                             typeof bCtor === 'function' && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false
    }
  }

  aStack = aStack || []
  bStack = bStack || []
  let length = aStack.length
  while (length--) {
    if (aStack[length] === a) return bStack[length] === b
  }

  aStack.push(a)
  bStack.push(b)

  if (areArrays) {
    length = a.length
    if (length !== b.length) return false
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false
    }
  } else {
    let key
    const keys = Object.keys(a)
    length = keys.length
    if (Object.keys(b).length !== length) return false
    while (length--) {
      key = keys[length]
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false
    }
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
