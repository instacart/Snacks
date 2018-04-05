import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slide from '../../components/Transitions/Slide'
import Fade from '../../components/Transitions/Fade'
import colors from '../../styles/colors'
import calculateOffset from './calculateOffset'
import TooltipArrow from './TooltipArrow'
import baseProps from './baseProps'

const STYLE = {
  innerToolTip: {
    position: 'absolute',
    zIndex: 9999999,
  },
  fade: {
    display: 'flex',
    flexDirection: 'column',
  },
  innerContent: {
    background: colors.GRAY_20,
    padding: '9px 16px',
    color: colors.WHITE,
    borderRadius: 4,
    fontSize: 14
  },
}

const RESOLVED_WIDTH = {
  small: 120,
  medium: 220,
  large: 300
}

const RESOLVED_OFFSET = {
  bottom: 3,
  top: -3
}

class InnerToolTip extends PureComponent {
  static propTypes = {
    ...baseProps,
    size: PropTypes.number,
    style: PropTypes.object
  }

  static defaultProps = {
    size: 'medium',
    // position: 'bottom'
  }

  get containerStyle() {
    const { style, positionTop, positionLeft, overlayPosition } = this.props

    return {
      ...STYLE.innerToolTip,
      ...style,
      top: positionTop + RESOLVED_OFFSET[overlayPosition],
      left: positionLeft,
    }
  }

  get contentStyles() {
    const { size, tooltipStyle } = this.props
    return {
      ...STYLE.innerContent,
      width: RESOLVED_WIDTH[size],
      tooltipStyle
    }
  }

  renderTopArrow() {
    const { position, size } = this.props
    if (!position.match('bottom')) { return }
    return (
      <TooltipArrow position={position} size={size} />
    )
  }

  renderBottomArrow() {
    const { position, size, overlayPosition } = this.props
    if (!['top'].includes(position)) { return }
    return (
      <TooltipArrow position={position} size={size} overlayPosition={overlayPosition} />
    )
  }

  render() {
    return (
      <Slide axis='y' style={this.containerStyle}>
        <Fade style={STYLE.fade}>
          { this.renderTopArrow() }
          <div style={this.contentStyles}>
            {this.props.children}
          </div>
          { this.renderBottomArrow() }
        </Fade>
      </Slide>
    )
  }
}

export default InnerToolTip
