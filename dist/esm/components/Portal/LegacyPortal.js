import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { isNodeEnv } from '../../utils/detectFeature';
var DEFAULT_CONTAINER = !isNodeEnv() ? document.body : {
  appendChild: function appendChild() {}
  /* eslint-disable-line no-empty-function */

};

var Portal =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Portal, _Component);

  function Portal(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.setContainer(props.container);

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.renderPortal();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.renderPortal();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.containerEl);
    this.containerEl.parentNode.removeChild(this.containerEl);
    this.containerEl = null;
  };

  _proto.setContainer = function setContainer(nextContainer) {
    if (!nextContainer) {
      this.containerEl = document.createElement('div');
      DEFAULT_CONTAINER.appendChild(this.containerEl);
    } else {
      this.containerEl = nextContainer;
    }
  };

  _proto.renderPortal = function renderPortal() {
    var children = this.props.children;

    if (typeof this.props.children.type === 'function') {
      children = React.cloneElement(this.props.children);
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.containerEl);
  };

  _proto.render = function render() {
    return null;
  };

  return Portal;
}(Component);

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.element
};
export default Portal;