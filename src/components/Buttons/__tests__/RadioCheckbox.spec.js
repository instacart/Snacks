import RadioCheckbox from '../RadioCheckbox'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('RadioCheckbox', () => {
  it('renders the correct button type', () => {
    const testCases = [
      { id: 1, btnType: 'checkbox' },
      { id: 2, btnType: 'radio' },
      { id: 3, btnType: undefined },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<RadioCheckbox {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it("renders the correct checked state", () => {
    const testCases = [
      { id: 1, isChecked: false },
      { id: 2, isChecked: true },
      { id: 3, isChecked: undefined },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<RadioCheckbox {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('incorporates user styles if passed', () => {
    const testCases = [
      { id: 1, styles: { button: { border: '2px solid purple' } } },
      { id: 2, styles: undefined },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<RadioCheckbox {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
