import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import RadioGroup from '../RadioGroup'
import Radio from '../Radio'

describe('RadioGroup', () => {
  it('on initialization none of the radio buttons are selected', () => {
    const wrapper = mount(
      <RadioGroup name="radioTest">
        <Radio id="1" value="val1">Value 1</Radio>
        <Radio id="2" value="val2">Value 2</Radio>
        <Radio id="3" value="val3">Value 3</Radio>
      </RadioGroup>
    )

    wrapper.children().forEach(child => {
      expect(child.prop('isSelected')).toBe(false)
    })
  })

  it('only one radio button can be selected at a time', () => {
    const wrapper = mount(
      <RadioGroup name="radioTest">
        <Radio id="1" value="val1">Value 1</Radio>
        <Radio id="2" value="val2">Value 2</Radio>
        <Radio id="3" value="val3">Value 3</Radio>
      </RadioGroup>
    )
    
    const radioIds = ['1', '3', '2']
    
    radioIds.forEach(radioId => {
      wrapper.find(`#${radioId}`).simulate('click', { target: { checked: true } })

      wrapper.children().forEach(input => {
        // only the clicked button should have a state of checked=true
        if (input.prop('id') === radioId) {
          expect(input.prop('isSelected')).toBe(true)
        } else {
          expect(input.prop('isSelected')).toBe(false)
        }
      })
    })
  })

  it('fires a passed callback on radio selection change', () => {
    const onChange = sinon.spy()
    const wrapper = mount(
      <RadioGroup name="radioTest" onChange={onChange}>
        <Radio id="1" value="val1">Value 1</Radio>
        <Radio id="2" value="val2">Value 2</Radio>
      </RadioGroup>
    )

    wrapper.find('#1').simulate('click')
    expect(onChange.calledOnce).toBe(true)

    wrapper.find('#2').simulate('click')
    expect(onChange.calledTwice).toBe(true)
  })

  it('fires passed callback only if different button is clicked', () => {
    const onChange = sinon.spy()
    const wrapper = mount(
      <RadioGroup name="radioTest" onChange={onChange}>
        <Radio id="1" value="val1">Value 1</Radio>
        <Radio id="2" value="val2">Value 2</Radio>
      </RadioGroup>
    )

    expect(onChange.notCalled).toBe(true)

    wrapper.find('#1').simulate('click')
    expect(onChange.calledOnce).toBe(true)

    wrapper.find('#1').simulate('click')
    expect(onChange.calledOnce).toBe(true)

    wrapper.find('#2').simulate('click')
    expect(onChange.calledTwice).toBe(true)

    
  })
  
})
