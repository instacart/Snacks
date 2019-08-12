import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    transition: 'visibility 0ms linear 250ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    pointerEvents: 'none',
    zIndex: 1,
    visibility: 'hidden',
  },
  show: {
    opacity: 1,
    transition: 'visibility 0ms linear 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    visibility: 'visible',
  },
  disabled: {
    cursor: 'not-allowed',
  },
}

// eslint-disable-next-line react/prefer-stateless-function
class TextFieldHint extends Component {
  static propTypes = {
    className: PropTypes.string,
    /** Hint Text */
    text: PropTypes.string.isRequired,
    /** Disabled styling */
    disabled: PropTypes.bool,
    /** Show the hint text */
    show: PropTypes.bool,
    /**
     * Optional style overrides merged into emotion css
     *
     * @deprecated
     * This prop exists for backwards compatibility and will be
     * removed in a future version
     */
    style: PropTypes.object,
    /** A uniq id */
    inputId: PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    const { className, disabled, show, style, text, inputId } = this.props

    return (
      <div
        className={className}
        id={inputId}
        css={[styles.root, style, disabled && styles.disabled, show && styles.show]}
      >
        {text}
      </div>
    )
  }
}

export default TextFieldHint
