import debounce from '../utils/debounce'

describe('debounce', () => {
  jest.useFakeTimers()
  let subject = 0
  const time = 50
  const afterExecution = time + 1
  const beforeExecution = time - 1
  const mockObj = {
    func: () => {
      subject = 20
    }
  }
  const debouncedFunc = jest.spyOn(mockObj, 'func')
  const fastForwardTo = (wait) =>jest.runTimersToTime(wait)

  beforeEach(() => {
    subject = 0
  })

  afterEach(() => {
    jest.runTimersToTime(time)
    debouncedFunc.mockClear()
  })

  describe('when evaluted early', () => {
    beforeEach(() => {
      debounce(debouncedFunc, time)()
      fastForwardTo(beforeExecution)
    })

    it('callback is not called', () => {
      expect(debouncedFunc).toHaveBeenCalledTimes(0)
    })

    it('value is not set', () => {
      expect(subject).toBe(0)
    })
  })

  describe('when evaluted after wait', () => {
    beforeEach(() => {
      debounce(debouncedFunc, time)()
      fastForwardTo(afterExecution)
    })

    it('callback is called', () => {
      expect(debouncedFunc).toHaveBeenCalledTimes(1)
    })

    it('sets value', () => {
      expect(subject).toBe(20)
    })
  })
})
