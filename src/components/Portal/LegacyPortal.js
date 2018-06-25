import React, { Component }   from 'react'
import ReactDOM               from 'react-dom'
import PropTypes              from 'prop-types'

const DEFAULT_CONTAINER = document.body

class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    container: PropTypes.element
  }

  constructor () {
    super()
    this.setContainer(this.props.container)
  }

  componentDidMount() {
    this.renderPortal()
  }

  componentDidUpdate() {
    this.renderPortal()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.containerEl)
    this.containerEl.parent.removeChild(this.containerEl)
    this.containerEl = null
  }

  setContainer (nextContainer) {
    if (!nextContainer) {
      this.containerEl = document.createElement('div')
      DEFAULT_CONTAINER.appendChild(this.containerEl)
    } else {
      this.containerEl = nextContainer
    }
  }

  renderPortal() {
    let children = this.props.children
    if (typeof this.props.children.type === 'function') {
      children = React.cloneElement(this.props.children)
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.containerEl
    )
  }

  render() {
    return null
  }
}

export default Portal
