import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import RadioGroup from '../RadioGroup'
import Radio from '../Radio'

describe('RadioGroup', () => {
  it('on initialization none of the radio buttons are selected', () => {
    const tree = renderer
      .create(
        <RadioGroup name="radioTest">
          <Radio id="1" value="val1">Value 1</Radio>
          <Radio id="2" value="val2">Value 2</Radio>
          <Radio id="3" value="val3">Value 3</Radio>
        </RadioGroup>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('one radio button can be selected at a time', () => {
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
      
      wrapper.find('input').forEach(input => {
        // only the clicked button should have a state of checked=true
        if (input.prop('id') === radioId) {
          expect(input.prop('checked')).toBe(true)
        } else {
          expect(input.prop('checked')).toBe(false)
        }
      })
    })
  })
})
