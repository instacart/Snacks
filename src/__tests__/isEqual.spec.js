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
    it('returns true when equal', () => {
      const first = [1,'s', {s: 'f'}]
      const second = [1,'s', {s: 'f'}]
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const first = [1,'s', {s: 'f'}]
      const second = [1,'s', {s: 'r'}]
      expect(isEqual(first, second)).toBe(false)
    })
  })
  describe('with objects', () => {
    describe('that are simple', () => {
      it('returns true when equal', () => {
        const first = {
          first: 'key'
        }
        const second = {
          first: 'key'
        }
        expect(isEqual(first, second)).toBe(true)
      })
      it('returns false when not equal', () => {
        const first = {
          first: 'key'
        }
        const second = {
          first: 'keys'
        }
        expect(isEqual(first, second)).toBe(false)
      })
    })
    describe('that are complex', () => {
      it('returns true when equal', () => {
        const first = {
          first: 'key',
          second: [1,'s', {s: 'f'}]
        }
        const second = {
          first: 'key',
          second: [1,'s', {s: 'f'}]
        }
        expect(isEqual(first, second)).toBe(true)
      })
      it('returns false when not equal', () => {
        const first = {
          first: 'key',
          second: [1,'s', {s: 'f'}]
        }
        const second = {
          first: 'key',
          second: [1,'s', {s: 's'}]
        }
        expect(isEqual(first, second)).toBe(false)
      })
    })
  })
  describe('with regExp', () => {
    it('returns true when equal', () => {
      const first = /start/
      const second = /start/
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const first = /start/
      const second = /starts/
      expect(isEqual(first, second)).toBe(false)
    })
  })
  describe('with Date objects', () => {
    it('returns true when equal', () => {
      const first = new Date('December 17, 1995 03:24:00')
      const second = new Date('December 17, 1995 03:24:00')
      expect(isEqual(first, second)).toBe(true)
    })
    it('returns false when not equal', () => {
      const first = new Date('December 17, 1995 03:24:00')
      const second = new Date('December 17, 1995 03:24:01')
      expect(isEqual(first, second)).toBe(false)
    })
  })
})
