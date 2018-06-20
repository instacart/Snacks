import React from 'react'
import renderer from 'react-test-renderer'
import withTheme from '../withTheme'
import { themePropTypes } from '../utils'

const TestComponent = withTheme(
  class extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div
          style={{
            backgroundColor: this.props.snacksTheme.colors.primaryBackground
          }}
        >
          Hello
        </div>
      )
    }
  }
)

TestComponent.propTypes = { snacksTheme: themePropTypes }

it('renders without error with default theme', () => {
  const tree = renderer
    .create(
      <TestComponent />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
