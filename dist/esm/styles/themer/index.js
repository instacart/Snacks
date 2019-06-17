import _createClass from "@babel/runtime/helpers/esm/createClass";

/* eslint-disable no-underscore-dangle */
import { cleanConfig, defaultTheme, themeTemplate, validConfigValue } from './utils';

var Themer =
/*#__PURE__*/
function () {
  function Themer() {
    this._themeConfig = defaultTheme;
    this._onChangeListeners = [];
  }

  var _proto = Themer.prototype;

  _proto._callListeners = function _callListeners() {
    var _this = this;

    this._onChangeListeners.forEach(function (listener) {
      listener(_this._themeConfig);
    });
  };

  _proto.get = function get(section, sectionKey) {
    if (!this._themeConfig) {
      console.warn('Snacks theme error: No themeConfig defined. Please use Themer template: ', themeTemplate);
    } else if (validConfigValue(section, sectionKey)) {
      return this._themeConfig[section][sectionKey];
    }
  };

  _proto.set = function set(section, sectionKey, themeValue) {
    if (validConfigValue(section, sectionKey)) {
      this._themeConfig[section][sectionKey] = themeValue;

      this._callListeners();
    }
  };

  _proto.subscribe = function subscribe(listener) {
    var _this2 = this;

    this._onChangeListeners.push(listener);

    var unsubscribe = function unsubscribe() {
      var index = _this2._onChangeListeners.indexOf(listener);

      if (index === -1) {
        return;
      }

      _this2._onChangeListeners.splice(index, 1);
    };

    return unsubscribe;
  };

  _createClass(Themer, [{
    key: "themeConfig",
    get: function get() {
      return this._themeConfig;
    },
    set: function set(themeConfig) {
      this._themeConfig = cleanConfig(themeConfig);

      this._callListeners();
    }
  }]);

  return Themer;
}();

export default new Themer();