import React from 'react'
import renderer from 'react-test-renderer'
import HelperText from '../HelperText'

it('renders HelperText correctly when floated', () => {
  const tree = renderer
    .create(
      <div>
        <HelperText helperText="helperText Text" />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
