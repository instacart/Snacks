import isEqual from '../utils/isEqual'

describe('isEqual', () => {
  describe('with numbers', () => {
    it('returns true when equal', () => {
      expect(isEqual(1, 1)).toBe(true)
    })
    it('returns false when not equal', () => {
      expect(isEqual(1, 2)).toBe(false)
    })
  })
  describe('with arrays', () => {
    const genArray = (val) => [1,'s', {val}]
    const first = genArray('f')
    it('returns true when equal', () => {
      expect(isEqual(genArray('f'), genArray('f'))).toBe(true)
    })
    it('returns false when not equal', () => {
      expect(isEqual(first, genArray('s'))).toBe(false)
    })
  })
  describe('with objects', () => {
    const genObj = (first) => ({
      first
    })
    describe('that are simple', () => {
      const first = genObj('key')
      it('returns true when equal', () => {
        expect(isEqual(first, genObj('key'))).toBe(true)
      })
      it('returns false when not equal', () => {
        expect(isEqual(first, genObj('keys'))).toBe(false)
      })
    })
    describe('that are complex', () => {
      const genObj = (val) => ({
        first: 'key',
        second: [1,'s', {val}]
      })
      const first = genObj('values')
      it('returns true when equal', () => {
        expect(isEqual(first, genObj('values'))).toBe(true)
      })
      it('returns false when not equal', () => {
        expect(isEqual(first, genObj('stuffs'))).toBe(false)
      })
    })
  })
  describe('with regExp', () => {
    const first = /start/
    it('returns true when equal', () => {
      expect(isEqual(first, /start/)).toBe(true)
    })
    it('returns false when not equal', () => {
      expect(isEqual(first, /starts/)).toBe(false)
    })
  })
  describe('with Date objects', () => {
    const first = new Date('December 17, 1995 03:24:00')
    it('returns true when equal', () => {
      expect(isEqual(first, new Date('December 17, 1995 03:24:00'))).toBe(true)
    })
    it('returns false when not equal', () => {
      expect(isEqual(first, new Date('December 17, 1995 03:24:01'))).toBe(false)
    })
  })
  describe('with circular references', () => {
    class Circular {
      constructor() {
        this.self = this
      }
    }

    it('does not blow up', () => {
      const first = new Circular()
      const second = new Circular()
      expect(() => isEqual(first, second)).not.toThrow()
    })
  })
})
