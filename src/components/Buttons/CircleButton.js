/**
 * A simple circular button
 *
 * @author [Dominic Cocchiarella ](https://github.com/docchia)
 */
import React from 'react'
import PropTypes from 'prop-types'
import responsive from '../../styles/responsive'
import zIndex from '../../styles/zIndex'
import { spacings } from '../../styles/spacing'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'

const styles = {
  default: {
    ...zIndex.Z_INDEX1,
    border: '0',
    width: `${spacings.XL}px`,
    height: `${spacings.XL}px`,
    borderRadius: '50%',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.26), 0 1px 4px 0 rgba(0, 0, 0, 0.16)',
    transition: 'background-color 150ms ease-in-out',
    textAlign: 'center',
    lineHeight: '1',
    [responsive.xs]: {
      display: 'none',
    },
  },
}

const CircleButton = props => {
  const { action, actionHover, primaryBackground } = props.snacksTheme.colors

  return (
    <button
      className={props.className}
      onClick={e => {
        if (props.onClick) {
          e.preventDefault()
          props.onClick()
        }
      }}
      aria-label={props.ariaLabel}
      css={[
        styles.default,
        {
          backgroundColor: action,
          color: primaryBackground,
          ':hover': {
            backgroundColor: actionHover,
          },
          ':active': {
            backgroundColor: actionHover,
          },
          ':focus': {
            backgroundColor: actionHover,
          },
        },
        props.style,
      ]}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

CircleButton.propTypes = {
  /** Label to be used by screen readers */
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  /** Bool to disable click/touch listeners */
  disabled: PropTypes.bool,
  /** Callback function called after button click */
  onClick: PropTypes.func,
  /** snacks theme attributes */
  snacksTheme: themePropTypes,
  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default withTheme(CircleButton)
