export default (function (func) {
  var memoizedFunc = function memoizedFunc() {
    var result;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = JSON.stringify(args);

    if (memoizedFunc.cache[key] !== undefined) {
      result = memoizedFunc.cache[key];
    } else {
      result = func.apply(void 0, args);
      memoizedFunc.cache[key] = result;
    }

    return result;
  };

  memoizedFunc.cache = {};
  return memoizedFunc;
});