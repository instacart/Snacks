import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const NOOP = () => {} // eslint-disable-line no-empty-function
const INPUT_BTN_SIZE = 22

const STYLES = {
  button: {
    position: 'relative',
  },
  inputBtn: {
    width: INPUT_BTN_SIZE,
    height: INPUT_BTN_SIZE,
    appearance: 'none',
    msAppearance: 'none',
    mozAppearance: 'none',
    webkitAppearance: 'none',
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
  }
}

class RadioCheckboxBase extends Component {
  static propTypes = {
    aria          : PropTypes.shape({
      label         :PropTypes.string,
    }),
    assets        : PropTypes.shape({
      btnBkg        : PropTypes.object.isRequired,
    }),
    btnType       : PropTypes.oneOf(['radio', 'checkbox']).isRequired,
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
    onClick     : NOOP,
    styles      : {},
    wrapEl      : 'div',
  }

  state = {
    isSelected  : this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isSelected: nextProps.isSelected})
  }

  onClick = (event) => {
    const { isSelected } = this.state

    this.setState({isSelected: !isSelected})
    this.props.onClick(event, {...this.props, isSelected: !isSelected})
  }

  renderInputBtn() {
    const { aria, assets, btnType, id, styles, value } = this.props
    const { isSelected } = this.state
    const isSelectedImg = isSelected ? assets.btnBkg.checked : assets.btnBkg.base

    return (
      <div style={{...STYLES.button, ...styles.button}}>
        <img
          style={STYLES.image}
          src={isSelectedImg}
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
          aria-label={aria.label}
        />
      </div>
    )
  }

  render() {
    const { children: labelText, id, styles,  wrapEl } = this.props
    const Element = wrapEl

    // ensure both text and id were supplied so the button and label are correctly associated
    if (labelText && id) {
      return (
        <Element style={{...STYLES.wrapEl, ...styles.wrapEl}}>
          {this.renderInputBtn()}
          <label htmlFor={id} style={{...STYLES.label, ...styles.label}}>
            {labelText}
          </label>
        </Element>
      )
    }
    
    return this.renderInputBtn()
  }
}

export default Radium(RadioCheckboxBase)
