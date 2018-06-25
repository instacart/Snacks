import { PureComponent }             from 'react'
import { createPortal, findDOMNode } from 'react-dom'
import PropTypes                     from 'prop-types'

const DEFAULT_CONTAINER = document.body

class Portal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    container: PropTypes.element
  }

  constructor () {
    super()
    this.setContainer(this.props.container)
  }

  setContainer (nextContainer) {
    if (!nextContainer) {
      this.containerEl = document.createElement('div')
      DEFAULT_CONTAINER.appendChild(this.containerEl)
    } else {
      this.containerEl = nextContainer
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container)
    }
  }

  componentWillUnmount() {
    this.containerEl.parent.removeChild(this.containerEl)
    this.containerEl = null
  }

  render() {
    const { children } = this.props
    return createPortal(children, this.containerEl)
  }
}

export default Portal
