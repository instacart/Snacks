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
    onShow: PropTypes.func
  }

  static defaultProps = {
    snacksStyle: 'dark',
    placement: 'bottom',
    size: 'small',
    onShow: noop,
    onDismiss: noop
  }

  state = {
    show: false
  }

  handleToggle = () => {
    console.log('handle toggle')
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
    const { target } = this.props
    const { show } = this.state

    if (!target) { return }

    return React.cloneElement(target, {
      ref: (node) => {
        this.trigger = node
      },
      onClick: this.handleToggle.bind(this),
      'aria-haspopup': true,
      'aria-expanded': show
    })
  }

  render() {

    const {
      children,
      placement,
      size,
      snacksStyle,
      isVisible,
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
          >
            {children}
          </InnerToolTip>
        </TooltipOverlay>
      </div>
    )
  }
}

export default Tooltip
