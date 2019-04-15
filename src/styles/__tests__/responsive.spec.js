import responsive, { breakpoints } from '../responsive'

const { up, down, only, between } = responsive

describe('up', () => {
  it('returns a media query that matches the given screen size or larger', () => {
    const breakpointNames = Object.keys(breakpoints)

    breakpointNames.forEach(size => {
      expect(up(size)).toEqual(`@media (min-width: ${breakpoints[size].min}px)`)
    })
  })
})

describe('down', () => {
  it('ignores xl as an argument because it has no upper bound', () => {
    expect(() => down('xl')).toThrow()
  })

  it('returns a media query that matches the given screen size or smaller', () => {
    const breakpointNames = Object.keys(breakpoints).filter(b => b !== 'xl')

    breakpointNames.forEach(size => {
      expect(down(size)).toEqual(`@media (max-width: ${breakpoints[size].max}px)`)
    })
  })
})

describe('only', () => {
  it('works for the smallest size', () => {
    expect(only('xs')).toEqual(`@media (max-width: ${breakpoints.xs.max}px)`)
  })

  it('works for the largest size', () => {
    expect(only('xl')).toEqual(`@media (min-width: ${breakpoints.xl.min}px)`)
  })

  it('works for every size that has both a lower/upper bound', () => {
    const breakpointNames = ['sm', 'md', 'mdLg', 'lg']

    breakpointNames.forEach(size => {
      expect(only(size)).toEqual(
        `@media (min-width: ${breakpoints[size].min}px) and (max-width: ${breakpoints[size].max}px)`
      )
    })
  })
})

describe('between', () => {
  it("returns a media query that matches screens between each given size's minimum value", () => {
    const testCases = [['xs', 'md'], ['sm', 'md'], ['sm', 'xl'], ['md', 'xl']]

    testCases.forEach(t => {
      const [lower, upper] = t
      const expected = `@media (min-width: ${breakpoints[lower].min}px) and (max-width: ${
        breakpoints[upper].min
      }px)`

      expect(between(lower, upper)).toEqual(expected)
    })
  })
})

it('throws an error when invalid screen sizes are given', () => {
  expect(() => up('not')).toThrow()
  expect(() => down('a')).toThrow()
  expect(() => only('valid')).toThrow()
  expect(() => between('screen', 'size')).toThrow()
})
