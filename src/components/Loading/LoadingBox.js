import Radium from 'radium'
import { colors } from 'styles'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

const buildKeyFramesStyles = (startColor, endColor, name) => ({
  animationName: Radium.keyframes(
    {
      '0%': { backgroundColor: startColor },
      '50%': { backgroundColor: endColor },
      '100%': { backgroundColor: startColor },
    },
    name
  ),
  backgroundColor: startColor,
})

const baseLoadingStyle = {
  animation: 'x 3s ease-in-out infinite',
  ...buildKeyFramesStyles(colors.GRAY_93, colors.GRAY_88, 'loading'),
  width: '100%',
  height: '20px',
}

const backgroundStyles = {
  dark: buildKeyFramesStyles(colors.GRAY_88, colors.GRAY_74, 'darkLoading'),
  light: buildKeyFramesStyles(colors.GRAY_97, colors.GRAY_93, 'lightLoading'),
}

const shapeStyles = {
  circle: {
    borderRadius: '50%',
    height: 100,
    width: 100,
  },
  square: {
    height: 100,
    width: 100,
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    width: 150,
  },
}

const determineStyle = (background, shape, size) => {
  const sizeStyles = !shape || shape === 'line' ? { width: size } : { width: size, height: size }

  return {
    ...(backgroundStyles[background] || {}),
    ...(shapeStyles[shape] || {}),
    ...(size ? sizeStyles : {}),
  }
}

@Radium
class LoadingBox extends PureComponent {
  static propTypes = {
    /** Use for rendering dark backgrounds. */
    background: PropTypes.oneOf(['light', 'dark']),

    /** Use for rendering light backgrounds, overrides dark */
    shape: PropTypes.oneOf(['circle', 'square', 'line']),

    /**
     *  By default, `size` will determine the components width.
     *
     *  If the `shape` is prop `circle` or `square`, `size` will apply to height and width.
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Optional style overrides. */
    style: PropTypes.object,
  }

  render() {
    const { background, shape, size, style } = this.props

    const boxStyle = {
      ...baseLoadingStyle,
      ...determineStyle(background, shape, size),
      ...style,
    }

    return <div style={boxStyle} />
  }
}

export default LoadingBox
