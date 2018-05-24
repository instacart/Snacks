import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../Icon'

it('renders accessibility icon correctly', () => {
  const tree = renderer.create(
    <Icon name='accessibility' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders accessibility icon with styles', () => {
  const tree = renderer.create(
    <Icon name='accessibility' style={{ fill: '#fff' }} />
  ).toJSON();
  expect(tree).toMatchSnapshot()
})
