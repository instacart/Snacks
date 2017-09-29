import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Icon from '../Icon/Icon'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'
import { spacing, colors } from '../../styles'

const noop = () => {} // eslint-disable-line no-empty-function

const baseStyles = {
  touchAction: 'manipulation',
  cursor: 'pointer',
  backgroundImage: 'none', // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  border: '1px solid transparent',
  borderRadius: '4px',
  fontWeight: 600,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale', // Takes care of the heavier default font-weights in firefox

  ':focus': {
    outline: 'none'
  }
}

const sizeStyles = {
  tiny: {
    ...spacing.PADDING_X_XS,
    height: '24px',
    fontSize: '11px',
    textTransform: 'uppercase'
  },

  small: {
    ...spacing.PADDING_X_XS,
    fontSize: '14px',
    height: '32px'
  },

  standard: {
    ...spacing.PADDING_X_SM,
    fontSize: '16px',
    height: '40px'
  },

  large: {
    ...spacing.PADDING_X_MD,
    fontSize: '18px',
    height: '48px'
  }
}

const linkStyles = {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box'
}

const getSnacksStyles = props => {
  const { action, actionHover, primaryBackground } = props.snacksTheme.colors

  return {
    primary: {
      base: {
        backgroundColor: action,
        color: primaryBackground,

        ':hover': {
          backgroundColor: actionHover
        },
        ':active': {
          backgroundColor: actionHover
        }
      },

      inverted: {
        backgroundColor: primaryBackground,
        border: `1px solid ${action}`,
        color: action,

        ':hover': {
          opacity: '0.9'
        },
        ':active': {
          opacity: '0.8'
        }
      }
    },

    secondary: {
      base: {
        backgroundColor: 'transparent',
        color: action,
        border: `1px solid ${action}`,

        ':hover': {
          color: actionHover,
          border: `1px solid ${actionHover}`
        },
        ':active': {
          color: actionHover,
          border: `1px solid ${actionHover}`
        }
      },

      inverted: {
        color: primaryBackground,
        border: `1px solid ${primaryBackground}`,

        ':hover': {
          opacity: '0.9'
        },
        ':active': {
          opacity: '0.8'
        }
      }
    },

    coupon: {
      base: {
        backgroundColor: colors.WHITE,
        color: colors.RED_500,
        border: `1px dashed ${colors.GRAY_88}`,

        ':hover': {
          border: `1px dashed ${colors.RED_600}`,
          color: colors.RED_600
        },
        ':active': {
          border: `1px dashed ${colors.RED_700}`,
          color: colors.RED_700
        }
      }
    },

    disabled: {
      base: {
        backgroundColor: colors.GRAY_74,
        color: colors.WHITE,
        cursor: 'not-allowed'
      }
    }
  }
}

const Button = props => {
  // Disabled styles override all other snacks-specific button styles
  const snacksStyle = props.disabled ? 'disabled' : props.snacksStyle
  const snacksStyles = getSnacksStyles(props)

  const ElementType = props.href ? 'a' : 'button'

  const finalProps = {
    disabled: props.disabled,
    tabIndex: props.tabIndex,
    type: props.type,
    style: [
      baseStyles,
      sizeStyles[props.size],
      snacksStyles[snacksStyle].base,
      props.inverted && snacksStyles[snacksStyle].inverted,
      ElementType === 'a' && linkStyles,
      props.style
    ],
    onClick: e => {
      if (props.disabled) {
        e.preventDefault()
        return
      }

      props.onClick(e, props)
    },
    ...props.elementAttributes
  }
  if (props.href) {
    finalProps.href = props.href
  }

  let icon = props.icon
  if (typeof props.icon === 'string') {
    icon = <Icon name={props.icon} />
  }

  if (icon && props.iconPosition === 'left') {
    return (
      <ElementType {...finalProps}>
        {icon}
        <span style={{ ...spacing.MARGIN_RIGHT_XS }} />
        {props.children}
      </ElementType>
    )
  }

  if (icon && props.iconPosition === 'right') {
    return (
      <ElementType {...finalProps}>
        {props.children}
        <span style={{ ...spacing.MARGIN_LEFT_XS }} />
        {icon}
      </ElementType>
    )
  }

  return <ElementType {...finalProps}>{props.children}</ElementType>
}

Button.propTypes = {
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),

  /** Snacks button variants. */
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'coupon']),

  /** Optional style overrides. */
  style: PropTypes.object,

  /** Whether or not the button is disabled. */
  disabled: PropTypes.bool,

  /** Sets the HTML type attribute on the element. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
    An optional icon. Can be a an icon name
    or a Snacks `Icon` component.
  */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Where the icon is positioned relative to primary text content. */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Callback that fires when the button is clicked. */
  onClick: PropTypes.func,

  /** Reverses colors. Use for rendering buttons on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Sets the HTML `tabindex` attribute. */
  tabIndex: PropTypes.number,

  /**
    If href is provided, `Button` will render as an anchor
    tag with the supplied href value.
  */
  href: PropTypes.string,

  /** Text content for the button. */
  children: PropTypes.node,

  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes: PropTypes.object,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
}

Button.defaultProps = {
  size: 'standard',
  snacksStyle: 'primary',
  disabled: false,
  type: 'button',
  iconPosition: 'left',
  onClick: noop,
  inverted: false,
  elementAttributes: {}
}

export default withTheme(Radium(Button))
