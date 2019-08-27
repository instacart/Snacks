import React from 'react'
import renderer from 'react-test-renderer'
import LoadingBox from '../LoadingBox'

it('renders the standard LoadingBox correctly', () => {
  const tree = renderer.create(<LoadingBox style={{ width: '50px' }} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the line LoadingBox', () => {
  const tree = renderer.create(<LoadingBox shape="line" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the circle LoadingBox', () => {
  const tree = renderer.create(<LoadingBox shape="circle" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the square LoadingBox', () => {
  const tree = renderer.create(<LoadingBox shape="square" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the dark LoadingBox', () => {
  const tree = renderer.create(<LoadingBox background="dark" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the light LoadingBox', () => {
  const tree = renderer.create(<LoadingBox background="light" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the LoadingBox with a size', () => {
  const tree = renderer.create(<LoadingBox size={100} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the LoadingBox with a combination of props', () => {
  const tree = renderer.create(<LoadingBox size={200} background="dark" shape="circle" />).toJSON()
  expect(tree).toMatchSnapshot()
})
