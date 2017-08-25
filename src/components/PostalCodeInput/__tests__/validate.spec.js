import validate from '../validate'

const badCodes = [
  '',
  null,
  undefined,
  123,
  'abc',
  'very long long long long long',
  ' 12345 ',
  '12a45',
  'r245a',
  '12345 ',
  ' 123456 ',
  '123456 '
]

const validUsaCodes = [
  '12345',
  '98983',
  '08132',
  12341,
  53156,
  89141
]

const validCanadaCodes = [
  'H0H0H0',
  'a1a1a1',
  'H0H 0H0',
  'a1a1a1',
  'a1a 1a1',
  'K8N 5W6',
  'V9A 7N2',
  'B3K 5X5'
]

const invalidUsaCodes = badCodes

const invalidCanadaCodes = [
  ...badCodes,
  '1a1 a1a',
  'F1A AiA',
  'A12345-6789',
  'W1a1a1',
  'Z1a1a1'
]

const factoryItActsAsExpected = (options, shouldPass) => (postalCode) => (
  it(`${postalCode} should ${shouldPass ? 'validate': 'fail'}`, () =>
    expect(validate(postalCode, options)).toEqual(shouldPass)
  )
)

const itSupportsValidUsaCodes = (options = {}, shouldPass = true) => {
  const itValidates = factoryItActsAsExpected(options, shouldPass)
  const itFails = factoryItActsAsExpected(options, false)

  describe('USA codes', () => {
    validUsaCodes.forEach(itValidates)
    invalidUsaCodes.forEach(itFails)
  })
}

const itSupportsValidCanadaCodes = (options = {}, shouldPass = true) => {
  const itValidates = factoryItActsAsExpected(options, shouldPass)
  const itFails = factoryItActsAsExpected(options, false)

  describe('Canada codes', () => {
    validCanadaCodes.forEach(itValidates)
    invalidCanadaCodes.forEach(itFails)
  })
}

describe('validate', () => {
  describe('by default', () => {
    itSupportsValidUsaCodes()
    itSupportsValidCanadaCodes({}, false)
  })

  describe('set only to USA', () => {
    const options = { forUsa: true }
    itSupportsValidUsaCodes(options)
    itSupportsValidCanadaCodes(options, false)
  })

  describe('set only to Canada', () => {
    const options = { forUsa: false, forCanada: true }
    itSupportsValidUsaCodes(options, false)
    itSupportsValidCanadaCodes(options)
  })

  describe('set to both Canada and USA', () => {
    const options = { forUsa: true, forCanada: true }
    itSupportsValidUsaCodes(options)
    itSupportsValidCanadaCodes(options)
  })
})
