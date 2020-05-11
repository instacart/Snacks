import React from 'react'
import { StyleRoot } from '@instacart/radium'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import MaskedTextField from '../MaskedTextField'

// input masks by alpha-2 code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// NOTE: this currently only supports US, but will someday include other regions and countries
const mask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const maskHint = '555-55-5555'

const getValue = value => value.replace(/-/g, '')

it('renders without error', () => {
  const mounted = mount(
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
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
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
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
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('fires the onFocus prop', () => {
  const onFocus = jest.fn()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
          onFocus={onFocus}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')

  expect(onFocus).toBeCalled()
  expect(onFocus.mock.calls.length).toBe(1)
})

it('fires the triggerFocus method', () => {
  const wrapper = mount(
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
        />
      </div>
    </StyleRoot>
  )

  wrapper
    .find('MaskedTextField')
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
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
          onBlur={onBlur}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('blur')

  expect(onBlur).toBeCalled()
  expect(onBlur.mock.calls.length).toBe(1)
})

it('fires the onChange prop', () => {
  const onChange = jest.fn()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
          onChange={onChange}
        />
      </div>
    </StyleRoot>
  )

  // update input to 123-45-6789
  wrapper.find('input').simulate('change', { target: { value: '123-45-6789' } })

  // ensure the callback passes both raw and edited versions
  expect(onChange).toBeCalledWith(expect.anything(), '123456789', '123-45-6789')
  expect(onChange.mock.calls.length).toBe(1)

  // update input to 999-99-9999
  wrapper.find('input').simulate('change', { target: { value: '999-99-9999' } })

  // ensure the callback passes correct, updated phone value
  expect(onChange.mock.calls[1]).toEqual([expect.anything(), '999999999', '999-99-9999'])
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
    <StyleRoot>
      <div>
        <MaskedTextField
          id="test_id"
          name="test"
          mask={mask}
          maskHint={maskHint}
          getValue={getValue}
          floatingLabelText="SSN"
          onChange={() => {}}
          snacksTheme={customTheme}
        />
      </div>
    </StyleRoot>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})
