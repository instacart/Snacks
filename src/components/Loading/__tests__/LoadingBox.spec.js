import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from '@instacart/radium'
import LoadingBox from '../LoadingBox'

it('renders the standard LoadingBox correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox style={{ width: '50px' }} />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the line LoadingBox', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox shape="line" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the circle LoadingBox', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox shape="circle" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the square LoadingBox', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox shape="square" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the dark LoadingBox', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox background="dark" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the light LoadingBox', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox background="light" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the LoadingBox with a size', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox size={100} />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the LoadingBox with a combination of props', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <LoadingBox size={200} background="dark" shape="circle" />
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
