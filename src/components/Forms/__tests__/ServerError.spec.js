import React from 'react'
import renderer from 'react-test-renderer'
import ServerError from '../ServerError'

it('renders ServerError correctly', () => {
  const tree = renderer
    .create(
      <div>
        <ServerError text="Error Text" />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
