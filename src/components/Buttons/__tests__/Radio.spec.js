import Radio from '../Radio'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('Radio', () => {
  it('renders the correct button type', () => {
    const tree = renderer
      .create(<Radio id={1} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders the correct selected state", () => {
    const testCases = [
      { id: 1, isSelected: false },
      { id: 2, isSelected: true },
      { id: 2, isSelected: true, isDisabled: true }
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<Radio {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('disables the input when it is disabled', () => {
    const wrapper = mount(<Radio id="A" value="test" isSelected>Testing disabled</Radio>)
    const htmlBtn = wrapper.find('#A').hostNodes().instance()

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(false)

    wrapper.setProps({isDisabled: true})

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(true)
  })


  it('generates a label if a child prop of text is supplied', () => {
    const tree = renderer
      .create(<Radio id={1}>Test label</Radio>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  

  it('incorporates user styles if passed', () => {
    const testCases = [
      {
        id: 1,
        style: {
          wrapEl: {background: 'pink'},
          button: {border: '2px solid purple' },
          label: {color: 'green'},
          inputBtn: {cursor: 'pointer'}
        },
      },
      {
        id: 2,
        style: undefined
      },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<Radio {...props}>Test label</Radio>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('calls the user-supplied onChange function', () => {
    const onChange = sinon.spy()
    const wrapper = mount(<Radio id={1} onChange={onChange} />)

    wrapper.find('input').simulate('change')
    expect(onChange.calledOnce).toBe(true)
  })
})
