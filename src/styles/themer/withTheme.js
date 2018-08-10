// Higher order component that force updates component on themer change
// and passes down theme through props
import React, { Component } from 'react'
import themer from './index'
import { themePropTypes } from './utils'

const isStateless = (Component) => {
  return !Component.prototype.render
}

function withTheme(InnerComponent) {
  class Wrapped extends Component {
    static displayName = `withTheme(${InnerComponent.name || InnerComponent.displayName || 'Component'})`

    static propTypes = {
      snacksTheme: themePropTypes
    }

    componentDidMount() {
      this.unsubscribe = themer.subscribe(this.onThemeChange)
      this.validateSnacksTheme()
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    themeIsValid() {
      const { snacksTheme } = this.props
      return Boolean(snacksTheme) && typeof snacksTheme === 'object'
    }

    validateSnacksTheme() {
      if (__DEV__) { // eslint-disable-line no-undef
        const { snacksTheme } = this.props
        const snackType = typeof snacksTheme
        const themeIsBad = Boolean(snacksTheme) && snackType !== 'object'
        if (themeIsBad) {
          throw new Error(`Recieved an invalid snacksTheme Prop. Expected undefined or an object and instead got ${snackType}`)
        }
      }
    }

    onThemeChange = () => {
      this.forceUpdate()
    }

    render() {
      const getRef = (node) => this.wrapped = node
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
