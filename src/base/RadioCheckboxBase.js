import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import colors from '../styles/colors'

const NoOp = () => {} // eslint-disable-line no-empty-function
const INPUT_BTN_SIZE = 22

const STYLES = {
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
    return new Error(`The asset "${propName}" is required.`)
  }

  if (asset.url && !asset.url.includes('.svg')) {
    return new Error('Image type is not supported.')
  }
}

class RadioCheckboxBase extends Component {
  static propTypes = {
    aria          : PropTypes.shape({
      label         :PropTypes.string,
    }),
    assets        : PropTypes.shape({
      base          : imgValidator,
      checked       : imgValidator,
      disabled      : imgValidator,
    }),
    btnType       : PropTypes.oneOf(['radio', 'checkbox']).isRequired,
    isDisabled    : PropTypes.bool,
    children      : PropTypes.string,
    id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isSelected    : PropTypes.bool,
    onClick       : PropTypes.func,
    styles        : PropTypes.shape({
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
    onClick     : NoOp,
    styles      : {},
    wrapEl      : 'div',
  }

  state = {
    isSelected  : this.props.isDisabled ? false : this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    const { isDisabled, isSelected } = nextProps

    if (this.props.isSelected !== isSelected || this.props.isDisabled !== isDisabled) {
      this.setState({isDisabled, isSelected: isDisabled ? false : isSelected})
    }
  }

  onClick = (event) => {
    const { btnType, onClick } = this.props
    const { isSelected } = this.state

    if (btnType === 'radio' && isSelected) { return }

    this.setState({isSelected: !isSelected})
    onClick(event, {...this.props, isSelected: !isSelected})
  }

  renderInputBtn() {
    let bkgImage
    const { aria, assets, btnType, isDisabled, id, styles, value } = this.props
    const { isSelected } = this.state

    if (isDisabled) { bkgImage = assets.disabled }
    else { bkgImage = isSelected ? assets.checked : assets.base }

    return (
      <div style={{...STYLES.button, ...styles.button}}>
        <img
          style={STYLES.image}
          src={bkgImage}
          tabIndex='-1'
          alt=''
        />
        <input
          id={id}
          type={btnType}
          onClick={this.onClick}
          style={STYLES.inputBtn}
          value={value}
          checked={isSelected}
          disabled={isDisabled}
          aria-label={aria.label}
        />
      </div>
    )
  }

  render() {
    const { children: labelText, id, styles,  wrapEl } = this.props
    const { isDisabled } = this.props
    const Element = wrapEl
    const isDisabledStyle = isDisabled ? STYLES.disabled : {}

    // ensure both text and id are supplied so the button and label are correctly associated
    if (labelText && id) {
      return (
        <Element style={{...STYLES.wrapEl, ...styles.wrapEl}}>
          {this.renderInputBtn()}
          <label htmlFor={id} style={{...STYLES.label, ...styles.label, ...isDisabledStyle}}>
            {labelText}
          </label>
        </Element>
      )
    }

    return this.renderInputBtn()
  }
}

export default Radium(RadioCheckboxBase)
