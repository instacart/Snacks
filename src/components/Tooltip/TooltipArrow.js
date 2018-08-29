import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'
import colors                   from '../../styles/colors'

const styles = {
  arrow: {
    position: 'absolute',
    display: 'block',
    height: '12px',
    width: '12px'
  }
}

const RESOLVED_STYLE = {
  primary: {
    backgroundColor: colors.GREEN_500
  },
  secondary: {
    backgroundColor: '#FFF'
  },
  dark: {
    backgroundColor: colors.GRAY_20
  }
}

const RESOLVED_PLACEMENT = {
  top   : {transform: 'rotate(45deg)'},
  bottom: {transform: 'rotate(45deg)'},
  right : {transform: 'rotate(-45deg)'},
  left  : {transform: 'rotate(-45deg)'}
}

const RESOLVE_BORDER_COLOR = {
  primary: colors.GREEN_500,
  secondary: colors.GRAY_74,
  dark: colors.GRAY_20
}

const resolveStylePlacementBorders = (style, arrowStyle, placement) => {
  
  const borderColor = RESOLVE_BORDER_COLOR[style]
  const borderStyle = arrowStyle && arrowStyle.border ?
    arrowStyle.boder : `1px solid ${borderColor}`
  
  const boxShadowRight = arrowStyle.boxShadowRight
  const boxShadowBottom = arrowStyle.boxShadowBottom
  const boxShadowLeft = arrowStyle.boxShadowLeft
  const boxShadowTop = arrowStyle.boxShadowTop

  switch (placement) {
    case 'top':
      return {
        borderRight: borderStyle,
        borderBottom: borderStyle,
        boxShadow: boxShadowTop,
      }
    case 'bottom':
      return {
        borderLeft: borderStyle,
        borderTop: borderStyle,
        boxShadow: boxShadowBottom,
      }
    case 'right':
      return {
        borderLeft: borderStyle,
        borderTop: borderStyle,
        boxShadow: boxShadowRight,
      }
    case 'left':
      return {
        borderRight: borderStyle,
        borderBottom: borderStyle,
        boxShadow: boxShadowLeft,
      }
  }
}

class TooltipArrow extends PureComponent {
  static propTypes = {
    position: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      placement: PropTypes.string
    }).isRequired,
    arrowStyle: PropTypes.shape({
      border: PropTypes.srting, 
      boxShadowRight: PropTypes.string,
      boxShadowBottom: PropTypes.string,
      boxShadowLeft: PropTypes.string,
      boxShadowTop: PropTypes.string,
    }),
    snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark'])
  }

  get calculatedStyles() {
    const { position, arrowStyle, snacksStyle } = this.props
    const borderStyle = resolveStylePlacementBorders(snacksStyle, arrowStyle, position.placement)

    return {
      ...styles.arrow,
      ...RESOLVED_STYLE[snacksStyle],
      ...RESOLVED_PLACEMENT[position.placement],
      ...borderStyle,
      left: position.left,
      top: position.top
    }
  }

  render() {
    return <div style={this.calculatedStyles} />
  }
}

export default TooltipArrow
