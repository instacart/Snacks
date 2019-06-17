import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Icon from '../Icon/Icon';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import { spacing, colors } from '../../styles';
import { darken } from '../../utils';

var noop = function noop() {}; // eslint-disable-line no-empty-function


var baseStyles = {
  touchAction: 'manipulation',
  cursor: 'pointer',
  border: '1px solid transparent',
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderTopLeftRadius: 4,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  WebkitFontSmoothing: 'antialiased',
  // Reset unusual Firefox-on-Android default style;
  // see https://github.com/necolas/normalize.css/issues/214
  backgroundImage: 'none',
  // Takes care of the heavier default font-weights in firefox
  MozOsxFontSmoothing: 'grayscale',
  // Ensures any icons stay vertically centered
  display: 'inline-flex',
  alignItems: 'center'
};
var sizeStyles = {
  tiny: _extends({}, spacing.PADDING_X_XS, {
    height: '24px',
    fontSize: '11px',
    textTransform: 'uppercase'
  }),
  small: _extends({}, spacing.PADDING_X_XS, {
    fontSize: '14px',
    height: '32px'
  }),
  standard: _extends({}, spacing.PADDING_X_SM, {
    fontSize: '16px',
    height: '40px'
  }),
  large: _extends({}, spacing.PADDING_X_MD, {
    fontSize: '18px',
    height: '48px'
  })
};
var linkStyles = {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box'
};

var getSnacksStyles = function getSnacksStyles(props) {
  var _props$snacksTheme$co = props.snacksTheme.colors,
      action = _props$snacksTheme$co.action,
      actionHover = _props$snacksTheme$co.actionHover,
      primaryBackground = _props$snacksTheme$co.primaryBackground;
  var actionActive = darken(actionHover, 3);
  var disabled = {
    backgroundColor: colors.GRAY_74,
    color: colors.WHITE,
    cursor: 'not-allowed'
  };
  var activeAndFocus = {
    primary: {
      base: {
        backgroundColor: actionActive
      },
      inverted: {
        backgroundColor: primaryBackground,
        opacity: '0.8'
      }
    },
    secondary: {
      base: {
        color: actionActive,
        border: "1px solid " + actionActive
      },
      inverted: {
        color: primaryBackground,
        border: "1px solid " + primaryBackground,
        opacity: '0.8'
      }
    },
    flat: {
      color: actionActive
    },
    coupon: {
      border: "1px dashed " + colors.RED_700,
      color: colors.RED_700
    }
  };
  return {
    primary: {
      base: {
        backgroundColor: action,
        color: primaryBackground,
        ':hover': {
          backgroundColor: actionHover
        },
        ':active': activeAndFocus.primary.base,
        ':focus': activeAndFocus.primary.base
      },
      inverted: {
        backgroundColor: primaryBackground,
        border: "1px solid " + action,
        color: action,
        ':hover': {
          backgroundColor: primaryBackground,
          opacity: '0.9'
        },
        ':active': activeAndFocus.primary.inverted,
        ':focus': activeAndFocus.primary.inverted
      },
      disabled: disabled
    },
    secondary: {
      base: {
        backgroundColor: 'transparent',
        color: action,
        border: "1px solid " + action,
        ':hover': {
          color: actionHover,
          border: "1px solid " + actionHover
        },
        ':active': activeAndFocus.secondary.base,
        ':focus': activeAndFocus.secondary.base
      },
      inverted: {
        color: primaryBackground,
        border: "1px solid " + primaryBackground,
        ':hover': {
          color: primaryBackground,
          border: "1px solid " + primaryBackground,
          opacity: '0.9'
        },
        ':active': activeAndFocus.secondary.inverted,
        ':focus': activeAndFocus.secondary.inverted
      },
      disabled: disabled
    },
    flat: {
      base: {
        backgroundColor: 'transparent',
        color: action,
        ':hover': {
          color: actionHover
        },
        ':active': activeAndFocus.flat,
        ':focus': activeAndFocus.flat
      },
      disabled: {
        backgroundColor: 'transparent',
        color: colors.GRAY_74,
        cursor: 'not-allowed'
      }
    },
    coupon: {
      base: {
        backgroundColor: colors.WHITE,
        color: colors.RED_500,
        border: "1px dashed " + colors.RED_500,
        ':hover': {
          border: "1px dashed " + colors.RED_600,
          color: colors.RED_600
        },
        ':active': activeAndFocus.coupon,
        ':focus': activeAndFocus.coupon
      },
      disabled: disabled
    }
  };
};

var Button = function Button(props) {
  var snacksStyles = getSnacksStyles(props);
  var ElementType = props.href ? 'a' : 'button';

  var finalProps = _extends({
    disabled: props.disabled,
    tabIndex: props.tabIndex,
    type: props.type,
    style: [baseStyles, sizeStyles[props.size], snacksStyles[props.snacksStyle][props.disabled ? 'disabled' : 'base'], props.inverted && snacksStyles[props.snacksStyle].inverted, ElementType === 'a' && linkStyles, props.style],
    onClick: function onClick(e) {
      if (props.disabled) {
        e.preventDefault();
        return;
      }

      props.onClick(e, props);
    },
    onMouseDown: function onMouseDown(e) {
      if (props.disabled) {
        e.preventDefault();
        return;
      }

      props.onMouseDown(e, props);
    }
  }, props.elementAttributes);

  if (props.href) {
    finalProps.href = props.href;
  }

  var icon = typeof props.icon === 'string' ? React.createElement(Icon, {
    name: props.icon
  }) : props.icon;

  if (icon && props.iconPosition === 'left') {
    return React.createElement(ElementType, finalProps, icon, React.createElement("span", {
      style: _extends({}, spacing.MARGIN_RIGHT_XS)
    }), props.children);
  }

  if (icon && props.iconPosition === 'right') {
    return React.createElement(ElementType, finalProps, props.children, React.createElement("span", {
      style: _extends({}, spacing.MARGIN_LEFT_XS)
    }), icon);
  }

  return React.createElement(ElementType, finalProps, props.children);
};

Button.propTypes = {
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),

  /** Snacks button variants. */
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'flat', 'coupon']),

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

  /** Callback that fires on mouse down. */
  onMouseDown: PropTypes.func,

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
};
Button.defaultProps = {
  size: 'standard',
  snacksStyle: 'primary',
  disabled: false,
  type: 'button',
  iconPosition: 'left',
  onClick: noop,
  onMouseDown: noop,
  inverted: false,
  elementAttributes: {}
};
export default withTheme(Radium(Button));