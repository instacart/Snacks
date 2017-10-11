import { darken } from '../'

fdescribe('darken', () => {
  it('darkens hex colors correctly based on a given percentage', () => {
    const testCases = [
      {input: '#3C9E26', expected: '#167800'},
      {input: '#2B6698', expected: '#054072'},
      {input: '#D40025', expected: '#AE0000'}
    ]
    const pct = 15

    testCases.forEach(t => {
      expect(darken(t.input, pct)).toEqual(t.expected)
    })
  })
})
