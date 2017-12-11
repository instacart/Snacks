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

  it.only('sets isSelected=false if isDisabled is set to true', () => {
    const wrapper = mount(<Checkbox id="1" value="test" isSelected>Testing disabled</Checkbox>)
    const htmlBtn = wrapper.find('input').get(0)

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(false)
    
    wrapper.setProps({isDisabled: true})

    expect(htmlBtn.checked).toBe(false)
    expect(htmlBtn.disabled).toBe(true)
  })

  
  it('generates a label if a child prop of text is supplied', () => {
    const tree = renderer
      .create(<Checkbox id={1}>Test label</Checkbox>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });
  

  it('incorporates user styles if passed', () => {
    const testCases = [
      {
        id: 1,
        styles: {
          wrapEl: {background: 'pink'},
          button: {border: '2px solid purple' },
          label: {color: 'green'}
        },
      },
      {
        id: 2,
        styles: undefined
      },
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(<Checkbox {...props}>Test label</Checkbox>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('calls the user-supplied onClick function', () => {
    const onClick = sinon.spy()
    const testOnClick = () => testText
    const wrapper = mount(<Checkbox id={1} onClick={onClick} />)

    wrapper.find('input').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
