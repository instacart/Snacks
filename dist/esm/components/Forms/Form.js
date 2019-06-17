import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Form, _React$Component);

  function Form() {
    var _this;

    _this = _React$Component.call(this) || this;

    _this.handleSubmit = function (e) {
      e && e.preventDefault();

      _this.updateModel();

      if (_this.formIsValid()) {
        _this.setState({
          serverErrors: null
        }, function () {
          _this.props.onSubmit && _this.props.onSubmit(_this.model);
        });
      } else {
        _this.props.onValidationError && _this.props.onValidationError(_this.invalidComponents);
      }
    };

    _this.registerComponent = function (component) {
      _this.formComponents[component.props.name] = component;
    };

    _this.unregisterComponent = function (component) {
      delete _this.formComponents[component.props.name];
      delete _this.model[component.props.name];
    };

    _this.state = {
      serverErrors: null
    };
    _this.model = {};
    _this.formComponents = {};
    _this.invalidComponents = [];
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      ICFormable: {
        registerComponent: this.registerComponent,
        unregisterComponent: this.unregisterComponent
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.updateModel();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.serverErrors && !isEqual(this.state.serverErrors, nextProps.serverErrors)) {
      this.setState({
        serverErrors: nextProps.serverErrors
      }, function () {
        _this2.setErrorsOnFormComponents(_this2.state.serverErrors);
      });
    }
  };

  _proto.setErrorsOnFormComponents = function setErrorsOnFormComponents(serverErrors) {
    var _this3 = this;

    Object.keys(serverErrors).forEach(function (name) {
      var component = _this3.formComponents[name];
      component.setState({
        isValid: false,
        serverError: serverErrors[name]
      });
    });
  };

  _proto.formIsValid = function formIsValid() {
    var components = Object.values(this.formComponents);
    this.invalidComponents = components.filter(function (component) {
      return !component.validate();
    });
    return this.invalidComponents.length === 0;
  };

  _proto.updateModel = function updateModel() {
    var _this4 = this;

    Object.keys(this.formComponents).forEach(function (name) {
      var component = _this4.formComponents[name];

      if (component.props.disabled) {
        delete _this4.model[name];
      } else {
        _this4.model[name] = component.getValue();
      }
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        formProps = _this$props.formProps;
    return React.createElement("form", _extends({}, formProps, {
      onSubmit: this.handleSubmit
    }), children);
  };

  return Form;
}(React.Component);

Form.propTypes = {
  /** Form html chilren */
  children: PropTypes.node,

  /** HTML form attributes */
  formProps: PropTypes.shape({}),

  /** onSubmit callback will pass in model as parameter */
  onSubmit: PropTypes.func,

  /** onValidationError callback will pass in invalid FormComponents as parameter */
  onValidationError: PropTypes.func,

  /** errors from server mapped to model names. Will attach serverErrors styling to FormComppnents */
  serverErrors: PropTypes.shape({})
};
Form.childContextTypes = {
  ICFormable: PropTypes.object
};
export default Form;