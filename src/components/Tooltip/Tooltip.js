import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'
import InnerToolTip             from './InnerToolTip'
import TooltipOverlay           from './TooltipOverlay'

const noop = () => {} // eslint-disable-line no-empty-function

class Tooltip extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
    placement: PropTypes.oneOf([
      'top',
      'left',
      'right',
      'bottom',
    ]),
    target: PropTypes.node.isRequired,
    snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark']),
    onDismiss: PropTypes.func,
    onShow: PropTypes.func,
    isVisible: PropTypes.bool,
    noPadding: PropTypes.bool,
  }

  static defaultProps = {
    snacksStyle: 'dark',
    placement: 'bottom',
    size: 'small',
    onShow: noop,
    onDismiss: noop,
  }

  state = {
    show: false
  }

  handleToggle = () => {
    const {onDismiss, onShow} = this.props
    this.setState({show: !this.state.show}, () => {
      if (this.state.show) {
        onShow()
      }  else {
        onDismiss()
      }
    })
  }

  handleHideToolTip = () => {
    const {onDismiss} = this.props
    this.setState({ show: false })
    onDismiss()
  }

  renderTriggerElement() {
    const { target, isVisible } = this.props
    const { show } = this.state

    if (!target) { return }
    const extraProps = isVisible == null ? { onClick: this.handleToggle.bind(this) } : {}

    return React.cloneElement(target, {
      ref: (node) => {
        this.trigger = node
      },
      'aria-haspopup': true,
      'aria-expanded': isVisible || show,
      ...extraProps
    })
  }

  render() {
    const {
      children,
      placement,
      size,
      snacksStyle,
      isVisible,
      noPadding,
    } = this.props

    return (
      <div>
        {this.renderTriggerElement()}
        <TooltipOverlay
          placement={placement}
          target={() => this.trigger}
          show={isVisible || this.state.show}
          onRootClose={this.handleHideToolTip}
        >
          <InnerToolTip
            size={size}
            snacksStyle={snacksStyle}
            noPadding={noPadding}
          >
            {children}
          </InnerToolTip>
        </TooltipOverlay>
      </div>
    )
  }
}

export default Tooltip
