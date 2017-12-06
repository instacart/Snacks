import React           from 'react'
import PropTypes       from 'prop-types'
import Radium          from 'radium'
import { colors }      from '../../styles'
import FormComponent   from '../Forms/FormComponent'
import DropdownMenu    from '../Menus/DropdownMenu'
import ValidationError from '../Forms/ValidationError'
import ServerError     from '../Forms/ServerError'
import TextFieldHint   from '../Forms/TextFieldHint'
import FloatingLabel   from '../Forms/FloatingLabel'
import Icon            from '../Icon/Icon'

/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

const styles = {
  root: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: '343px',
  },
  triggerContainer: {
    borderRadius: '4px',
    position: 'relative'
  },
  trigger: {
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
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    ':hover': {
      cursor: 'pointer'
    }
  },
  triggerDisabled: {
    border: `1px dashed ${colors.GRAY_74}`,
    backgroundColor: colors.GRAY_93,
    color: colors.GRAY_46,
    ':hover': {
      cursor: 'not-allowed'
    }
  },
  highlight: {
    border: `1px solid ${colors.GREEN_500}`
  },
  menu: {
    width: '100%'
  },
  iconContainer: {
    paddingLeft: '1px',
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    float: 'right'
  },
  icon: {
    color: colors.GREEN_500,
    transition: 'transform 100ms',
    userSelect: 'none'
  },
  iconError: {
    color: colors.RED_700
  },
  iconOpen: {
    transform: 'rotate(180deg)'
  },
  iconDisabled: {
    color: colors.GRAY_46
  },
  labelContainer: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    userSelect: 'none',
    display: 'inline-block'
  },
  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    ':hover': {
      cursor: 'pointer'
    }
  },
  error: {
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

@FormComponent
@Radium
class Select extends React.PureComponent {
  static propTypes = {
    /** Name of the field */
    name               : PropTypes.string.isRequired,
    /** Children are passed to Menu and should be MenuItems or MenuDivider */
    children           : PropTypes.node,
    /** DefaultOption */
    defaultOption       : PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    }),
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
    /** Hint text will show up when the Select is open and there is no value */
    hintText           : PropTypes.string,
    /** Uniq id for Select */
    id                 : PropTypes.string,
    /** Handled by FormComponent after running built in validations */
    isValid            : PropTypes.bool,
    /** onOpen callback */
    onOpen             : PropTypes.func,
    /** onClose callback */
    onClose            : PropTypes.func,
    /** onFocus callback */
    onFocus            : PropTypes.func,
    /** onSelect callback returns option object {label: , value:}*/
    onSelect           : PropTypes.func,
    /** onBlur callback */
    onBlur             : PropTypes.func,
    /** Mark the field as required.  */
    required           : PropTypes.bool,
    /** Control the component selection manually */
    selectedOption     : PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    }),
    /** Error from server to show ServerError message */
    serverError        : PropTypes.string,
    /** Wrapper styles, mainly used for custom width */
    style              : PropTypes.object,
    /** Text to show for validation error  */
    validationErrorText: PropTypes.string,
    /** Value will make TextField a controlled component  */
  }

  static defaultProps = {
    disabled    : false,
    defaultOption: null,
    onFocus: () => {}, // eslint-disable-line no-empty-function
    onBlur: () => {}, // eslint-disable-line no-empty-function
    onOpen: () => {}, // eslint-disable-line no-empty-function
    onClose: () => {}, // eslint-disable-line no-empty-function
    onSelect: () => {} // eslint-disable-line no-empty-function
  }

  state = {
    isOpen: false,
    selectedOption: this.props.defaultOption || this.props.selectedOption || null
  }

  componentWillReceiveProps(nextProps) {
    const { selectedOption } = nextProps
    if (typeof selectedOption !== 'undefined' && selectedOption !== this.state.selectedOption) {
      this.setState({selectedOption: selectedOption})
    }
  }

  getValue = () => {
    return (this.state.selectedOption && this.state.selectedOption.value) || null
  }

  handleClose = () => {
    this.trigger.focus()
    this.props.onClose()
  }

  handleRequestChange = (open) => {
    if (!this.props.disabled) {
      this.setState({isOpen: open})
    }
  }

  handleFocus = (e) => {
    this.setState({isFocused: true}, () => {
      this.props.onFocus(e)
    })
  }

  handleBlur = (e) => {
    this.setState({isFocused: false}, () => {
      this.props.onBlur(e)
    })
  }

  handleSelect = (option) => {
    const { onSelect, selectedOption } = this.props

    // For manual control
    if (!selectedOption) {
      this.setState({selectedOption: option}, () => {
        onSelect(option)
      })
    } else {
      onSelect(option)
    }
  }

  renderTrigger() {
    const {
      disabled,
      required,
      hasError,
      hintText,
      floatingLabelText
    } = this.props

    const { isOpen, selectedOption, isFocused } = this.state
    const hasValue = selectedOption !== null
    const showHintText = hintText && !hasValue && isOpen

    return (
      <div
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <div
          style={[
            styles.trigger,
            disabled && styles.triggerDisabled,
            (isOpen || isFocused) && !hasError && styles.highlight,
            !disabled && hasError && styles.error
          ]}
          aria-required={required}
          aria-invalid={hasError}
          tabIndex={0}
          ref={ (node) => this.trigger = node }
        >
          <FloatingLabel
            text={floatingLabelText}
            float={isOpen || hasValue}
            disabled={disabled}
            isActive={isOpen || isFocused}
            hasError={hasError}
            style={styles.floatingLabel}
          />

          <div style={styles.labelContainer}>
            { hintText &&
              <TextFieldHint
                text={hintText}
                show={showHintText}
                disabled={disabled}
                style={styles.floatingLabel}
              />
            }

            {selectedOption && selectedOption.label}
          </div>

          <div style={styles.iconContainer}>
            <Icon
              name="arrowDownSmallBold"
              style={[
                styles.icon,
                isOpen && styles.iconOpen,
                disabled && styles.iconDisabled,
                !disabled && hasError && styles.iconError
              ]}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      children,
      disabled,
      id,
      isValid,
      halfWidth,
      fullWidth,
      onOpen,
      serverError,
      style,
      validationErrorText
    } = this.props

    const { isOpen } = this.state

    return (
      <div
        style={[
          styles.root,
          fullWidth && styles.fullWidth,
          halfWidth && styles.halfWidth,
          style
        ]}
      >
        <div>
          {serverError && !disabled && !isValid &&
            <ServerError
              text={serverError}
            />
          }

          <DropdownMenu
            triggerElement={this.renderTrigger()}
            open={isOpen}
            onRequestChange={this.handleRequestChange}
            onSelect={this.handleSelect}
            menuProps={{style: styles.menu}}
            onClose={this.handleClose}
            onOpen={onOpen}
          >
            {children}
          </DropdownMenu>

          <ValidationError
            text={validationErrorText}
            show={!disabled && !isValid && !serverError}
            inputId={id}
          />
        </div>
      </div>
    )
  }
}

export default Select
