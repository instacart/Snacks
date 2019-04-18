import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { colors } from '../../styles'

const styles = {
  root: {
    color: `${colors.GRAY_74}`,
    cursor: 'inherit',
    fontSize: '16px',
    position: 'absolute',
    opacity: 0,
    transform: 'scale(1) translate(9px, 26px)',
    transformOrigin: 'left top',
    transition:
      'visibility 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    pointerEvents: 'none',
    zIndex: 1,
    visibility: 'hidden',
  },
  show: {
    opacity: 1,
    visibility: 'visible',
  },
  disabled: {
    cursor: 'not-allowed',
  },
}

@Radium
class TextFieldHint extends Component {
  static propTypes = {
    /** Hint Text */
    text: PropTypes.string.isRequired,
    /** Disabled styling */
    disabled: PropTypes.bool,
    /** Show the hint text */
    show: PropTypes.bool,
    /** Override styles */
    style: PropTypes.object,
    /** A uniq id */
    inputId: PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    const { disabled, show, style, text, inputId } = this.props

    return (
      <div
        id={inputId}
        style={[styles.root, style, disabled && styles.disabled, show && styles.show]}
      >
        {text}
      </div>
    )
  }
}

export default TextFieldHint
