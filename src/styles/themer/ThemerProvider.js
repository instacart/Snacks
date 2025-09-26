import React from 'react'
import PropTypes from 'prop-types'
import { Themer } from './Themer'
import { ThemerContext } from './ThemerContext'

export class ThemerProvider extends React.Component {
  static propTypes = {
    themer: PropTypes.instanceOf(Themer),
    children: PropTypes.node,
  }

  static contextType = ThemerContext

  state = {
    tick: 0,
  }

  componentDidMount() {
    this.unsubscribe = this.context.themer.subscribe(this.onThemeChange)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onThemeChange = () => {
    const { tick } = this.state
    // increment tick to force an update on the context
    this.setState({ tick: tick + 1 })
  }

  render() {
    const { themer, children } = this.props
    // this creates a new reference every time render gets called
    const themerContext = { themer }
    return <ThemerContext.Provider value={themerContext}>{children}</ThemerContext.Provider>
  }
}

ThemerProvider.propTypes = {
  themer: PropTypes.object,
  children: PropTypes.node,
}
