import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import ServerError from '../ServerError'

it('renders ServerError correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <ServerError text="Error Text" />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
