import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Radium    from 'radium'

import validate  from './validate'
// import FormTextField from '.....'

const MAX_USA_LENGTH = 5
const MAX_CANADA_LENGTH = 7
const MINIMUM_CHAR_BEFORE_VALIDATE = MAX_USA_LENGTH

class PostalCodeInput extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    currentCountry: PropTypes.string,
    allowCanada: PropTypes.bool
  }

  static validate = validate

  static defaultProps = {
    allowCanada: false
  }

  validateCode = (value) => {
    const validateOption = {
      forCanada: this.props.allowCanada
    }

    return PostalCodeInput.validate(value, validateOption)
  }

  handleChange = (e, value) => {
    const maxLength = this.props.allowCanada ? MAX_CANADA_LENGTH : MAX_USA_LENGTH
    const zipCode = value.substr(0, maxLength)
    this.props.onChange && this.props.onChange(e, zipCode, this.isValid(zipCode))
  }

  validationText = () => {
    const { value, currentCountry } = this.props
    if (this.isValid(value) !== false) { return }

    return currentCountry === 'canada'
      ? 'Invalid postal code'
      : 'Invalid zip code'
  }

  isValid = (value) => {
    if (value.length < MINIMUM_CHAR_BEFORE_VALIDATE) { return }

    return this.validateCode(value)
  }

  helperText = () => {
    const { value, currentCountry } = this.props

    if (!this.isValid(value)) { return }

    const isCanada = currentCountry === 'canada'

    if ((value.length === 5 && isCanada) || (value.length > 5 && !isCanada)) {
      return 'Switching countries will redirect you'
    }
  }

  render() {
    // const { value, style, currentCountry } = this.props

    return null
    // return (
    // <FormTextField
    //   name='postal_code'
    //   style={style}
    //   value={value}
    //   helperText={this.helperText()}
    //   isValid={this.isValid(value)}
    //   validationErrorText={this.validationText()}
    //   onChange={this.handleChange}
    //   floatingLabelText={currentCountry === 'canada' ? 'Zip Code' : 'Postal Code'}
    // />
    // )
  }
}

export default Radium(PostalCodeInput)
