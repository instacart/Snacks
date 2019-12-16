// Higher order component that force updates component on themer change
// and passes down theme through props
import React, { Component } from 'react'
import { isValidElementType } from 'react-is'
import PropTypes from 'prop-types'
import themer from './index'
import { cleanConfig, themePropTypes } from './utils'

function withTheme(options = {}) {
  // This allows us to maintain backwards compatibility with withTheme(Component)
  // while supporting withTheme(options)(Component)
  if (isValidElementType(options)) {
    return withTheme()(options)
  }

  return function wrapWithTheme(WrappedComponent) {
    class WithTheme extends Component {
      static displayName = `withTheme(${WrappedComponent.name ||
        WrappedComponent.displayName ||
        'Component'})`

      static propTypes = {
        forwardedRef: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({ current: PropTypes.any }),
        ]),
        snacksTheme: themePropTypes,
      }

      componentDidMount() {
        this.unsubscribe = themer.subscribe(this.onThemeChange)
        this.validateSnacksTheme()
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      onThemeChange = () => {
        this.forceUpdate()
      }

      themeIsValid() {
        const { snacksTheme } = this.props
        return Boolean(snacksTheme) && typeof snacksTheme === 'object'
      }

      validateSnacksTheme() {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-line no-undef
          const { snacksTheme } = this.props
          const themeIsBad = snacksTheme && !Object.keys(cleanConfig(snacksTheme)).length
          if (themeIsBad) {
            throw new Error(
              `Recieved an invalid snacksTheme Prop. Expected undefined or an object and instead got ${typeof snacksTheme}`
            )
          }
        }
      }

      render() {
        const { snacksTheme, forwardedRef, ...rest } = this.props
        const theme = this.themeIsValid() ? snacksTheme : themer.themeConfig

        return <WrappedComponent ref={forwardedRef} snacksTheme={theme} {...rest} />
      }
    }

    if (options.forwardRef) {
      const withThemeForwardRef = (props, ref) => {
        return <WithTheme {...props} forwardedRef={ref} />
      }

      // gives us ForwardRef(withTheme(ComponentName)) in dev tools and snapshots
      withThemeForwardRef.displayName = WithTheme.displayName

      return React.forwardRef(withThemeForwardRef)
    }

    return WithTheme
  }
}

export default withTheme
