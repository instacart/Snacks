import memoize from '../utils/memoize'

const doCallbackFiveTimes = callback => {
  ;[1, 2, 3, 4, 5].forEach(() => callback())
}
describe('memoize', () => {
  describe('returns the correct value', () => {
    it('when called once', () => {
      const memoizedFunc = memoize((a, b) => a + b)
      expect(memoizedFunc(5, 10)).toBe(15)
    })

    it('when called multiple times', () => {
      const memoizedFunc = memoize((a, b) => a + b)
      doCallbackFiveTimes(() => memoizedFunc(5, 100))
      expect(memoizedFunc(5, 10)).toBe(15)
    })
  })

  describe('memoizes arguments to prevent extra calls', () => {
    let subjectFunctionCalls = 0
    const subjectFunc = (a, b) => {
      subjectFunctionCalls += 1
      return a + b
    }

    afterEach(() => {
      subjectFunctionCalls = 0
    })

    it('counting mechanism works', () => {
      doCallbackFiveTimes(() => subjectFunc(5, 100))
      expect(subjectFunctionCalls).toBe(5)
    })

    it('when implemented once', () => {
      const memoizedFunc = memoize(subjectFunc)
      doCallbackFiveTimes(() => memoizedFunc(5, 100))
      expect(memoizedFunc(5, 100)).toBe(105)
      expect(subjectFunctionCalls).toBe(1)
    })

    it('when implemented multiple times', () => {
      const secondFunc = (a, b) => {
        subjectFunctionCalls += 1
        return a + b
      }
      const thirdFunc = (a, b) => {
        subjectFunctionCalls += 1
        return a + b
      }
      const memoizedFunc = memoize(subjectFunc)
      const secondMemoizedFunc = memoize(secondFunc)
      const thirdMemoizedFunc = memoize(thirdFunc)
      doCallbackFiveTimes(() => {
        memoizedFunc(1, 2)
        secondMemoizedFunc(3, 4)
        thirdMemoizedFunc(5, 5)
      })
      expect(thirdMemoizedFunc(5, 5)).toBe(10)
      expect(subjectFunctionCalls).toBe(3)
    })
  })
})
