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
    static WrappedComponent = InnerComponent

    static propTypes = {
      snacksTheme: themePropTypes
    }

    componentDidMount() {
      this.unsubscribe = themer.subscribe(this.onThemeChange)
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    onThemeChange = () => {
      this.forceUpdate()
    }

    render() {
      const getRef = (node) => this.wrapped = node

      return (
        <InnerComponent
          ref={isStateless(InnerComponent) ? undefined : getRef}
          snacksTheme={themer.themeConfig}
          {...this.props}
        />
      )
    }
  }

  return Wrapped
}

export default withTheme
