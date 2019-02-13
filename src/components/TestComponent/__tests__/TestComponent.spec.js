import React         from 'react'
import renderer      from 'react-test-renderer'
import TestComponent from '../TestComponent'

it('renders snapshot', () => {
  const tree = renderer.create(
    <StyleRoot>
      <TestComponent/>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
