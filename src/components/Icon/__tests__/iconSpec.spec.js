import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../Icon'

it('renders cart icon correctly', () => {
  const tree = renderer.create(<Icon name="cart" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders cart icon with hex code correctly', () => {
  const tree = renderer.create(<Icon code="e023" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders cart icon with styles', () => {
  const tree = renderer.create(<Icon name="cart" style={{ color: '#fff' }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
