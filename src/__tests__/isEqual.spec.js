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
    const first = [1,'s', {s: 'f'}]
    it('returns true when equal', () => {
      const second = [1,'s', {s: 'f'}]
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const second = [1,'s', {s: 'r'}]
      expect(isEqual(first, second)).toBe(false)
    })
  })
  describe('with objects', () => {
    describe('that are simple', () => {
      const first = {
        first: 'key'
      }
      it('returns true when equal', () => {
        const second = {
          first: 'key'
        }
        expect(isEqual(first, second)).toBe(true)
      })
      it('returns false when not equal', () => {
        const second = {
          first: 'keys'
        }
        expect(isEqual(first, second)).toBe(false)
      })
    })
    describe('that are complex', () => {
      const first = {
        first: 'key',
        second: [1,'s', {s: 'f'}]
      }
      it('returns true when equal', () => {
        const second = {
          first: 'key',
          second: [1,'s', {s: 'f'}]
        }
        expect(isEqual(first, second)).toBe(true)
      })
      it('returns false when not equal', () => {
        const second = {
          first: 'key',
          second: [1,'s', {s: 's'}]
        }
        expect(isEqual(first, second)).toBe(false)
      })
    })
  })
  describe('with regExp', () => {
    const first = /start/
    it('returns true when equal', () => {
      const second = /start/
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const second = /starts/
      expect(isEqual(first, second)).toBe(false)
    })
  })
  describe('with Date objects', () => {
    const first = new Date('December 17, 1995 03:24:00')
    it('returns true when equal', () => {
      const second = new Date('December 17, 1995 03:24:00')
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const second = new Date('December 17, 1995 03:24:01')
      expect(isEqual(first, second)).toBe(false)
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
