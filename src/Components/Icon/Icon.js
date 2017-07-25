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

const getIcon = ({ name, code }) => {
  const iconCode = !code ? hexValues[name] : code
  const codePoint = parseInt(iconCode, 16)
  return String.fromCodePoint(codePoint)
}

const Icon = (props) => {
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
  name: React.PropTypes.oneOf(Object.keys(hexValues)),
  code: React.PropTypes.string,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  onClick: React.PropTypes.func
}

export default Radium(Icon)
