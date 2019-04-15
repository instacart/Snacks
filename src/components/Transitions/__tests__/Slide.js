import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import Slide from '../Slide'

jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    getContext: jest.fn(),
  }),
}))

it('renders Slide in correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <Slide in>
          <h3> Content </h3>
        </Slide>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Slide correctly with custom props', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <Slide in width={250} axis="y" style={{ background: 'red' }} transitionTime={500}>
          <h3> Content </h3>
        </Slide>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
