import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import PhoneNumberField from '../PhoneNumberField'

it('renders without error', () => {
  const mounted = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
      />
    </div>
  )

  expect(mounted).toBe.truthy
})

it('renders correctly', () => {
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
      />
    </div>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('renders correctly with focus state', () => {
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
      />
    </div>
  )

  wrapper.find('input').simulate('focus')

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('fires the onFocus prop', () => {
  const onFocus = jest.fn()
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
        onFocus={onFocus}
      />
    </div>
  )

  wrapper.find('input').simulate('focus')

  expect(onFocus).toBeCalled()
  expect(onFocus.mock.calls.length).toBe(1)
})

it('fires the triggerFocus method', () => {
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
      />
    </div>
  )

  wrapper
    .find('PhoneNumberField')
    .first()
    .instance()
    .triggerFocus()
  setTimeout(() => {
    expect(wrapper.children().matchesElement(document.activeElement)).toEqual(
      true,
      'The input was not focused'
    )
  }, 10)
})

it('fires the onBlur prop', () => {
  const onBlur = jest.fn()
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
        onBlur={onBlur}
      />
    </div>
  )

  wrapper.find('input').simulate('blur')

  expect(onBlur).toBeCalled()
  expect(onBlur.mock.calls.length).toBe(1)
})

it('fires the onChange prop', () => {
  const onChange = jest.fn()
  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
        onChange={onChange}
      />
    </div>
  )

  // update input to 555-555-5555
  wrapper.find('input').simulate('change', { target: { value: '(555) 555-555' } })

  // ensure the callback passes both raw and edited versions
  expect(onChange).toBeCalledWith(expect.anything(), '555555555', '(555) 555-555')
  expect(onChange.mock.calls.length).toBe(1)

  // update input to 123-456-7890
  wrapper.find('input').simulate('change', { target: { value: '(123) 456-7890' } })

  // ensure the callback passes correct, updated phone value
  expect(onChange.mock.calls[1]).toEqual([expect.anything(), '1234567890', '(123) 456-7890'])
  expect(onChange.mock.calls.length).toBe(2)
})

it('uses a custom theme for all child components if one is provided', () => {
  const customTheme = {
    colors: {
      action: 'green',
      actionHover: 'darkgreen',
      primaryBackground: 'white',
      primaryForeground: 'green',
      secondaryBackground: 'green',
      secondaryForeground: 'white',
      secondaryForegroundFocus: 'gray',
    },
  }

  const wrapper = mount(
    <div>
      <PhoneNumberField
        id="test_id"
        name="test"
        floatingLabelText="Phone Number"
        hintText="(555) 555-555"
        onChange={() => {}}
        snacksTheme={customTheme}
      />
    </div>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})
