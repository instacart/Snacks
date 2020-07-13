import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from '@instacart/radium'
import Grow from '../Grow'

jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    getContext: jest.fn(),
  }),
}))

it('renders Fade in correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <Grow in>
          <h3> Content </h3>
        </Grow>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Grow correctly with custom props', () => {
  const scale = {
    start: 0.2,
    end: 0.8,
  }
  const maxSize = {
    start: 10,
    end: 500,
  }
  const tree = renderer
    .create(
      <StyleRoot>
        <Grow
          in
          axis="y"
          style={{ background: 'red' }}
          transitionTime={500}
          scale={scale}
          maxSize={maxSize}
        >
          <h3> Content </h3>
        </Grow>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
