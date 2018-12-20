import Switch from '../Switch'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('Switch', () => {
  it('renders the correct button type', () => {
    const tree = renderer
      .create(<Switch id={1} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders the correct selected state", () => {
    const testCases = [
      { id: 1, isSelected: false },
      { id: 2, isSelected: true },
      { id: 2, isSelected: true, isDisabled: true },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<Switch {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('disables the input when it is disabled', () => {
    const wrapper = mount(<Switch id="A" value="test" isSelected>Testing disabled</Switch>)
    const htmlBtn = wrapper.find('input').instance()

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(false)

    wrapper.setProps({isDisabled: true})

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(true)
  })


  it('generates a label if a child prop of text is supplied', () => {
    const tree = renderer
      .create(<Switch id={1}>Test label</Switch>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });


  it('incorporates user style if passed', () => {
    const testCases = [
      {
        id: 1,
        style: {
          wrapEl: {background: 'pink'},
          button: {border: '2px solid purple' },
          label: {color: 'green'}
        },
      },
      {
        id: 2,
        style: undefined
      },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<Switch {...props}>Test label</Switch>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('calls the user-supplied onChange function', () => {
    const onChange = sinon.spy()
    const wrapper = mount(<Switch id={1} onChange={onChange} />)

    wrapper.find('input').simulate('change')
    expect(onChange.calledOnce).toBe(true)
  })
})
