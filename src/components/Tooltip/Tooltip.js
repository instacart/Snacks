import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InnerToolTip from './InnerToolTip'
import TooltipOverlay from './TooltipOverlay'

const noop = () => {} // eslint-disable-line no-empty-function

class Tooltip extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    style: PropTypes.shape({
      border: PropTypes.string,
      padding: PropTypes.string,
      boxShadow: PropTypes.string,
    }),
    // phasing in a new style override prop to avoid using native react prop
    customStyle: PropTypes.shape({
      border: PropTypes.string,
      padding: PropTypes.string,
      boxShadow: PropTypes.string,
      backgroundColor: PropTypes.string,
    }),
    overlayStyle: PropTypes.shape({}),
    arrowStyle: PropTypes.shape({
      border: PropTypes.string,
      boxShadowRight: PropTypes.string,
      boxShadowBottom: PropTypes.string,
      boxShadowLeft: PropTypes.string,
      boxShadowTop: PropTypes.string,
    }),
    target: PropTypes.node.isRequired,
    snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark']),
    onDismiss: PropTypes.func,
    onShow: PropTypes.func,
    isVisible: PropTypes.bool,
  }

  static defaultProps = {
    snacksStyle: 'dark',
    placement: 'bottom',
    size: 'small',
    onShow: noop,
    onDismiss: noop,
  }

  state = {
    show: false,
  }

  handleToggle = () => {
    const { onDismiss, onShow } = this.props
    this.setState(
      prevState => ({ show: !prevState.show }),
      () => {
        if (this.state.show) {
          onShow()
        } else {
          onDismiss()
        }
      }
    )
  }

  handleHideToolTip = () => {
    const { onDismiss } = this.props
    this.setState({ show: false })
    onDismiss()
  }

  renderTriggerElement() {
    const { target, isVisible } = this.props
    const { show } = this.state

    if (!target) {
      return
    }
    const extraProps = isVisible == null ? { onClick: this.handleToggle.bind(this) } : {}

    return React.cloneElement(target, {
      ref: node => {
        this.trigger = node
      },
      'aria-haspopup': true,
      'aria-expanded': isVisible || show,
      ...extraProps,
    })
  }

  render() {
    const {
      children,
      placement,
      size,
      style,
      customStyle,
      arrowStyle,
      snacksStyle,
      isVisible,
      overlayStyle,
    } = this.props

    if (style) {
      console.warn(
        'You have passed a `style` prop which will be deprecated in a future version of this component. Use `customStyle` instead.'
      )
    }

    return (
      <div>
        {this.renderTriggerElement()}
        <TooltipOverlay
          placement={placement}
          target={() => this.trigger}
          show={isVisible || this.state.show}
          onRootClose={this.handleHideToolTip}
          style={overlayStyle}
        >
          <InnerToolTip
            size={size}
            customStyle={customStyle || style}
            arrowStyle={arrowStyle}
            snacksStyle={snacksStyle}
          >
            {children}
          </InnerToolTip>
        </TooltipOverlay>
      </div>
    )
  }
}

export default Tooltip
