import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'
import Fade                     from '../../components/Transitions/Fade'
import colors                   from '../../styles/colors'
import TooltipArrow             from './TooltipArrow'

const styles = {
  root: {
    position: 'relative'
  },
  arrowPadding: {
    top   : {paddingBottom: '9px'},
    bottom: {paddingTop   : '9px'},
    left  : {paddingRight : '9px'},
    right : {paddingLeft  : '9px'},
  },
  innerContent: {
    textAlign: 'center',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    fontWeight: 600
  },
}

const RESOLVED_COLOR = {
  primary: {
    background: colors.GREEN_500,
    color: '#FFF',
    border: `1px solid ${colors.GREEN_500}`
  },
  secondary: {
    background: '#FFF',
    color: colors.GRAY_46,
    border: `1px solid ${colors.GRAY_74}`
  },
  dark: {
    background: colors.GRAY_20,
    color: '#FFF',
    border: `1px solid ${colors.GRAY_20}`
  }
}

const RESOLVED_SIZE = {
  small: {
    fontSize: '14px',
    padding: '9px 8px'
  },
  medium: {
    fontSize: '16px',
    padding: '9px 16px'
  },
  large: {
    fontSize: '18px',
    padding: '12px 24px'
  }
}

class InnerToolTip extends PureComponent {
  static propTypes = {
    snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark']),
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
    style: PropTypes.shape({
      border: PropTypes.string,
      padding: PropTypes.string,
      boxShadow: PropTypes.srting,
    }),
    arrowPosition: PropTypes.shape({})
  }

  static defaultProps = {
    size: 'medium',
    snacksStyle: 'dark'
  }
  
  get contentStyles() {
    const { size, style, snacksStyle } = this.props
    return {
      ...styles.innerContent,
      ...RESOLVED_SIZE[size],
      ...RESOLVED_COLOR[snacksStyle],
      ...style
    }
  }

  renderArrow() {
    const { arrowPosition, snacksStyle } = this.props
    return (
      <TooltipArrow position={arrowPosition} snacksStyle={snacksStyle} />
    )
  }

  render() {
    return (
      <Fade>
        {this.renderArrow()}
        <div style={this.contentStyles}>
          {this.props.children}
        </div>
      </Fade>
    )
  }
}

export default InnerToolTip
