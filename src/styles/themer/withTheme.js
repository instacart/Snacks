// Higher order component that force updates component on themer change
// and passes down theme through props
import React, { Component } from 'react'
import themer from './index'
import { cleanConfig, themePropTypes } from './utils'

const isStateless = component => {
  return !component.prototype.render
}

function withTheme(InnerComponent) {
  class Wrapped extends Component {
    static displayName = `withTheme(${InnerComponent.name ||
      InnerComponent.displayName ||
      'Component'})`

    static propTypes = {
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
      if (__DEV__) {
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
      const getRef = node => (this.wrapped = node)
      const { snacksTheme, ...rest } = this.props
      const theme = this.themeIsValid() ? snacksTheme : themer.themeConfig

      return (
        <InnerComponent
          ref={isStateless(InnerComponent) ? undefined : getRef}
          snacksTheme={theme}
          {...rest}
        />
      )
    }
  }

  return Wrapped
}

export default withTheme
