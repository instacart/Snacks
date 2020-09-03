import React from 'react'
import PropTypes from 'prop-types'
import Radium from '@instacart/radium'
import colors from '../styles/colors'
import withTheme from '../styles/themer/withTheme'
import { themePropTypes } from '../styles/themer/utils'

const NoOp = () => {} // eslint-disable-line no-empty-function
const INPUT_BTN_SIZE = 22

const getStyles = ({ props, focused }) => ({
  button: {
    position: 'relative',
    ...(focused && { border: 'solid 4px hotpink' }),
  },
  inputBtn: {
    width: props.width || INPUT_BTN_SIZE,
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
    cursor: 'pointer',
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
})

const getEnabledColor = (props, state) => {
  return state.isSelected ? props.snacksTheme.colors.action : colors.GRAY_46
}

const getInputStyles = (props, state) => ({
  width: props.width || INPUT_BTN_SIZE,
  height: INPUT_BTN_SIZE,
  fill: props.isDisabled ? colors.GRAY_74 : getEnabledColor(props, state),
})

class RadioCheckboxBase extends React.PureComponent {
  static propTypes = {
    aria: PropTypes.shape({
      label: PropTypes.string,
    }),
    renderInputButton: PropTypes.func.isRequired,
    width: PropTypes.number,
    btnType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    isDisabled: PropTypes.bool,
    children: PropTypes.node,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    style: PropTypes.shape({
      button: PropTypes.object,
      label: PropTypes.object,
      wrapEl: PropTypes.object,
      inputBtn: PropTypes.object,
    }),
    snacksTheme: themePropTypes,
    value: PropTypes.string,
    wrapEl: PropTypes.string,
  }

  static defaultProps = {
    aria: {},
    isSelected: false,
    onChange: NoOp,
    style: {},
    wrapEl: 'div',
  }

  state = {
    isSelected: this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    const { isSelected } = nextProps

    if (this.props.isSelected !== isSelected) {
      this.setState({ isSelected })
    }
  }

  handleChange = event => {
    const { btnType, onChange } = this.props
    const { isSelected } = this.state

    if (btnType === 'radio' && isSelected) {
      return
    }

    this.setState({ isSelected: !isSelected })
    onChange(event, { ...this.props, isSelected: !isSelected })
  }

  onFocus = () => {
    const { onFocus } = this.props
    onFocus && onFocus()

    this.setState({ focused: true })
  }

  onBlur = () => {
    const { onBlur } = this.props
    onBlur && onBlur()

    this.setState({ focused: false })
  }

  renderInputBtn() {
    const { aria, btnType, isDisabled, id, style, value, renderInputButton } = this.props
    const { isSelected } = this.state

    const internalStyle = getStyles({ props: this.props, focused: this.state.focused })

    return (
      <div style={{ ...internalStyle.button, ...style.button }}>
        {renderInputButton(isSelected, getInputStyles(this.props, this.state))}
        <input
          id={id}
          type={btnType}
          onChange={this.handleChange}
          style={{ ...internalStyle.inputBtn, ...style.inputBtn }}
          value={value}
          checked={isSelected}
          disabled={isDisabled}
          aria-label={aria.label}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </div>
    )
  }

  render() {
    const { children: labelText, id, style, wrapEl } = this.props
    const { isDisabled } = this.props
    const Element = wrapEl
    const internalStyle = getStyles(this.props)

    const isDisabledStyle = isDisabled ? internalStyle.disabled : {}

    // ensure both text and id are supplied so the button and label are correctly associated
    if (labelText && id) {
      return (
        <Element style={{ ...internalStyle.wrapEl, ...style.wrapEl }}>
          {this.renderInputBtn()}
          <label
            htmlFor={id}
            style={{ ...internalStyle.label, ...style.label, ...isDisabledStyle }}
          >
            {labelText}
          </label>
        </Element>
      )
    }

    return this.renderInputBtn()
  }
}

export default withTheme(Radium(RadioCheckboxBase))
