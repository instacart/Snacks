import Checkbox from '../Checkbox'
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'

describe('Checkbox', () => {
  it('renders the correct button type', () => {
    const tree = renderer
      .create(<Checkbox id={1} />)
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
        .create(<Checkbox {...props} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('sets isSelected to false if isDisabled is set to true', () => {
    const wrapper = mount(<Checkbox id="1" value="test" isSelected>Testing disabled</Checkbox>)
    const htmlBtn = wrapper.find('input').get(0)

    expect(htmlBtn.props().checked).toBe(true)
    expect(htmlBtn.props().disabled).toBe(false)
    
    wrapper.setProps({isDisabled: true})

    expect(htmlBtn.props().checked).toBe(false)
    expect(htmlBtn.props().disabled).toBe(true)
  })

  
  it('generates a label if a child prop of text is supplied', () => {
    const tree = renderer
      .create(<Checkbox id={1}>Test label</Checkbox>)
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
        .create(<Checkbox {...props}>Test label</Checkbox>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('calls the user-supplied onChange function', () => {
    const onChange = sinon.spy()
    const wrapper = mount(<Checkbox id={1} onChange={onChange} />)

    wrapper.find('input').simulate('change')
    expect(onChange.calledOnce).toBe(true)
  })
})
