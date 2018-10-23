import React         from 'react'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import toJson        from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import DateField  from '../DateField'

it('renders without error', () => {
  const mounted = mount(
    <StyleRoot>
      <div>
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
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
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
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
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
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
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
          onFocus={onFocus}
        />
      </div>
    </StyleRoot>
  )

  wrapper.find('input').simulate('focus')

  expect(onFocus).toBeCalled()
  expect(onFocus.mock.calls.length).toBe(1)
})

it('fires the onBlur prop', () => {
  const onBlur = jest.fn()
  const wrapper = mount(
    <StyleRoot>
      <div>
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
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
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
          onChange={onChange}
        />
      </div>
    </StyleRoot>
  )

  // update input to 04/27/1993
  wrapper.find('input').simulate('change', {target: {value: '04/27/1993'}})

  // ensure the callback passes both raw and edited versions
  expect(onChange).toBeCalledWith(expect.anything(), '04/27/1993', '04/27/1993')
  expect(onChange.mock.calls.length).toBe(1)

  // update input to 12/12/2012
  wrapper.find('input').simulate('change', {target: {value: '12/12/2012'}})

  // ensure the callback passes correct, updated phone value
  expect(onChange.mock.calls[1]).toEqual([expect.anything(), '12/12/2012', '12/12/2012'])
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
      secondaryForegroundFocus: 'gray'
    }
  }

  const wrapper = mount(
    <StyleRoot>
      <div>
        <DateField
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
          onChange={() => {}}
          snacksTheme={customTheme}
        />
      </div>
    </StyleRoot>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('correctly forwards refs', () => {
  const ref = React.createRef()

  renderer.create(
    <StyleRoot>
      <div>
        <DateField
          ref={ref}
          id="test_id"
          name="test"
          floatingLabelText="Date of Birth"
          hintText="MM/DD/YYYY"
        />
      </div>
    </StyleRoot>, { createNodeMock: element => element })

  expect(ref.current.type).toBe('input')
})
