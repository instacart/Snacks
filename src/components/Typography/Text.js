import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

// Not using `margin` or `padding` shorthand  to avoid any future
// Radium warnings with combining shorthand/longhand properties.
const baseStyles = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  color: colors.GRAY_13
}

// Matches the Open Sans font weights
// https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans
const fontWeights = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700
}

const variantStyles = {
  'T.92': {
    fontSize: '92px',
    lineHeight: '138px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.82': {
    fontSize: '82px',
    lineHeight: '123px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.72': {
    fontSize: '72px',
    lineHeight: '108px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.64': {
    fontSize: '64px',
    lineHeight: '96px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.58': {
    fontSize: '58px',
    lineHeight: '87px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.46': {
    fontSize: '46px',
    lineHeight: '69px',
    letterSpacing: '0',
    fontWeight: fontWeights.regular
  },
  'T.36': {
    fontSize: '36px',
    lineHeight: '54px',
    letterSpacing: '0.03em',
    fontWeight: fontWeights.regular
  },
  'T.28': {
    fontSize: '28px',
    lineHeight: '42px',
    letterSpacing: '0.05em',
    fontWeight: fontWeights.bold
  },
  'T.22': {
    fontSize: '22px',
    lineHeight: '32px',
    letterSpacing: '0.03em',
    fontWeight: fontWeights.regular
  },
  'T.18': {
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: '0.03em',
    fontWeight: fontWeights.regular
  },
  'T.16': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.03em',
    fontWeight: fontWeights.regular
  },
  'T.14': {
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.03em',
    fontWeight: fontWeights.regular
  },
  'T.12': {
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '0.05em',
    fontWeight: fontWeights.regular
  },
  'T.11': {
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.05em',
    fontWeight: fontWeights.regular
  }
}

const htmlTagMapping = {
  'T.92': 'h1',
  'T.82': 'h1',
  'T.72': 'h1',
  'T.64': 'h1',
  'T.58': 'h1',
  'T.46': 'h1',
  'T.36': 'h2',
  'T.28': 'h2',
  'T.22': 'h2',
  'T.18': 'p',
  'T.16': 'p',
  'T.14': 'p',
  'T.12': 'p',
  'T.11': 'p'
}

function Text({ variant, style, children, elementType, fontWeight, ...restProps }) {
  const ElementType = elementType || htmlTagMapping[variant]
  const finalStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...(fontWeight && { fontWeight: fontWeights[fontWeight] }),
    ...style
  }

  return (
    <ElementType style={finalStyles} {...restProps}>
      {children}
    </ElementType>
  )
}

Text.propTypes = {
  /** Typography variant to be used. */
  variant: PropTypes.oneOf(Object.keys(variantStyles)).isRequired,

  /** Text content to be rendered. */
  children: PropTypes.node.isRequired,

  /** Overrides the default HTML element type. Each typography variant has a default HTML element (e.g. h1, p),
   * but this is only a best guess. Always ensure you're using the correct header markup -- element
   * types with Snacks typography should be used to describe document structure, not visual style. */
  elementType: PropTypes.string,

  /** Overrides the variant's default font weight. */
  fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),

  /** Any custom inline styles. Useful for things like gutters and responsive styles. */
  style: PropTypes.shape({})
}

export default Radium(Text)
