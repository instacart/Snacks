import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';

var formComponent = function formComponent(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(FormComponent, _React$Component);

    function FormComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        isValid: true,
        serverError: null
      };

      _this.getValue = function () {
        if (typeof _this.FormComponent.getValue === 'function') {
          // If component getValue function defined on component
          return _this.FormComponent.getValue();
        }

        if (_this.FormComponent.state && Object.prototype.hasOwnProperty.call(_this.FormComponent.state, 'value')) {
          // If component uses state to store value
          return _this.FormComponent.state.value;
        }

        return console.error('Using FormComponent with no way to retrieve FormComponent value');
      };

      _this.hasValue = function () {
        var value = _this.getValue();

        return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
      };

      return _this;
    }

    var _proto = FormComponent.prototype;

    _proto.componentWillMount = function componentWillMount() {
      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name; // uniqueId is needed label htmlFor properties etc.

      this.uniqueId = id || (name + "-" + Math.floor(Math.random() * 0xffff)).replace(/[^A-Za-z0-9-]/gi, '');
      this.context.ICFormable && this.context.ICFormable.registerComponent(this);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.context.ICFormable && this.context.ICFormable.unregisterComponent(this);
    };

    _proto.validate = function validate() {
      var _this$props2 = this.props,
          regexValidation = _this$props2.regexValidation,
          required = _this$props2.required,
          validations = _this$props2.validations;
      var serverError = this.state.serverError;
      var value = this.getValue();
      var isValid = true; // Check if has no validations

      if (!validations && !required && !serverError && !regexValidation) {
        return isValid;
      } // Check required validation


      if (required && !this.hasValue()) {
        isValid = false;
      } // Check Validator.js validations


      if (isValid && value && validations) {
        Object.keys(validations).forEach(function (validateMethod) {
          var options = validations[validateMethod];
          var args = [value].concat(options).filter(function (v) {
            return v;
          }); // Remove null options

          if (!Validator[validateMethod].apply(Validator, args)) {
            isValid = false;
          }
        });
      } // Check regex validation


      if (isValid && value && regexValidation) {
        var re = new RegExp(regexValidation);
        isValid = re.test(value);
      }

      this.setState({
        isValid: isValid,
        serverError: null
      });
      return isValid;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$state = this.state,
          isValid = _this$state.isValid,
          serverError = _this$state.serverError,
          disabled = _this$state.disabled;
      var hasError = !disabled && !isValid && isValid !== undefined || !!serverError;

      var formComponentProps = _extends({
        isValid: isValid,
        ref: function ref(node) {
          _this2.FormComponent = node;
        },
        serverError: serverError,
        hasError: hasError,
        id: this.uniqueId
      }, this.props);

      return React.createElement(WrappedComponent, formComponentProps);
    };

    return FormComponent;
  }(React.Component), _class.propTypes = {
    /** Model name for Form */
    name: PropTypes.string.isRequired,

    /** Disable the input; Will be removed from model in Form onSubmit callback */
    disabled: PropTypes.bool,

    /** Uniq id for input */
    id: PropTypes.string,

    /** Mark input as required */
    required: PropTypes.bool,

    /** Regex Validation pattern */
    regexValidation: PropTypes.string,

    /** Validations from validator.js */
    validations: PropTypes.object
  }, _class.contextTypes = {
    ICFormable: PropTypes.object
  }, _temp;
};

export default formComponent;