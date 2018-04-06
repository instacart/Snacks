import React              from 'react'
import PropTypes          from 'prop-types'
import Radium             from 'radium'
import { colors }         from '../../styles'
import FormComponent      from './FormComponent'
import ValidationError    from './ValidationError'
import FloatingLabel      from './FloatingLabel'
import TextFieldHint      from './TextFieldHint'
import ServerError        from './ServerError'
import HelperText         from './HelperText'
import withTheme          from '../../styles/themer/withTheme'
import MaskedTextInput    from 'react-text-mask'
import { themePropTypes } from '../../styles/themer/utils'

const styles = {
  wrapper: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: '343px',
  },
  inputContainer: {
    borderRadius: '4px',
    position: 'relative'
  },
  input: {
    backgroundColor: '#FFF',
    border: `solid 1px ${colors.GRAY_74}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: colors.GRAY_20,
    fontSize: '16px',
    height: '56px',
    margin: '0',
    padding: '25px 8px 8px 8px',
    outline: 'none',
    position: 'relative',
    width: '100%',
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)'
  },
  inputDisabled: {
    border: `1px dashed ${colors.GRAY_74}`,
    backgroundColor: colors.GRAY_93,
    color: colors.GRAY_46,
    cursor: 'not-allowed'
  },
  inputError: {
    border: `1px solid ${colors.RED_700}`,
    backgroundColor: '#FDE6EB'
  },
  fullWidth: {
    width: '100%'
  },
  halfWidth: {
    width: '162px'
  }
}

const getSnackStyles = snacksTheme => {
  const { action } = snacksTheme.colors
  return {
    highlight: {
      border: `1px solid ${action}`
    }
  }
}

const getInputSyles = ({props, theme, isFocused}) => {
  const snacksStyles = getSnackStyles(theme)
  const { disabled, hasError, inputStyle } = props
  const disabledStlyes = disabled ? styles.inputDisabled : {}
  const errorStyles = !disabled && hasError ? styles.inputError : {}
  const focusedStyles = isFocused && !hasError ? snacksStyles.highlight : {}

  return {
    ...styles.input,
    ...inputStyle,
    ...disabledStlyes,
    ...errorStyles,
    ...focusedStyles
  }
}

@withTheme
@FormComponent
@Radium
class PhoneNumberField extends React.Component {
  static propTypes = {
    /** Name of the field */
    name               : PropTypes.string.isRequired,
    /** HTML autocomplete attribute */
    autoComplete       : PropTypes.string,
    /** DefaultValue for non controlled component */
    defaultValue       : PropTypes.any,
    /** Disable the text field */
    disabled           : PropTypes.bool,
    /** Text of label that will animate when TextField is focused */
    floatingLabelText  : PropTypes.string,
    /** Sets width to 100% */
    fullWidth          : PropTypes.bool,
    /** Sets width to 162px */
    halfWidth          : PropTypes.bool,
    /** FormComponent error for validation */
    hasError           : PropTypes.bool,
    /** Helper text will show up in bottom right corner below TextField */
    helperText         : PropTypes.string,
    /** Uniq id for input */
    id                 : PropTypes.string,
    /** Style for input */
    inputStyle         : PropTypes.object,
    /** Set by FormComponent by default.   */
    isValid            : PropTypes.bool,
    /** onFocus callback */
    onFocus            : PropTypes.func,
    /** onChange callback */
    onChange           : PropTypes.func,
    /** onBlur callback */
    onBlur             : PropTypes.func,
    /** onKeyDown callback */
    onKeyDown          : PropTypes.func,
    /** Mark the field as required.  */
    required           : PropTypes.bool,
    /** Error from server to show ServerError message */
    serverError        : PropTypes.string,
    /** Wrapper styles */
    style              : PropTypes.object,
    /** Text to show for validation error  */
    validationErrorText: PropTypes.string,
    /** Value will make TextField a controlled component  */
    value              : PropTypes.string,
    /** Snacks theme attributes provided by `Themer` */
    snacksTheme        : themePropTypes
  }

  static defaultProps = {
    autoComplete: 'on',
    disabled    : false,
    defaultValue: null,
    onKeyDown: () => {} // eslint-disable-line no-empty-function
  }

  state = {
    hasValue: this.props.defaultValue !== null || Boolean(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled && !this.props.disabled) {
      this.setState({ isFocused: false })
    }

    if (!this.state.hasValue && nextProps.value) {
      this.setState({hasValue: true})
    }
  }

  getValue = () => {
    if (!this.input) {
      return null
    }

    return this.input.value.replace(/\(|\)|-| /g, '')
  }

  handleInputChange = (e) => {
    const { onChange } = this.props
    const { hasValue } = this.state
    const value        = e.target.value
    // Limit setState call to only when hasValue changes
    if (value && !hasValue) {
      this.setState({hasValue: true})
    } else if (!value && hasValue) {
      this.setState({hasValue: false})
    }

    onChange && onChange(e, value.replace(/\(|\)|-| /g, ''), value)
  }

  handleInputFocus = (e) => {
    this.setState({isFocused: true})
    this.props.onFocus && this.props.onFocus(e)
  }

  handleInputBlur = (e) => {
    this.setState({isFocused: false})
    this.props.onBlur && this.props.onBlur(e)
  }

  handleKeyDown = (e) => {
    this.props.onKeyDown(e)
  }

  render() {
    const {
      floatingLabelText,
      defaultValue,
      disabled,
      fullWidth,
      halfWidth,
      hasError,
      id,
      isValid,
      name,
      required,
      serverError,
      validationErrorText,
      style,
      value,
      helperText,
      autoComplete,
      snacksTheme
    } = this.props

    const {
      hasValue,
      isFocused
    } = this.state

    const inputId = id

    return (
      <div
        style={[
          styles.wrapper,
          fullWidth && styles.fullWidth,
          halfWidth && styles.halfWidth,
          style
        ]}
      >

        {serverError && !disabled && !isValid &&
          <ServerError
            text={serverError}
          />
        }

        <div style={styles.inputContainer}>
          <FloatingLabel
            text={floatingLabelText}
            float={isFocused || hasValue}
            disabled={disabled}
            isActive={isFocused}
            hasError={hasError}
            htmlFor={inputId}
            style={{pointerEvents: 'none'}}
          />

          <TextFieldHint
            text={'(555) 555-555'}
            show={!hasValue && isFocused}
            disabled={disabled}
          />

          <MaskedTextInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            id={inputId}
            guide={false}
            name={name}
            aria-required={required}
            aria-invalid={hasError}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onKeyDown={this.handleKeyDown}
            autoComplete={autoComplete}
            placeholder=""
            defaultValue={value !== undefined ? undefined : defaultValue}
            disabled={disabled}
            keepCharPositions={true}
            render={(ref, props) => (
              <input
                ref={(input) => {
                  this.input = input
                  ref(input)}
                }
                style={getInputSyles({
                  props: this.props,
                  theme: snacksTheme,
                  isFocused
                })}
                {...props}
              />
            )}
          />
        </div>

        <ValidationError
          text={validationErrorText}
          show={!disabled && !isValid && !serverError}
          inputId={inputId}
        />

        <HelperText helperText={helperText} />
      </div>
    )
  }
}

export default PhoneNumberField

