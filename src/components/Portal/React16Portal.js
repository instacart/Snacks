import { PureComponent }             from 'react'
import { createPortal, findDOMNode } from 'react-dom'
import PropTypes                     from 'prop-types'

class Portal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    container: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ])
  }

  constructor(props) {
    super(props)
    this.setContainer(this.props.container)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container)
    }
  }

  componentWillUnmount() {
    this.portalContainer = null
  }

  getContainer(container) {
    container = typeof container === 'function' ? container() : container
    return findDOMNode(container) || document.body
  }

  setContainer(container) {
    this.portalContainer = this.getContainer(container)
  }

  render() {
    const { children } = this.props
    return createPortal(children, this.portalContainer)
  }
}

export default Portal
