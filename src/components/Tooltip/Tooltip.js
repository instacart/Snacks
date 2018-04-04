import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Overlay } from 'react-overlays'
import InnerToolTip from './InnerToolTip'
import baseProps from './baseProps'

const OVERLAY_RESOLVED_POSITION = {
  topLeft: 'top',
  top: 'top',
  topRight: 'top',
  left: 'left',
  right: 'right',
  bottomLeft: 'bottom',
  bottom: 'bottom',
  bottomRight: 'bottom',
}

class Tooltip extends PureComponent {
  static propTypes = {
    ...baseProps,
    target: PropTypes.node,
    targetContainerStyle: PropTypes.object,
    innerTooltipStyle: PropTypes.object,
  }

  state = {
    show: false
  }

  get resolvedOverlayPosition() {
    const { position } = this.props
    return OVERLAY_RESOLVED_POSITION[position]
  }

  toggle = () => this.setState(({ show }) => ({ show: !show }))

  handleHideToolTip = () => this.setState({ show: false })

  renderTriggerElement() {
    const { target } = this.props
    const { open } = this.state
    if (target) {
      return React.cloneElement(target, {
        ref: (node) => {
          this.anchor = node
          if (typeof ref === 'function') {
            ref(node)
          }
        },
        onClick: this.toggle,
        'aria-haspopup': true,
        'aria-expanded': open,
      })
    }
  }

  render() {
    const {
      children,
      style,
      innerTooltipStyle,
      position,
      size
    } = this.props

    return (
      <div style={style} >
        {this.renderTriggerElement()}
        <Overlay
          rootClose
          show={this.state.show}
          onHide={this.handleHideToolTip}
          placement={this.resolvedOverlayPosition}
          target={() => this.anchor}
        >
          <InnerToolTip
            size={size}
            position={position}
            overlayPosition={this.resolvedOverlayPosition}
            tooltipStyle={innerTooltipStyle}
          >
            {children}
          </InnerToolTip>
        </Overlay>
      </div>
    )
  }
}

export default Tooltip
