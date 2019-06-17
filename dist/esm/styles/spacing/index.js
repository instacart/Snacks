import _extends from "@babel/runtime/helpers/esm/extends";
// Based on the design system's base 8 spacing
// Usage:
//   import { spacing } from '../spacing/styles'
//
//   const styles = {
//     ...spacing.PADDING_MD // => { padding: 24 }
//     // Or,
//     // ...spacing.PADDING_X_MD // => { paddingLeft: 24, paddingRight: 24 }
//     // Or
//     // ...spacing.LEFT_XS // => { left: 8 }
//   }
var DIRECTIONS = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
export var spacings = {
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 48,
  HUGE: 64
};

var createXRules = function createXRules(type, value) {
  var _ref;

  return _ref = {}, _ref[type + "Left"] = value, _ref[type + "Right"] = value, _ref;
};

var createYRules = function createYRules(type, value) {
  var _ref2;

  return _ref2 = {}, _ref2[type + "Top"] = value, _ref2[type + "Bottom"] = value, _ref2;
};

var finalSpacings = {};
Object.keys(spacings).forEach(function (spacing) {
  var pxValue = spacings[spacing];
  finalSpacings["MARGIN_" + spacing] = _extends({}, createXRules('margin', pxValue), createYRules('margin', pxValue));
  finalSpacings["PADDING_" + spacing] = _extends({}, createXRules('padding', pxValue), createYRules('padding', pxValue));
  finalSpacings["PADDING_X_" + spacing] = createXRules('padding', pxValue);
  finalSpacings["PADDING_Y_" + spacing] = createYRules('padding', pxValue);
  finalSpacings["MARGIN_X_" + spacing] = createXRules('margin', pxValue);
  finalSpacings["MARGIN_Y_" + spacing] = createYRules('margin', pxValue);
  DIRECTIONS.forEach(function (direction) {
    var _finalSpacings, _finalSpacings2, _finalSpacings3;

    finalSpacings["MARGIN_" + direction + "_" + spacing] = (_finalSpacings = {}, _finalSpacings["margin" + capitalize(direction)] = pxValue, _finalSpacings);
    finalSpacings["PADDING_" + direction + "_" + spacing] = (_finalSpacings2 = {}, _finalSpacings2["padding" + capitalize(direction)] = pxValue, _finalSpacings2);
    finalSpacings[direction + "_" + spacing] = (_finalSpacings3 = {}, _finalSpacings3["" + direction.toLowerCase()] = pxValue, _finalSpacings3);
  });
});

function capitalize(s) {
  var str = s.toLowerCase();
  return str.toLowerCase()[0].toUpperCase() + str.slice(1);
}

export default _extends({}, finalSpacings, spacings);