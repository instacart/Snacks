import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount }     from 'enzyme'
import { spy }       from 'sinon'
import TextField     from '../TextField'

it('renders TextField correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <TextField
          id="test_id"
          name="test"
          type="email"
          floatingLabelText="Email"
          hintText="Enter your email address"
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('fires the onFocus prop', () => {
  const onFocus = spy()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <TextField
          id="test_id"
          name="test"
          type="email"
          floatingLabelText="Email"
          hintText="Enter your email address"
          onFocus={onFocus}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')

  expect(onFocus.calledOnce).toBe(true)
})

it('fires the triggerFocus method', () => {
  const wrapper = mount(
    <StyleRoot>
      <div>
        <TextField
          id="test_id"
          name="test"
          type="email"
          floatingLabelText="Email"
          hintText="Enter your email address"
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('TextField').first().instance().triggerFocus()
  setTimeout(() => {
    expect(wrapper.children().matchesElement(document.activeElement)).toEqual(true, 'The input was not focused')
  }, 10)
})

it('fires the onBlur prop', () => {
  const onBlur = spy()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <TextField
          id="test_id"
          name="test"
          type="email"
          floatingLabelText="Email"
          hintText="Enter your email address"
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
        <TextField
          id="test_id"
          name="test"
          type="email"
          floatingLabelText="Email"
          hintText="Enter your email address"
          onChange={onChange}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('change', {target: {value: 'My new value'}})

  expect(onChange.calledOnce).toBe(true)
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
      secondaryForegroundFocus: 'gray'
    }
  }

  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <TextField
            id="test_id"
            name="test"
            type="email"
            floatingLabelText="Email"
            hintText="Enter your email address"
            onChange={() => {}}
            snacksTheme={customTheme}
          />
        </div>
      </StyleRoot>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
