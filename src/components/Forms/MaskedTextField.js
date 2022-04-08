import React from 'react'
import PropTypes from 'prop-types'
import Radium from '@instacart/radium'
import MaskedTextInput from 'react-text-mask'
import { colors } from '../../styles'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'
import FormComponent from './FormComponent'
import ValidationError from './ValidationError'
import FloatingLabel from './FloatingLabel'
import TextFieldHint from './TextFieldHint'
import ServerError from './ServerError'
import HelperText from './HelperText'
import spacing from '../../styles/spacing'

const NoOp = () => {} // eslint-disable-line no-empty-function

const styles = {
  wrapper: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: 343,
  },
  inputContainer: {
    borderRadius: 4,
    position: 'relative',
  },
  input: {
    backgroundColor: colors.WHITE,
    border: `solid 1px ${colors.GRAY_74}`,
    borderRadius: 4,
    boxSizing: 'border-box',
    color: colors.GRAY_20,
    fontSize: 16,
    height: 56,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: '25px',
    paddingRight: spacing.XS,
    paddingBottom: spacing.XS,
    paddingLeft: spacing.XS,
    outline: 'none',
    position: 'relative',
    width: '100%',
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  },
  inputDisabled: {
    border: `1px dashed ${colors.GRAY_74}`,
    backgroundColor: colors.GRAY_93,
    color: colors.GRAY_46,
    cursor: 'not-allowed',
  },
  inputError: {
    border: `1px solid ${colors.RED_700}`,
    backgroundColor: '#FDE6EB',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: 162,
  },
}

const getSnackStyles = snacksTheme => {
  const { action } = snacksTheme.colors
  return {
    highlight: {
      border: `1px solid ${action}`,
    },
  }
}

const getInputSyles = ({ props, theme, isFocused }) => {
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
    ...focusedStyles,
  }
}

export const maskedTextFieldPropTypes = {
  /** Name of the field */
  name: PropTypes.string.isRequired,
  /** Transforms the raw value from the input
   *
   * @example strips slashes from a phone number
   *   (value) => value.replace(NON_DIGIT_REGEX, '')
   * @param {string} value
   * @returns {string}
   */
  getValue: PropTypes.func.isRequired,
  /** The mask */
  mask: PropTypes.array.isRequired,
  /** The pipe mask */
  pipe: PropTypes.func,
  /** The mask hint */
  maskHint: PropTypes.string.isRequired,
  /** The type of the input */
  type: PropTypes.string.isRequired,
  /** HTML autocomplete attribute */
  autoComplete: PropTypes.string,
  /** DefaultValue for non controlled component */
  defaultValue: PropTypes.any,
  /** Disable the text field */
  disabled: PropTypes.bool,
  /** Text of label that will animate when TextField is focused */
  floatingLabelText: PropTypes.string,
  /** Sets width to 100% */
  fullWidth: PropTypes.bool,
  /** Sets width to 162px */
  halfWidth: PropTypes.bool,
  /** FormComponent error for validation */
  hasError: PropTypes.bool,
  /** Helper text will show up in bottom right corner below TextField */
  helperText: PropTypes.string,
  /** Uniq id for input */
  id: PropTypes.string,
  /** Style for input */
  inputStyle: PropTypes.object,
  /** Set by FormComponent by default.   */
  isValid: PropTypes.bool,
  /** onFocus callback */
  onFocus: PropTypes.func,
  /** onChange callback
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {String} value The value from the input with `(`, `)`, space, and `-` characters removed
   * @param {String} rawValue The raw value from the input
   */

  onChange: PropTypes.func,
  /** onBlur callback */
  onBlur: PropTypes.func,
  /** onKeyDown callback */
  onKeyDown: PropTypes.func,
  /** Mark the field as required.  */
  required: PropTypes.bool,
  /** Error from server to show ServerError message */
  serverError: PropTypes.string,
  /** Wrapper styles */
  style: PropTypes.object,
  /** Text to show for validation error  */
  validationErrorText: PropTypes.string,
  /** Value will make TextField a controlled component  */
  value: PropTypes.string,
  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes,
}

@withTheme({ forwardRef: true })
@FormComponent
@Radium
class MaskedTextField extends React.Component {
  static propTypes = maskedTextFieldPropTypes

  static defaultProps = {
    autoComplete: 'on',
    disabled: false,
    defaultValue: null,
    onChange: NoOp,
    onKeyDown: NoOp,
    onFocus: NoOp,
    onBlur: NoOp,
  }

  state = {
    hasValue: this.props.defaultValue !== null || Boolean(this.props.value),
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled && !this.props.disabled) {
      this.setState({ isFocused: false })
    }

    if (!this.state.hasValue && nextProps.value) {
      this.setState({ hasValue: true })
    }
  }

  getValue = () => {
    if (!this.input) {
      return null
    }

    return this.props.getValue(this.input.value)
  }

  triggerFocus = () => this.input.focus()

  handleInputChange = e => {
    const { onChange } = this.props
    const { hasValue } = this.state
    const { value } = e.target
    // Limit setState call to only when hasValue changes
    if (value && !hasValue) {
      this.setState({ hasValue: true })
    } else if (!value && hasValue) {
      this.setState({ hasValue: false })
    }

    onChange(e, this.props.getValue(value), value)
  }

  handleInputFocus = e => {
    this.setState({ isFocused: true })
    this.props.onFocus(e)
  }

  handleInputBlur = e => {
    this.setState({ isFocused: false })
    this.props.onBlur(e)
  }

  handleKeyDown = e => {
    this.props.onKeyDown(e)
  }

  render() {
    const {
      mask,
      pipe,
      maskHint,
      floatingLabelText,
      defaultValue,
      disabled,
      fullWidth,
      halfWidth,
      hasError,
      id: inputId,
      isValid,
      name,
      required,
      serverError,
      validationErrorText,
      style,
      value,
      helperText,
      autoComplete,
      snacksTheme,
    } = this.props

    const { hasValue, isFocused } = this.state

    return (
      <div
        style={[
          styles.wrapper,
          fullWidth && styles.fullWidth,
          halfWidth && styles.halfWidth,
          style,
        ]}
      >
        {serverError && !disabled && !isValid && <ServerError text={serverError} />}

        <div style={styles.inputContainer}>
          <FloatingLabel
            text={floatingLabelText}
            float={isFocused || hasValue}
            disabled={disabled}
            isActive={isFocused}
            hasError={hasError}
            htmlFor={inputId}
            style={{ pointerEvents: 'none' }}
            snacksTheme={snacksTheme}
          />

          <TextFieldHint
            inputId={`hint_${inputId}`}
            text={maskHint}
            show={!hasValue && isFocused}
            disabled={disabled}
          />

          <MaskedTextInput
            mask={mask}
            pipe={pipe}
            id={inputId}
            guide={false}
            name={name}
            aria-required={required}
            aria-invalid={hasError}
            aria-describedby={`hint_${inputId} error_${inputId}`}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onKeyDown={this.handleKeyDown}
            autoComplete={autoComplete}
            placeholder=""
            defaultValue={value !== undefined ? undefined : defaultValue}
            disabled={disabled}
            keepCharPositions
            type={this.props.type}
            render={(ref, props) => (
              <input
                ref={input => {
                  this.input = input
                  ref(input)
                }}
                style={getInputSyles({
                  props: this.props,
                  theme: snacksTheme,
                  isFocused,
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

export default MaskedTextField
