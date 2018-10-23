import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import colors from '../styles/colors'
import withTheme from '../styles/themer/withTheme'
import { themePropTypes } from '../styles/themer/utils'

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
    opacity: 0, // Required for IE!
    top: 0,
    left: 0,
  },
  label: {
    marginLeft: 10,
    lineHeight: `${INPUT_BTN_SIZE}px`,
  },
  wrapEl: {
    display: 'flex',
  },
  disabled: {
    color: colors.GRAY_74,
  },
}

const getEnabledColor = (props) => {
  return props.isSelected ? props.snacksTheme.colors.action : colors.GRAY_46
}

const getInputStyles = (props) => ({
  width: INPUT_BTN_SIZE,
  height: INPUT_BTN_SIZE,
  fill: props.isDisabled ? colors.GRAY_74 : getEnabledColor(props)
})

function imgValidator (props, propName) {
  const asset = props[propName]

  if (!asset) {
    return new Error(`The background image "${propName}" is required.`)
  }
}

class RadioCheckboxBase extends React.PureComponent {
  static propTypes = {
    aria          : PropTypes.shape({
      label         :PropTypes.string,
    }),
    bkgSvgSprites : PropTypes.shape({
      base          : imgValidator,
      selected      : imgValidator,
    }),
    btnType       : PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    isDisabled    : PropTypes.bool,
    children      : PropTypes.string,
    id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isSelected    : PropTypes.bool,
    onChange      : PropTypes.func,
    style         : PropTypes.shape({
      button        : PropTypes.object,
      label         : PropTypes.object,
      wrapEl        : PropTypes.object,
      inputBtn      : PropTypes.object,
    }),
    snacksTheme   : themePropTypes,
    value         : PropTypes.string,
    wrapEl        : PropTypes.string,
    forwardedRef    : PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }

  static defaultProps = {
    aria        : {},
    isSelected  : false,
    onChange    : NoOp,
    style       : {},
    wrapEl      : 'div',
  }

  state = {
    isSelected  : this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    const { isSelected } = nextProps

    if (this.props.isSelected !== isSelected) {
      this.setState({isSelected: isSelected})
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
    const { aria, bkgSvgSprites, btnType, isDisabled, id, style, value } = this.props
    const { isSelected } = this.state
    const SvgComponent = isSelected ? bkgSvgSprites.selected : bkgSvgSprites.base

    return (
      <div style={{...STYLE.button, ...style.button}}>
        <SvgComponent aria-hidden="true" style={getInputStyles(this.props)} />
        <input
          id={id}
          type={btnType}
          onChange={this.handleChange}
          style={{...STYLE.inputBtn, ...style.inputBtn}}
          value={value}
          checked={isSelected}
          disabled={isDisabled}
          aria-label={aria.label}
          ref={this.props.forwardedRef}
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

export default withTheme(Radium(RadioCheckboxBase))
