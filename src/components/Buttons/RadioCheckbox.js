import React, { Component, PropTypes }        from 'react'
import Radium                                 from 'radium'
import svgRadioBtnBase                        from '../../assets/radioBtnBase.svg'
import svgRadioBtnChecked                     from '../../assets/radioBtnChecked.svg'
import svgCheckboxBase                        from '../../assets/checkboxBase.svg'
import svgCheckboxChecked                     from '../../assets/checkboxChecked.svg'

const BASE_STYLES = {
  input: {
    margin: '0 10px -7px 0',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundColor: 'transparent',
    appearance: 'none',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    width: 22,
    height: 22,
  },
}

const STYLES = {
  radioBase: {
    ...BASE_STYLES.input,
    backgroundImage: `url(${svgRadioBtnBase.url})`,
    ':active': {
      backgroundImage: `url(${svgRadioBtnBase.url})`,
      border: '0 solid transparent'
    }
  },
  radioChecked: {
    backgroundImage: `url(${svgRadioBtnChecked.url})`,
    ':active': {
      backgroundImage: `url(${svgRadioBtnChecked.url})`,
      border: '0 solid transparent'
    }
  },
  checkboxBase: {
    ...BASE_STYLES.input,
    backgroundImage: `url(${svgCheckboxBase.url})`,
    ':active': {
      backgroundImage: `url(${svgCheckboxBase.url})`,
      border: '0 solid transparent'
    }
  },
  checkboxChecked: {
    backgroundImage: `url(${svgCheckboxChecked.url})`,
    ':active': {
      backgroundImage: `url(${svgCheckboxChecked.url})`,
      border: '0 solid transparent'
    }
  }
}

class RadioCheckbox extends Component {
  static propTypes = {
    aria          : PropTypes.shape({
      label         :PropTypes.string,
    }),
    btnType       : PropTypes.oneOf(['radio', 'checkbox']),
    id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isChecked     : PropTypes.bool,
    onClick       : PropTypes.func,
    styles        : PropTypes.shape({
      button           : PropTypes.object,
    }),
    value         : PropTypes.string,
  }

  static defaultProps = {
    isChecked   : false,
    btnType     : 'radio',
    styles      : {},
    aria        : {},
  }

  state = {
    isChecked   : this.props.isChecked,
    styles      : {}
  }

  componentDidMount() {
    this.onMount()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isChecked !== prevState.isChecked) {
      this.setState({styles: this.getStyles()})
    }

    if (this.props.isChecked !== prevProps.isChecked) {
      this.setState({isChecked: this.props.isChecked})
    }
  }

  onMount() {
    this.setState({styles: this.getStyles()})
  }

  getStyles() {
    const { btnType, styles } = this.props
    const { isChecked } = this.state
    const finalStyles = {}
    let isCheckedStyle = {}

    if (btnType === 'checkbox') {
      if (isChecked) { isCheckedStyle = STYLES.checkboxChecked }
      finalStyles.button = {...STYLES.checkboxBase, ...isCheckedStyle, ...styles.button}
    } else {
      if (isChecked) { isCheckedStyle = STYLES.radioChecked }
      finalStyles.button = {...STYLES.radioBase, ...isCheckedStyle, ...styles.button}
    }

    return finalStyles
  }

  onClick = (event) => {
    const { onClick } = this.props
    const { isChecked } = this.state

    this.setState({isChecked: !isChecked})
    if (onClick) { onClick(event, !isChecked) }
  }

  render() {
    const {
      aria,
      btnType,
      id,
      value,
    } = this.props

    return (
      <input
        id={id}
        type={btnType}
        onClick={this.onClick}
        style={this.state.styles.button}
        aria-label={aria.label}
        value={value}
      />
    )
  }
}

export default Radium(RadioCheckbox)
