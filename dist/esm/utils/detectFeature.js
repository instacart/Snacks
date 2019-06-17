import memoize from './memoize';
export var supportsCSSGrid = memoize(function () {
  if (isNodeEnv() || isTestEnv()) {
    return true;
  }

  var elm = document.createElement('div');
  return elm.style['grid-template-rows'] !== undefined;
});
export var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined';
};
export var isTestEnv = function isTestEnv() {
  var userAgent = window && window.navigator && navigator.userAgent || '';
  return userAgent.match(/(Node.js|jsdom)/);
};
export default {
  isNodeEnv: isNodeEnv,
  isTestEnv: isTestEnv,
  supportsCSSGrid: supportsCSSGrid
};