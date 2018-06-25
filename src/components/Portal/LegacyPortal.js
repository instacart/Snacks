import React, { Component }   from 'react'
import ReactDOM               from 'react-dom'
import PropTypes              from 'prop-types'

class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    node: PropTypes.any
  }

  componentDidMount() {
    this.renderPortal()
  }

  componentDidUpdate() {
    this.renderPortal()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node)
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
    this.portal = null
  }

  renderPortal() {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div')
      document.body.appendChild(this.defaultNode)
    }

    let children = this.props.children
    if (typeof this.props.children.type === 'function') {
      children = React.cloneElement(this.props.children)
    }

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.props.node || this.defaultNode
    )
  }

  render() {
    return null
  }
}

export default Portal
