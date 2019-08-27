import { keyframes } from '@emotion/core'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { colors } from '../../styles'

const buildKeyFrames = (startColor, endColor) =>
  keyframes({
    '0%': { backgroundColor: startColor },
    '50%': { backgroundColor: endColor },
    '100%': { backgroundColor: startColor },
  })

const animations = {
  loading: buildKeyFrames(colors.GRAY_93, colors.GRAY_88),
  darkLoading: buildKeyFrames(colors.GRAY_88, colors.GRAY_74),
  lightLoading: buildKeyFrames(colors.GRAY_97, colors.GRAY_93),
}

const baseLoadingStyle = {
  animation: `${animations.loading} 3s ease-in-out infinite`,
  background: colors.GRAY_93,
  width: '100%',
  height: '20px',
}

const backgroundStyles = {
  dark: {
    animation: `${animations.darkLoading} 3s ease-in-out infinite`,
    background: colors.GRAY_88,
  },
  light: {
    animation: `${animations.lightLoading} 3s ease-in-out infinite`,
    background: colors.GRAY_97,
  },
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

class LoadingBox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,

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

    /**
     * Optional style overrides merged into emotion css
     *
     * @deprecated
     * This prop exists for backwards compatibility and will be
     * removed in a future version
     */
    style: PropTypes.object,
  }

  render() {
    const { className, background, shape, size, style } = this.props

    const boxStyle = {
      ...baseLoadingStyle,
      ...determineStyle(background, shape, size),
      ...style,
    }

    return <div className={className} css={boxStyle} />
  }
}

export default LoadingBox
