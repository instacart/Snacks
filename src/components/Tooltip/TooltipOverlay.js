import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Portal from '../Portal/Portal'
import TooltipPosition from './TooltipPosition'
import TooltipRootClose from './TooltipRootClose'

class TooltipOverlay extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.bool,
    target: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
    onRootClose: PropTypes.func,
    rootCloseEnabled: PropTypes.bool,
    style: PropTypes.shape({}),
    delayCalculatePosition: PropTypes.bool
  }

  static defaultProps = {
    rootCloseEnabled: true,
  }

  render() {
    const { show, children, target, placement, onRootClose, rootCloseEnabled, style, delayCalculatePosition} = this.props

    if (!show) {
      return false
    }

    let child = (
      <TooltipPosition style={style} target={target} placement={placement} delayCalculatePosition={delayCalculatePosition}>
        {children}
      </TooltipPosition>
    )

    if (rootCloseEnabled) {
      child = <TooltipRootClose onRootClose={onRootClose}>{child}</TooltipRootClose>
    }

    return <Portal>{child}</Portal>
  }
}

export default TooltipOverlay
