import omit from '../omit'

it('omits keys', () => {
  const objA = {
    key1: 'a',
    key2: 'b',
    key3: 'c',
    key4: 'd'
  }

  const objB = omit(objA, 'key1', 'key4')

  expect(objB).toEqual({
    key2: 'b',
    key3: 'c'
  })
})

it('does not blow up on keys that do not exist', () => {
  const objA = {
    key1: 'a',
    key2: 'b',
    key3: 'c',
    key4: 'd'
  }

  const objB = omit(objA, 'key8', 'key20', 'key3', 'key1')

  expect(objB).toEqual({
    key2: 'b',
    key4: 'd'
  })
})

it('returns a new reference', () => {
  const objA = {
    key1: 'a',
    key2: 'b',
    key3: 'c',
    key4: 'd'
  }

  const objB = omit(objA)

  // should be equal, but not the same ref
  expect(objA).toEqual(objB)
  expect(objA).not.toBe(objB)
})