import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import MenuItem from '../MenuItem'

it('correctly forwards refs for MenuItems', () => {
  const ref = React.createRef()

  renderer.create(
    <StyleRoot>
      <MenuItem ref={ref} label="First" value="First" />
    </StyleRoot>,
    { createNodeMock: element => element }
  )

  expect(ref.current.type).toBe('div')
})
