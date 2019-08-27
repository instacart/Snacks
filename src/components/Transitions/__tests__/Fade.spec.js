import React from 'react'
import renderer from 'react-test-renderer'
import Fade from '../Fade'

jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    getContext: jest.fn(),
  }),
}))

it('renders Fade in correctly', () => {
  const tree = renderer
    .create(
      <Fade in>
        <h3> Content </h3>
      </Fade>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Fade correctly with custom props', () => {
  const opacity = {
    start: 0.2,
    end: 0.8,
  }
  const tree = renderer
    .create(
      <Fade in axis="y" style={{ background: 'red' }} transitionTime={500} opacity={opacity}>
        <h3> Content </h3>
      </Fade>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
