import tinycolor from 'tinycolor2';
import memoize from './memoize';
export var darken = memoize(function (baseColor, amount) {
  return tinycolor(baseColor).darken(amount).toHexString();
});