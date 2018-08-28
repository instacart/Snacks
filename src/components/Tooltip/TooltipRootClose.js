import { PureComponent } from 'react'
import { findDOMNode }   from 'react-dom'
import PropTypes         from 'prop-types'
import { isNodeEnv } from '../../utils/detectFeature'

class TooltipRootClose extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onRootClose: PropTypes.func.isRequired,
    rootCloseEnabled: PropTypes.bool
  }

  static defaultProps = {
    rootCloseEnabled: true
  }

  componentDidMount() {
    const { rootCloseEnabled } = this.props

    if (rootCloseEnabled) {
      this.addEventListeners()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { rootCloseEnabled } = this.props

    if (!rootCloseEnabled && nextProps.rootCloseEnabled) {
      this.addEventListeners()
    } else if (rootCloseEnabled && !nextProps.rootCloseEnabled) {
      this.removeEventListeners()
    }
  }

  componentWillUnmount() {
    const { rootCloseEnabled } = this.props

    if (rootCloseEnabled) {
      this.removeEventListeners()
    }
  }

  addEventListeners() {
    if (isNodeEnv()) { return }
    document.addEventListener('click', this.handleMouseClick)
    document.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('resize', this.handleResize)
  }

  removeEventListeners() {
    if (isNodeEnv()) { return }
    document.removeEventListener('click', this.handleMouseClick)
    document.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('resize', this.handleResize)
  }

  handleMouseClick = (e) => {
    const { onRootClose } = this.props
    const target = e.target
    const tooltip = findDOMNode(this)

    if (!tooltip.contains(target)) {
      onRootClose && onRootClose()
    }
  }

  handleKeyUp = (e) => {
    const { onRootClose } = this.props
    if (e.keyCode === 27 && onRootClose) {
      onRootClose && onRootClose()
    }
  }

  handleResize = () => {
    const { onRootClose } = this.props
    onRootClose && onRootClose()
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default TooltipRootClose
