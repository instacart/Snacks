import React, { PureComponent } from 'react'
import baseProps from './baseProps'
import colors from '../../styles/colors'

const STYLES = {
  arrow: {
    alignSelf: 'flex-end',
    top: 0,
    marginBottom: -1,
    borderWidth: 8,
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    marginRight: 24
  }
}

const RESOLVED_MARGIN_CENTER = {
  small: 68,
  medium: 118,
  large: 158
}

const RESOLVED_MARGIN_RIGHT = {
  small: 5,
  medium: 20,
  large: 50
}

const RESOLVED_MARGIN_LEFT = {
  small: 98,
  medium: 188,
  large: 218
}

const RESOLVED_MARGIN = {
  top: RESOLVED_MARGIN_CENTER,
  bottom: RESOLVED_MARGIN_CENTER,
  topLeft: RESOLVED_MARGIN_LEFT,
  topRight: RESOLVED_MARGIN_RIGHT,
  bottomLeft: RESOLVED_MARGIN_LEFT,
  bottomRight: RESOLVED_MARGIN_RIGHT,
}

const RESOLVED_BORDER = {
  top: {
    borderBottomWidth: 0,
    borderTopColor: 'black'
  },
  right: {},
  left: {},
  bottom: {
    borderTopWidth: 0,
    borderBottomColor: 'rgb(0, 0, 0)'
  }
}


class TooltipArrow extends PureComponent {
  static propTypes = baseProps

  get marginSyles() {
    const { overlayPosition, position, size } = this.props
    if (['top', 'bottom'].includes(overlayPosition)) {
      return {
        marginRight: RESOLVED_MARGIN[position][size]
      }
    }

    return {

    }
  }

  get calculatedStyles() {
    const { overlayPosition, size } = this.props
    return {
      ...STYLES.arrow,
      ...this.marginSyles,
      ...RESOLVED_BORDER[overlayPosition]
    }
  }

  render() {
    return <div style={this.calculatedStyles} />
  }
}

export default TooltipArrow
