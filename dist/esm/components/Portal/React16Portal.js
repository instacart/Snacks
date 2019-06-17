import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { isNodeEnv } from '../../utils/detectFeature';
var DEFAULT_CONTAINER = !isNodeEnv() ? document.body : {
  appendChild: function appendChild() {}
  /* eslint-disable-line no-empty-function */

};

var Portal =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Portal, _PureComponent);

  function Portal(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _this.setContainer(props.container);

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
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

  _proto.render = function render() {
    var children = this.props.children;
    return createPortal(children, this.containerEl);
  };

  return Portal;
}(PureComponent);

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.element
};
export default Portal;