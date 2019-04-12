import React from 'react'
import renderer from 'react-test-renderer'
import SVGIcon from '../SVGIcon'

it('renders accessibility icon correctly', () => {
  const tree = renderer.create(<SVGIcon name="accessibility" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders accessibility icon with styles', () => {
  const tree = renderer.create(<SVGIcon name="accessibility" style={{ fill: '#fff' }} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders accessibility icon with size', () => {
  const tree = renderer.create(<SVGIcon name="accessibility" size="small" />).toJSON()
  expect(tree).toMatchSnapshot()
})
