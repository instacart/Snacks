import React from 'react'
import PropTypes from 'prop-types'
import hexValues from './hexValues'

const baseStyles = {
  fontSize: '16px',
  position: 'relative',
  fontFamily: 'ic-icons',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
  speak: 'none',
  lineHeight: '1',
  fontSmoothing: 'antialiased',
  osxFontSmoothing: 'grayscale',
}

const getIcon = ({ name, code }) => {
  const iconCode = !code ? hexValues[name] : code
  const codePoint = parseInt(iconCode, 16)
  return String.fromCodePoint(codePoint)
}

const Icon = props => {
  const { className, style, onClick } = props
  const icon = getIcon(props)
  return (
    <i className={className} css={[baseStyles, style]} aria-hidden onClick={onClick}>
      {icon}
    </i>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  /**
   * String name of icon - ex 'cart'
   */
  name: PropTypes.oneOf(Object.keys(hexValues)),
  /** Hexcode of desired icon from ic-icons */
  code: PropTypes.string,
  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style: PropTypes.object,
  /** Callback function called after button click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: PropTypes.func,
}

export default Icon
