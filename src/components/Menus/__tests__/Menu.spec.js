import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import MenuDivider from '../MenuDivider'

it('renders Menu with MenuItems correctly', () => {
  const tree = renderer
    .create(
      <div>
        <Menu>
          <MenuItem label="First" value="First" />
          <MenuItem label="Second" value="Second" />
          <MenuItem label="Third" value="Third" />
          <MenuDivider />
          <MenuItem label="Fourth" value="Fourth" />
        </Menu>
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render all of MenuItem children', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem label="First" value="First" />
      <MenuItem label="Second" value="Second" />
      <MenuDivider />
      <MenuItem label="third" value="Third" />
    </Menu>
  )
  expect(wrapper.find(MenuItem).length).toBe(3)
  expect(wrapper.find(MenuDivider).length).toBe(1)
})

it('should fire onSelect when a MenuItem is selected', () => {
  const onSelect = spy()
  const wrapper = mount(
    <div>
      <Menu onSelect={onSelect}>
        <MenuItem label="First" value="First" />
        <MenuItem label="Second" value="Second" />
      </Menu>
    </div>
  )

  wrapper
    .find(MenuItem)
    .first()
    .simulate('click')
  expect(onSelect.calledOnce).toBe(true)
})
