import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import colors from '../styles/colors'

const NoOp = () => {} // eslint-disable-line no-empty-function
const INPUT_BTN_SIZE = 22

const STYLE = {
  button: {
    position: 'relative',
  },
  inputBtn: {
    width: INPUT_BTN_SIZE,
    height: INPUT_BTN_SIZE,
    appearance: 'none',
    MsAppearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: INPUT_BTN_SIZE,
    height: INPUT_BTN_SIZE,
  },
  label: {
    marginLeft: 10,
  },
  wrapEl: {
    display: 'flex',
  },
  disabled: {
    color: colors.GRAY_74,
  },
}

function imgValidator (props, propName) {
  const asset = props[propName]

  if (!asset) {
    return new Error(`The background image "${propName}" is required.`)
  }
}

function renderSvg(SvgSprite) {
  const { width, height } = STYLE.image
  return <SvgSprite width={width} height={height} />
}

class RadioCheckboxBase extends React.PureComponent {
  static propTypes = {
    aria          : PropTypes.shape({
      label         :PropTypes.string,
    }),
    bkgSvgSprites : PropTypes.shape({
      base          : imgValidator,
      selected      : imgValidator,
      disabled      : imgValidator,
    }),
    btnType       : PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    isDisabled    : PropTypes.bool,
    children      : PropTypes.string,
    id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isSelected    : PropTypes.bool,
    onChange      : PropTypes.func,
    style         : PropTypes.shape({
      button        : PropTypes.object,
      label         : PropTypes.object,
      wrapEl        : PropTypes.object,
    }),
    value         : PropTypes.string,
    wrapEl        : PropTypes.string,
  }

  static defaultProps = {
    aria        : {},
    isSelected  : false,
    onChange    : NoOp,
    style       : {},
    wrapEl      : 'div',
  }

  state = {
    isSelected  : this.props.isDisabled ? false : this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    const { isDisabled, isSelected } = nextProps

    if (this.props.isSelected !== isSelected || this.props.isDisabled !== isDisabled) {
      this.setState({isSelected: isDisabled ? false : isSelected})
    }
  }

  handleChange = (event) => {
    const { btnType, onChange } = this.props
    const { isSelected } = this.state

    if (btnType === 'radio' && isSelected) { return }

    this.setState({isSelected: !isSelected})
    onChange(event, {...this.props, isSelected: !isSelected})
  }

  renderInputBtn() {
    let svgSprite
    const { aria, bkgSvgSprites, btnType, isDisabled, id, style, value } = this.props
    const { isSelected } = this.state

    if (isDisabled) { svgSprite = bkgSvgSprites.disabled }
    else { svgSprite = isSelected ? bkgSvgSprites.selected : bkgSvgSprites.base }

    return (
      <div style={{...STYLE.button, ...style.button}}>
        {renderSvg(svgSprite)}
        <input
          id={id}
          type={btnType}
          onChange={this.handleChange}
          style={STYLE.inputBtn}
          value={value}
          checked={isSelected}
          disabled={isDisabled}
          aria-label={aria.label}
        />
      </div>
    )
  }

  render() {
    const { children: labelText, id, style,  wrapEl } = this.props
    const { isDisabled } = this.props
    const Element = wrapEl
    const isDisabledStyle = isDisabled ? STYLE.disabled : {}

    // ensure both text and id are supplied so the button and label are correctly associated
    if (labelText && id) {
      return (
        <Element style={{...STYLE.wrapEl, ...style.wrapEl}}>
          {this.renderInputBtn()}
          <label htmlFor={id} style={{...STYLE.label, ...style.label, ...isDisabledStyle}}>
            {labelText}
          </label>
        </Element>
      )
    }

    return this.renderInputBtn()
  }
}

export default Radium(RadioCheckboxBase)
