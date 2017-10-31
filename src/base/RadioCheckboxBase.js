import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

const NOOP = () => {} // eslint-disable-line no-empty-function

const STYLES = {
  button: {
    margin: '0 10px -7px 0',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    appearance: 'none',
    '-ms-appearance': 'none',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    width: 22,
    height: 22,
  },
  wrapEl: {
    display: 'flex',
  }
}

function btnBkgStyle(asset) {
  return {
    backgroundImage: `url(${asset})`,
    ':active': {
      backgroundImage: `url(${asset})`,
      border: '0 solid transparent'
    }
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
    isChecked     : PropTypes.bool,
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
    isChecked   : false,
    onClick     : NOOP,
    styles      : {},
    wrapEl      : 'div',
  }

  state = {
    isChecked   : this.props.isChecked,
  }

  componentWillReceiveProps(nextProps) {
    const { isChecked } = nextProps
    if (isChecked !== this.props.isChecked) { this.setState({isChecked}) }
  }

  getStyles() {
    const { styles, assets } = this.props
    const { isChecked } = this.state
    const { btnBkg } = assets
    const isCheckedStyle = btnBkgStyle(isChecked ? btnBkg.checked : btnBkg.base)

    return {
      button  : { ...STYLES.button, ...isCheckedStyle, ...styles.button },
      label   : {...styles.label},
      wrapEl  : {...STYLES.wrapEl, ...styles.wrapEl},
    }
  }

  onClick = (event) => {
    const { isChecked } = this.state

    this.setState({isChecked: !isChecked})
    this.props.onClick(event, {...this.props, isChecked: !isChecked})
  }

  renderButtonOnly() {
    const { aria, btnType, id, value } = this.props
    const { isChecked } = this.state
    const styles = this.getStyles()

    return (
      <input
        id={id}
        type={btnType}
        onClick={this.onClick}
        style={styles.button}
        aria-label={aria.label}
        value={value}
        checked={isChecked}
      />
    )
  }

  renderButtonGroup() {
    const { aria, btnType, children, id, value, wrapEl } = this.props
    const { isChecked } = this.state
    const Element = wrapEl
    const styles = this.getStyles()

    return (
      <Element style={styles.wrapEl}>
        <input
          id={id}
          type={btnType}
          onClick={this.onClick}
          style={styles.button}
          aria-label={aria.label}
          value={value}
          checked={isChecked}
        />
        <label htmlFor={id} style={styles.label}>{children}</label>
      </Element>
    )
  }

  render() {
    return this.props.children ? this.renderButtonGroup() : this.renderButtonOnly()
  }
}

export default Radium(RadioCheckboxBase)
