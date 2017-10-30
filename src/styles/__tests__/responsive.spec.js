import responsive, { sizes } from '../responsive'
const { __v2__ } = responsive

const { up, down } = __v2__

describe('up', () => {
  it('ignores xs as an argument because it has no lower bound')

  it('returns a media query that matches screens larger than the given screen size', () => {
    const ss = Object.keys(sizes)

    // TODO: xs isn't valid for up, it has no lower bound
    ss.filter(size => size !== 'xs').forEach(size => {
      expect(up(size)).toEqual(`@media (min-width: ${sizes[size].min}px)`)
    })

    // TODO: should maybe do one sanity check in case i messed up attaching the constsnts in sizes?
    // should i import constants or hardcode
    expect(up('sm')).toEqual(`@media (min-width: ${768}px)`)
  })
})

describe('down', () => {
  it('ignores xl as an argument because it has no upper bound')

  it('returns a media query that matches screens smaller than the given screen size', () => {
    const ss = Object.keys(sizes)

    // TODO: xl isn't valid for down, xl has no upper bound
    ss.filter(size => size !== 'xl').forEach(size => {
      expect(down(size)).toEqual(`@media (max-width: ${sizes[size].max}px)`)
    })

    // TODO: same as above
  })
})

describe('only', () => {
  it('works for xs')
  it('works for xl')

  it('works for every other size that has both a lower/upper bound', () => {
    expect(1).toEqual(1)
  })
})

describe('between', () => {
  it("returns a media query that matches screens between each given size's min value", () => {
    expect(1).toEqual(1)
  })
})
