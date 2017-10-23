import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Radium               from 'radium'
import { colors }           from '../../styles'

const styles = {
  label: {
    color: `${colors.GRAY_46}`,
    cursor: 'text',
    fontSize: '16px',
    margin: '0',
    pointerEvents: 'auto',
    position: 'absolute',
    transform: 'scale(1) translate(8px, 17px)',
    transformOrigin: 'left top',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    userSelect: 'none',
    zIndex: 1,
  },
  float: {
    cursor: 'inherit',
    transform: 'scale(0.85) translate(8px, 6px)',
    pointerEvents: 'none',
  },
  active: {
    color : colors.GREEN_500
  },
  error: {
    color: colors.RED_700
  },
  disabled: {
    cursor: 'not-allowed',
    color: colors.GRAY_74
  }
}

@Radium
class FloatingLabel extends Component {
  static propTypes = {
    /** Disabled styling for the label */
    disabled : PropTypes.bool,
    /** Float the label */
    float    : PropTypes.bool,
    /** Show error styling */
    hasError : PropTypes.bool,
    /** HTML for attribute */
    htmlFor  : PropTypes.string,
    /** Is the input in an active state */
    isActive : PropTypes.bool,
    /** Override styles */
    style    : PropTypes.object,
    /** Label text */
    text     : PropTypes.string,
  }

  static defaultProps = {
    disabled: false
  }

  render() {
    const {
      float,
      disabled,
      hasError,
      htmlFor,
      isActive,
      style,
      text
    } = this.props

    const inputStyles = [
      styles.label,
      float && styles.float,
      disabled && styles.disabled,
      isActive && styles.active,
      hasError && styles.error,
      style
    ]

    return (
      <label
        htmlFor={htmlFor}
        style={inputStyles}
      >
        {text}
      </label>
    )
  }
}

export default FloatingLabel
