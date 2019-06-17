import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
var styles = {
  root: {
    backgroundColor: 'rgba(233, 0, 56, 0.1)',
    borderRadius: '4px',
    color: colors.RED_500,
    fontSize: '15px',
    marginBottom: '12px',
    paddingTop: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px'
  }
};

var ServerError = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ServerError, _Component);

  function ServerError() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ServerError.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        text = _this$props.text;
    return React.createElement("div", {
      style: [styles.root, style],
      "aria-live": 'assertive',
      "aria-atomic": true
    }, text);
  };

  return ServerError;
}(Component), _class2.propTypes = {
  /** Override styles */
  style: PropTypes.object,

  /** Error text */
  text: PropTypes.string
}, _temp)) || _class;

export default ServerError;