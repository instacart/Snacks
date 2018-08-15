import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount }     from 'enzyme'
import { spy }       from 'sinon'
import Select        from '../Select'
import MenuItem      from '../../Menus/MenuItem'

it('renders Select correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Select
          id="test_id"
          name="country"
          floatingLabelText="Country"
          hintText="Select a country"
        >
          <MenuItem label="United States" value="US"/>
          <MenuItem label="Canada" value="CA"/>
        </Select>
      </div>
    </StyleRoot>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders disabled Select correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Select
          id="test_id"
          name="country"
          floatingLabelText="Country"
          hintText="Select a country"
          disabled
        >
          <MenuItem label="United States" value="US"/>
          <MenuItem label="Canada" value="CA"/>
        </Select>
      </div>
    </StyleRoot>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders invalid Select correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Select
          id="test_id"
          name="country"
          floatingLabelText="Country"
          hintText="Select a country"
          disabled
          isValid={false}
          validationErrorText="Select a valid country"
        >
          <MenuItem label="United States" value="US"/>
          <MenuItem label="Canada" value="CA"/>
        </Select>
      </div>
    </StyleRoot>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders Select w/ server error correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Select
          id="test_id"
          name="country"
          floatingLabelText="Country"
          hintText="Select a country"
          disabled
          isValid={false}
          validationErrorText="Select a valid country"
          serverError="The country you selected does not exist"
        >
          <MenuItem label="United States" value="US"/>
          <MenuItem label="Canada" value="CA"/>
        </Select>
      </div>
    </StyleRoot>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('should fire callbacks', () => {
  const onOpen = spy()
  const onClose = spy()
  const onSelect = spy()

  const wrapper = mount(
    <Select
      id="test_id"
      name="country"
      floatingLabelText="Country"
      hintText="Select a country"
      onOpen={onOpen}
      onClose={onClose}
      onSelect={onSelect}
    >
      <MenuItem label="United States" value="US"/>
      <MenuItem label="Canada" value="CA"/>
    </Select>
  )

  wrapper.find('FloatingLabel').first().simulate('mouseDown')
  expect(onOpen.calledOnce).toBe(true)

  wrapper.find(MenuItem).first().simulate('click')
  expect(onSelect.calledOnce).toBe(true)
  expect(onClose.calledOnce).toBe(true)
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
        <Select
          id="test_id"
          name="country"
          floatingLabelText="Country"
          hintText="Select a country"
          onOpen={() => {}}
          onClose={() => {}}
          onSelect={() => {}}
          snacksTheme={customTheme}
        >
          <MenuItem label="United States" value="US" />
        </Select>
      </StyleRoot>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
