import React     from 'react'
import PropTypes from 'prop-types'
import Validator from 'validator'

const formComponent = (WrappedComponent) => {
  return class FormComponent extends React.Component {
    static propTypes = {
      /** Model name for Form */
      name           : PropTypes.string.isRequired,
      /** Disable the input; Will be removed from model in Form onSubmit callback */
      disabled       : PropTypes.bool,
      /** Uniq id for input */
      id                 : PropTypes.string,
      /** Mark input as required */
      required       : PropTypes.bool,
      /** Regex Validation pattern */
      regexValidation: PropTypes.string,
      /** Validations from validator.js */
      validations    : PropTypes.object
    }

    static contextTypes = {
      ICFormable: PropTypes.object
    }

    state = {
      isValid: true,
      serverError: null
    }

    componentWillMount() {
      const { id, name } = this.props
      // uniqueId is needed label htmlFor properties etc.
      this.uniqueId = id || `${name}-${Math.floor(Math.random() * 0xFFFF)}`.replace(/[^A-Za-z0-9-]/gi, '')

      this.context.ICFormable && this.context.ICFormable.registerComponent(this)
    }

    componentWillUnmount() {
      this.context.ICFormable && this.context.ICFormable.unregisterComponent(this)
    }

    getValue = () => {
      if (typeof this.FormComponent.getValue === 'function') {
        // If component getValue function defined on component
        return this.FormComponent.getValue()
      } else if (this.FormComponent.state && Object.prototype.hasOwnProperty.call(this.FormComponent.state, 'value')) {
        // If component uses state to store value
        return this.FormComponent.state.value
      }

      return console.error('Using FormComponent with no way to retrieve FormComponent value')
    }

    hasValue = () => {
      const value = this.getValue()
      return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0)
    }

    validate() {
      const {
        regexValidation,
        required,
        validations
      } = this.props

      const { serverError } = this.state
      const value           = this.getValue()
      let isValid           = true

      // Check if has no validations
      if (!validations && !required && !serverError && !regexValidation) {
        return isValid
      }

      // Check required validation
      if (required && !this.hasValue()) {
        isValid = false
      }

      // Check Validator.js validations
      if (isValid && value && validations) {
        Object.keys(validations).forEach( (validateMethod) => {
          const options = validations[validateMethod]
          const args    = [value].concat(options).filter( v => v ) // Remove null options

          if (!Validator[validateMethod].apply(Validator, args)) {
            isValid = false
          }
        })
      }

      // Check regex validation
      if (isValid && value && regexValidation) {
        const re = new RegExp(regexValidation)
        isValid  = re.test(value)
      }

      this.setState({isValid: isValid, serverError: null})
      return isValid
    }

    render() {
      const {
        isValid,
        serverError,
        disabled
      } = this.state

      const hasError = (!disabled && (!isValid && isValid !== undefined)) || !!serverError

      const formComponentProps = {
        isValid      : isValid,
        ref          : (node) => {this.FormComponent = node},
        serverError  : serverError,
        hasError     : hasError,
        id           : this.uniqueId,
        ...this.props
      }

      return <WrappedComponent {...formComponentProps} />
    }
  }
}

export default formComponent


