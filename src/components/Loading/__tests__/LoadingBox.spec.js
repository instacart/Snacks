import React from 'react'
import renderer from 'react-test-renderer'
import LoadingBox from '../LoadingBox'
import { StyleRoot } from 'radium'

it('renders the standard LoadingBox correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <LoadingBox style={{ width: '50px' }} />
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the standard LoadingBox light', () => {
  const tree = renderer.create(
    <StyleRoot>
      <LoadingBox light style={{ width: '50px' }} />
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the standard LoadingBox dark', () => {
  const tree = renderer.create(
    <StyleRoot>
      <LoadingBox dark style={{ width: '50px' }} />
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
