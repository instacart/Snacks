import React     from 'react'
import Radium    from 'radium'
import hexValues from './hexValues'
import PropTypes from 'prop-types'

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
  const { style, onClick } = props
  const icon = getIcon(props)
  return (
    <i
      style={[baseStyles, style]}
      aria-hidden={true}
      onClick={onClick}
    >
      {icon}
    </i>
  )
}

Icon.propTypes = {
  /**
  * String name of icon - ex 'cart'
  */
  name: PropTypes.oneOf(Object.keys(hexValues)),
  /** Hexcode of desired icon from ic-icons */
  code: PropTypes.string,
  /** Optional style overrides */
  style: PropTypes.object,
  /** Callback function called after button click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
  */
  onClick: PropTypes.func
}

export default Radium(Icon)
