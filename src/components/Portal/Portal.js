import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { isNodeEnv } from '../../utils/detectFeature'

const DEFAULT_CONTAINER = !isNodeEnv()
  ? document.body
  : {
      appendChild: () => {} /* eslint-disable-line no-empty-function */,
    }

class Portal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    container: PropTypes.element,
  }

  constructor(props) {
    super(props)
    this.setContainer(props.container)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container)
    }
  }

  componentWillUnmount() {
    this.containerEl.parentNode.removeChild(this.containerEl)
    this.containerEl = null
  }

  setContainer(nextContainer) {
    if (!nextContainer) {
      this.containerEl = document.createElement('div')
      DEFAULT_CONTAINER.appendChild(this.containerEl)
    } else {
      this.containerEl = nextContainer
    }
  }

  render() {
    const { children } = this.props
    return createPortal(children, this.containerEl)
  }
}

export default Portal
