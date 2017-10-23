import React       from 'react'
import renderer    from 'react-test-renderer'
import { StyleRoot } from 'radium'
import ValidationError from '../ValidationError'

it('renders ValidationError correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <ValidationError text="Error Text" show />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ValidationError correctly when show is false', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <ValidationError text="Error Text" show={false} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
