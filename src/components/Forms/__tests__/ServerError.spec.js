import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from '@instacart/radium'
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
