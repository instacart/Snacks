import React         from 'react'
import { StyleRoot } from 'radium'
import { mount, shallow } from 'enzyme'
import { spy }       from 'sinon'
import toJson        from 'enzyme-to-json'
import PhoneNumberField  from '../PhoneNumberField'

it('renders without error', () => {
  const mounted = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
        />
      </div>
    </StyleRoot>
  )

  expect(mounted).toBe.truthy
})

it('renders correctly', () => {
  const wrapper = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
        />
      </div>
    </StyleRoot>
  )
  
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders correctly with focus state', () => {
  const wrapper = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')
  
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('fires the onFocus prop', () => {
  const onFocus = spy()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
          onFocus={onFocus}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')

  expect(onFocus.calledOnce).toBe(true)
})

it('fires the onBlur prop', () => {
  const onBlur = spy()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
          onBlur={onBlur}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('blur')

  expect(onBlur.calledOnce).toBe(true)
})

it('fires the onChange prop', () => {
  const onChange = spy()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <PhoneNumberField
          id="test_id"
          name="test"
          floatingLabelText="Phone Number"
          hintText="(555) 555-555"
          onChange={onChange}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('change', {target: {value: 'My new value'}})

  expect(onChange.calledOnce).toBe(true)
})
