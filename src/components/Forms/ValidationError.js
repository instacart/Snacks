import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { colors } from '../../styles'

const styles = {
  root: {
    color: `${colors.RED_700}`,
    fontSize: '12px',
    marginTop: '2px',
    marginLeft: '1px',
    opacity: '0',
    display: 'none',
    pointerEvents: 'none',
    textAlign: 'left',
    transition: 'opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  show: {
    opacity: '1',
    display: 'initial',
  },
}

@Radium
class ValidationError extends Component {
  static propTypes = {
    /** A uniq id */
    inputId: PropTypes.string.isRequired,
    /** Error text */
    text: PropTypes.string,
    /** Whether to show the error or not */
    show: PropTypes.bool,
  }

  render() {
    const { inputId, show, text } = this.props

    return (
      <div
        style={[styles.root, show && styles.show]}
        aria-live={'assertive'}
        aria-atomic
        id={`error_${inputId}`}
      >
        {text}
      </div>
    )
  }
}

export default ValidationError
