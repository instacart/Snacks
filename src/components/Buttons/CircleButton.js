/**
 * A simple circular button
 *
 * @author [Dominic Cocchiarella ](https://github.com/docchia)
*/
import colors       from '../../styles/colors'
import responsive   from '../../styles/responsive'
import themer       from '../../styles/themer'
import zIndex       from '../../styles/zIndex'
import { spacings } from '../../styles/spacing'

import Radium    from 'radium'
import React     from 'react'
import PropTypes from 'prop-types'

const styles = {
  default: {
    ...zIndex.Z_INDEX1,
    backgroundColor: themer.get('colors', 'primaryForeground'),
    border: '0',
    color: themer.get('colors', 'primaryBackground'),
    width: `${spacings.XL}px`,
    height: `${spacings.XL}px`,
    borderRadius: '50%',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.26), 0 1px 4px 0 rgba(0, 0, 0, 0.16)',
    transition: 'background-color 150ms ease-in-out',
    textAlign: 'center',
    lineHeight: '1',
    ':hover': {
      backgroundColor: colors.GREEN_600
    },
    ':active': {
      backgroundColor: colors.GREEN_700
    },
    ':focus': {
      backgroundColor: colors.GREEN_600,
      outline: 'none'
    },
    [responsive.xs]: {
      display: 'none'
    }
  }
}

const CircleButton = props => {
  return (
    <button
      onClick={e => {
        if (props.onClick) {
          e.preventDefault()
          props.onClick()
        }
      }}
      aria-label={props.ariaLabel}
      style={[
        styles.default,
        props.styles
      ]}
      disabled={props.disabled}
    >
      { props.children }
    </button>
  )
}

CircleButton.propTypes = {
  /** Label to be used by screen readers */
  ariaLabel: PropTypes.string,
  /** Bool to disable click/touch listeners */
  disabled: PropTypes.bool,
  /** Callback function called after button click */
  onClick: PropTypes.func,
  /** Optional style overrides */
  styles: PropTypes.object,
}

export default Radium(CircleButton)
