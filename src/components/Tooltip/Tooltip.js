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
    style: PropTypes.shape({
      border: PropTypes.string,
      padding: PropTypes.string,
      boxShadow: PropTypes.srting,
    }),
    arrowStyle: PropTypes.shape({
      border: PropTypes.srting, 
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
    /** Override the default z-index of the Tooltip */
    zIndex: PropTypes.number,
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
      style,
      arrowStyle,
      snacksStyle,
      isVisible,
      zIndex,
    } = this.props

    return (
      <div>
        {this.renderTriggerElement()}
        <TooltipOverlay
          placement={placement}
          target={() => this.trigger}
          show={isVisible || this.state.show}
          onRootClose={this.handleHideToolTip}
          zIndex={zIndex}
        >
          <InnerToolTip
            size={size}
            style={style}
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
