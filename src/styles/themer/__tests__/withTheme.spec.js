import React from 'react'
import renderer from 'react-test-renderer'
import withTheme from '../withTheme'
import { themePropTypes } from '../utils'

const TestComponent = props => {
  return (
    <div 
      style={{
        backgroundColor: props.snacksTheme.colors.primaryBackground
      }}
    >
      Hello
    </div>
  )
}

TestComponent.propTypes = { snacksTheme: themePropTypes }

it('renders without error with default theme', () => {
  const tree = renderer
    .create(
      withTheme(<TestComponent />)
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
