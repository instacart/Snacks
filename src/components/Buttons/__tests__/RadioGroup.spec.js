import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import RadioGroup from '../RadioGroup'
import Radio from '../Radio'

describe('RadioGroup', () => {
  it('on initialization none of the radio buttons are selected', () => {
    const wrapper = mount(
      <RadioGroup name="radioTest">
        <Radio id="1" value="val1">
          Value 1
        </Radio>
        <Radio id="2" value="val2">
          Value 2
        </Radio>
        <Radio id="3" value="val3">
          Value 3
        </Radio>
      </RadioGroup>
    )

    wrapper.find('Radio').forEach(child => {
      expect(child.prop('isSelected')).toBe(false)
    })
  })

  it('only one radio button can be selected at a time', () => {
    const wrapper = mount(
      <RadioGroup name="radioTest">
        <Radio id="A" className="radio" value="val1">
          Value 1
        </Radio>
        <Radio id="B" className="radio" value="val2">
          Value 2
        </Radio>
        <Radio id="C" className="radio" value="val3">
          Value 3
        </Radio>
      </RadioGroup>
    )

    const radioIds = ['A', 'C', 'B']

    radioIds.forEach(radioId => {
      wrapper
        .find(`#${radioId}`)
        .hostNodes()
        .simulate('click', { target: { checked: true } })

      wrapper
        .find('.radio')
        .hostNodes()
        .forEach(input => {
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
        <Radio id="A" value="val1">
          Value 1
        </Radio>
        <Radio id="B" value="val2">
          Value 2
        </Radio>
      </RadioGroup>
    )

    expect(onChange.callCount).toBe(0)

    wrapper.find('input#A').simulate('change', { target: { checked: true } })
    expect(onChange.callCount).toBe(1)

    wrapper.find('input#B').simulate('change', { target: { checked: true } })
    expect(onChange.callCount).toBe(2)
  })

  it('fires passed callback only if different button is clicked', () => {
    const onChange = sinon.spy()
    const wrapper = mount(
      <RadioGroup name="radioTest" onChange={onChange}>
        <Radio id="A" value="val1">
          Value 1
        </Radio>
        <Radio id="B" value="val2">
          Value 2
        </Radio>
      </RadioGroup>
    )

    expect(onChange.callCount).toBe(0)

    wrapper
      .find('#A')
      .hostNodes()
      .simulate('change', { target: { checked: true } })
    expect(onChange.callCount).toBe(1)

    wrapper
      .find('#A')
      .hostNodes()
      .simulate('change', { target: { checked: true } })
    expect(onChange.callCount).toBe(1)

    wrapper
      .find('#B')
      .hostNodes()
      .simulate('change', { target: { checked: true } })
    expect(onChange.callCount).toBe(2)
  })
})
