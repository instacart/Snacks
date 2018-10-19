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

  it('renders the correct selected state', () => {
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

  it('disables the input when it is disabled', () => {
    const wrapper = mount(<Checkbox id="A" value="test" isSelected>Testing disabled</Checkbox>)
    const htmlBtn = wrapper.find('input').instance()

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(false)
    
    wrapper.setProps({isDisabled: true})

    expect(htmlBtn.checked).toBe(true)
    expect(htmlBtn.disabled).toBe(true)
  })

  
  it('generates a label if a child prop of text is supplied', () => {
    const tree = renderer
      .create(<Checkbox id={1}>Test label</Checkbox>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  

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

  it('correctly forwards refs', () => {
    const ref = React.createRef()

    // Enzyme does not currently support forwarded refs. react-test-renderer does, but you must specify createNodeMock.
    // https://github.com/airbnb/enzyme/issues/1852
    renderer.create(<Checkbox id={1} ref={ref} />, { createNodeMock: element => element })

    expect(ref.current.type).toBe('input')
  })
})
