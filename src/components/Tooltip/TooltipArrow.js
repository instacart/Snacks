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

const resolveStylePlacementBorders = (style, placement) => {
  const color = RESOLVE_BORDER_COLOR[style]
  switch (placement) {
    case 'top':
      return {
        borderRight: `1px solid ${color}`,
        borderBottom: `1px solid ${color}`
      }
    case 'bottom':
      return {
        borderLeft: `1px solid ${color}`,
        borderTop: `1px solid ${color}`
      }
    case 'right':
      return {
        borderLeft: `1px solid ${color}`,
        borderTop: `1px solid ${color}`
      }
    case 'left':
      return {
        borderRight: `1px solid ${color}`,
        borderBottom: `1px solid ${color}`
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
    snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark'])
  }

  get calculatedStyles() {
    const { position, snacksStyle } = this.props
    const borderStyle = resolveStylePlacementBorders(snacksStyle, position.placement)

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
