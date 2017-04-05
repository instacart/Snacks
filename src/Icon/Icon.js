import React     from 'react'
import Radium    from 'radium'
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

function Icon (props) {
  const { name, style } = props
  const icon = String.fromCodePoint(parseInt(hexValues[name], 16))

  return <i style={[baseStyles, style]} aria-hidden={true}>{icon}</i>
}

Icon.propTypes = {
  name: React.PropTypes.oneOf(Object.keys(hexValues)).isRequired,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ])
}


export default Radium(Icon)
