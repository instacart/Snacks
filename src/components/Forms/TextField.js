import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { colors } from '../../styles'
import FormComponent from './FormComponent'
import ValidationError from './ValidationError'
import FloatingLabel from './FloatingLabel'
import TextFieldHint from './TextFieldHint'
import ServerError from './ServerError'
import HelperText from './HelperText'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'
import spacing from '../../styles/spacing'

const styles = {
  wrapper: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: '343px',
  },
  inputContainer: {
    borderRadius: '4px',
    position: 'relative',
  },
  input: {
    backgroundColor: '#FFF',
    border: `solid 1px ${colors.GRAY_74}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: colors.GRAY_20,
    fontSize: '16px',
    height: '56px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: '25px',
    ...spacing.PADDING_X_XS,
    paddingBottom: spacing.XS,
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
    width: '162px',
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

@withTheme
@FormComponent
@Radium
class TextField extends React.Component {
  static propTypes = {
    /** Name of the field */
    name: PropTypes.string.isRequired,
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
    /** Hint text will show up when input is focused and there is no value */
    hintText: PropTypes.string,
    /** Uniq id for input */
    id: PropTypes.string,
    /** Style for input */
    inputStyle: PropTypes.object,
    /** Set by FormComponent by default.   */
    isValid: PropTypes.bool,
    /** onFocus callback */
    onFocus: PropTypes.func,
    /** onChange callback */
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
    /** Input type ie. 'text', 'email', password, etc..  */
    type: PropTypes.string,
    /** Text to show for validation error  */
    validationErrorText: PropTypes.string,
    /** Value will make TextField a controlled component  */
    value: PropTypes.string,
    /** Snacks theme attributes provided by `Themer` */
    snacksTheme: themePropTypes,
  }

  static defaultProps = {
    autoComplete: 'on',
    disabled: false,
    type: 'text',
    defaultValue: null,
    onKeyDown: () => {}, // eslint-disable-line no-empty-function
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

    return this.input.value
  }

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

    onChange && onChange(e, value)
  }

  handleInputFocus = e => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus(e)
  }

  handleInputBlur = e => {
    this.setState({ isFocused: false })
    this.props.onBlur && this.props.onBlur(e)
  }

  handleKeyDown = e => {
    this.props.onKeyDown(e)
  }

  triggerFocus = () => this.input.focus()

  render() {
    const {
      floatingLabelText,
      defaultValue,
      disabled,
      fullWidth,
      halfWidth,
      hasError,
      hintText,
      id,
      inputStyle,
      isValid,
      name,
      required,
      serverError,
      type,
      validationErrorText,
      style,
      value,
      helperText,
      autoComplete,
      snacksTheme,
    } = this.props

    const { hasValue, isFocused } = this.state

    const snacksStyles = getSnackStyles(snacksTheme)

    const inputId = id
    const showHintText = hintText && !hasValue && isFocused
    let describedByIds = ''
    if (hasError) {
      describedByIds += `error_${inputId}`
    }
    if (hintText) {
      describedByIds += ` hint_${inputId}`
    }

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
            snacksTheme={snacksTheme}
          />

          {hintText && (
            <TextFieldHint
              inputId={`hint_${inputId}`}
              text={hintText}
              show={showHintText}
              disabled={disabled}
            />
          )}

          <input
            value={value}
            id={inputId}
            ref={node => {
              this.input = node
            }}
            defaultValue={value !== undefined ? undefined : defaultValue}
            disabled={disabled}
            name={name}
            type={type}
            aria-required={required}
            aria-invalid={hasError}
            aria-describedby={describedByIds ? describedByIds.trim() : null}
            style={[
              styles.input,
              inputStyle,
              disabled && styles.inputDisabled,
              !disabled && hasError && styles.inputError,
              isFocused && !hasError && snacksStyles.highlight,
            ]}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onKeyDown={this.handleKeyDown}
            autoComplete={autoComplete}
            placeholder=""
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

export default TextField
