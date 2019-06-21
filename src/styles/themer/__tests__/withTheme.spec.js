import React from 'react'
import renderer from 'react-test-renderer'
import withTheme from '../withTheme'
import { defaultTheme, themePropTypes } from '../utils'

// eslint-disable-next-line react/prefer-stateless-function
class Test extends React.Component {
  static propTypes = { snacksTheme: themePropTypes }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.snacksTheme.colors.primaryBackground,
        }}
      >
        Hello
      </div>
    )
  }
}

it('renders without error with default theme', () => {
  const TestComponent = withTheme(Test)
  const tree = renderer.create(<TestComponent />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('while in production mode', () => {
  let TestComponent
  let backupEnv

  beforeEach(() => {
    backupEnv = { ...process.env }

    jest.resetModules()
    process.env.NODE_ENV = 'production'
    TestComponent = require('../withTheme').default(Test)
  })

  afterEach(() => {
    process.env = backupEnv
  })

  it('can be overridden', () => {
    const testColor = 'red'
    const tree = renderer
      .create(
        <TestComponent
          snacksTheme={{
            colors: {
              primaryBackground: testColor,
            },
          }}
        />
      )
      .toJSON()
    expect(tree.props.style.backgroundColor).toBe(testColor)
  })

  it('falls back to active themer theme if props are invalid', () => {
    ;[null, undefined].map(invalidTheme => {
      const tree = renderer.create(<TestComponent snacksTheme={invalidTheme} />).toJSON()
      expect(tree.props.style.backgroundColor).toBe(defaultTheme.colors.primaryBackground)
    })
  })
})

describe('while not in production mode', () => {
  beforeEach(() => {
    // we can stop swallowing these when this is finished
    // https://github.com/facebook/react/issues/11098
    jest.spyOn(console, 'error')
    global.console.error.mockImplementation(() => {})
  })

  afterEach(() => {
    global.console.error.mockRestore()
  })

  it('throws an error on invalid snacksTheme', () => {
    const TestComponent = withTheme(Test)
    const createTree = () => renderer.create(<TestComponent snacksTheme={1} />).toJSON()
    expect(() => createTree()).toThrow()
  })
})
