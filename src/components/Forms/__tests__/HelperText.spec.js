import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import HelperText    from '../HelperText'

it('renders HelperText correctly when floated', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <HelperText helperText="helperText Text" />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
