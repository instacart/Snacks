import Radium from 'radium'
import { colors } from 'styles'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

const buildKeyFramesStyles = (startColor, endColor, name) => ({
  animationName: Radium.keyframes({
    '0%': { backgroundColor: startColor },
    '50%': { backgroundColor: endColor },
    '100%': { backgroundColor: startColor },
  }, name),
  backgroundColor: startColor,
})

const baseLoadingStyle = {
  animation: 'x 3s ease-in-out infinite',
  ...buildKeyFramesStyles(colors.GRAY_93, colors.GRAY_88, 'loading'),
  width: '100%',
  height: '20px'
}

const darkStyles = buildKeyFramesStyles(colors.GRAY_88, colors.GRAY_74, 'darkLoading')
const lightStyles = buildKeyFramesStyles(colors.GRAY_97, colors.GRAY_93, 'lightLoading')

@Radium
class LoadingBox extends PureComponent {
  static propTypes = {
    /** Use for rendering dark backgrounds. */
    dark: PropTypes.bool,

    /** Use for rendering light backgrounds, overrides dark */
    light: PropTypes.bool,

    /** Optional style overrides. */
    style: PropTypes.object,
  }

  static defaultProps = {
    dark: false,
    light: false,
  }

  componentWillReceiveProps({ dark, light }) {
    if (dark && light) {
      throw new TypeError('LoadingBox can not receive both dark and light props')
    }
  }

  shouldComponentUpdate({ dark, light, style }) {
    const { dark: oldDark, light: oldLight, style: oldStyle } = this.props
    return dark !== oldDark || light !== oldLight || style !== oldStyle
  }

  render() {
    const { dark, light, style } = this.props

    const boxStyle = {
      ...baseLoadingStyle,
      ...(dark ? darkStyles : {}),
      ...(light ? lightStyles : {}),
      ...style,
    }

    return (
      <div style={boxStyle} />
    )
  }
}

export default LoadingBox
