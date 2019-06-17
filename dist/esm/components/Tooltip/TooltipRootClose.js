import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { isNodeEnv } from '../../utils/detectFeature';

var TooltipRootClose =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TooltipRootClose, _PureComponent);

  function TooltipRootClose() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.handleMouseClick = function (e) {
      var onRootClose = _this.props.onRootClose;
      var target = e.target;
      var tooltip = findDOMNode(_assertThisInitialized(_this));

      if (!tooltip.contains(target)) {
        onRootClose && onRootClose();
      }
    };

    _this.handleKeyUp = function (e) {
      var onRootClose = _this.props.onRootClose;

      if (e.keyCode === 27 && onRootClose) {
        onRootClose && onRootClose();
      }
    };

    _this.handleResize = function () {
      var onRootClose = _this.props.onRootClose;
      onRootClose && onRootClose();
    };

    return _this;
  }

  var _proto = TooltipRootClose.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var rootCloseEnabled = this.props.rootCloseEnabled;

    if (rootCloseEnabled) {
      this.addEventListeners();
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var rootCloseEnabled = this.props.rootCloseEnabled;

    if (!rootCloseEnabled && nextProps.rootCloseEnabled) {
      this.addEventListeners();
    } else if (rootCloseEnabled && !nextProps.rootCloseEnabled) {
      this.removeEventListeners();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var rootCloseEnabled = this.props.rootCloseEnabled;

    if (rootCloseEnabled) {
      this.removeEventListeners();
    }
  };

  _proto.addEventListeners = function addEventListeners() {
    if (isNodeEnv()) {
      return;
    }

    document.addEventListener('click', this.handleMouseClick);
    document.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('resize', this.handleResize);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    if (isNodeEnv()) {
      return;
    }

    document.removeEventListener('click', this.handleMouseClick);
    document.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('resize', this.handleResize);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children;
  };

  return TooltipRootClose;
}(PureComponent);

TooltipRootClose.propTypes = {
  children: PropTypes.node.isRequired,
  onRootClose: PropTypes.func.isRequired,
  rootCloseEnabled: PropTypes.bool
};
TooltipRootClose.defaultProps = {
  rootCloseEnabled: true
};
export default TooltipRootClose;