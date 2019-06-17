export default function omit(obj) {
  for (var _len = arguments.length, blacklistedKeys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    blacklistedKeys[_key - 1] = arguments[_key];
  }

  return Object.entries(obj).filter(function (_ref) {
    var key = _ref[0];
    return !blacklistedKeys.includes(key);
  }).reduce(function (newObj, _ref2) {
    var _Object$assign;

    var key = _ref2[0],
        val = _ref2[1];
    return Object.assign(newObj, (_Object$assign = {}, _Object$assign[key] = val, _Object$assign));
  }, {});
}