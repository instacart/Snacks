var COLUMN_WIDTH = 104; // 1/2 Item Card width

var SCREEN_SM_MIN = 768; // 6 columns rounded

var SCREEN_MD_MIN = COLUMN_WIDTH * 8; // 832

var SCREEN_MDLG_MIN = COLUMN_WIDTH * 10; // 1040

var SCREEN_LG_MIN = COLUMN_WIDTH * 12; // 1248

var SCREEN_XL_MIN = COLUMN_WIDTH * 14; // 1456 (max width)

var SCREEN_XS_MAX = SCREEN_SM_MIN - 1; // 767

var SCREEN_SM_MAX = SCREEN_MD_MIN - 1; // 831

var SCREEN_MD_MAX = SCREEN_MDLG_MIN - 1; // 1039

var SCREEN_MDLG_MAX = SCREEN_LG_MIN - 1; // 1247

var SCREEN_LG_MAX = SCREEN_XL_MIN - 1; // 1455

export var breakpoints = {
  xs: {
    min: 0,
    max: SCREEN_XS_MAX
  },
  sm: {
    min: SCREEN_SM_MIN,
    max: SCREEN_SM_MAX
  },
  md: {
    min: SCREEN_MD_MIN,
    max: SCREEN_MD_MAX
  },
  mdLg: {
    min: SCREEN_MDLG_MIN,
    max: SCREEN_MDLG_MAX
  },
  lg: {
    min: SCREEN_LG_MIN,
    max: SCREEN_LG_MAX
  },
  xl: {
    min: SCREEN_XL_MIN
  }
};

var assertValidSizes = function assertValidSizes() {
  for (var _len = arguments.length, sizes = new Array(_len), _key = 0; _key < _len; _key++) {
    sizes[_key] = arguments[_key];
  }

  sizes.forEach(function (size) {
    if (breakpoints[size] === undefined) {
      throw new Error("Screen size(s) " + sizes.join(', ') + " not supported. Must be one of " + Object.keys(breakpoints).join(', ')); // eslint-disable-line
    }
  });
};

var up = function up(size) {
  assertValidSizes(size);
  return "@media (min-width: " + breakpoints[size].min + "px)";
};

var down = function down(size) {
  if (size === 'xl') {
    throw new Error('size "xl" not supported');
  }

  assertValidSizes(size);
  return "@media (max-width: " + breakpoints[size].max + "px)";
};

var only = function only(size) {
  assertValidSizes(size);
  var _breakpoints$size = breakpoints[size],
      min = _breakpoints$size.min,
      max = _breakpoints$size.max;

  if (!min) {
    return "@media (max-width: " + max + "px)";
  }

  if (!max) {
    return "@media (min-width: " + min + "px)";
  }

  return "@media (min-width: " + min + "px) and (max-width: " + max + "px)";
};

var between = function between(lowerSize, upperSize) {
  assertValidSizes(lowerSize, upperSize);
  var lower = breakpoints[lowerSize].min;
  var upper = breakpoints[upperSize].min;
  return "@media (min-width: " + lower + "px) and (max-width: " + upper + "px)";
};

export default {
  xs: "@media (max-width: " + SCREEN_XS_MAX + "px)",
  sm: "@media (min-width: " + SCREEN_SM_MIN + "px) and (max-width: " + SCREEN_SM_MAX + "px)",
  md: "@media (min-width: " + SCREEN_MD_MIN + "px) and (max-width: " + SCREEN_MD_MAX + "px)",
  mdLg: "@media (min-width: " + SCREEN_MDLG_MIN + "px) and (max-width: " + SCREEN_MDLG_MAX + "px)",
  lg: "@media (min-width: " + SCREEN_LG_MIN + "px) and (max-width: " + SCREEN_LG_MAX + "px)",
  xl: "@media (min-width: " + SCREEN_XL_MIN + "px)",
  columnWidth: COLUMN_WIDTH,
  screenWidths: {
    sm: COLUMN_WIDTH * 6,
    md: SCREEN_MD_MIN,
    mdLg: SCREEN_MDLG_MIN,
    lg: SCREEN_LG_MIN,
    xl: SCREEN_XL_MIN
  },
  // New breakpoint helpers. These do everything the existing
  // breakpoints do and are more flexible, so they should eventually
  // replace the individual size exports.
  up: up,
  down: down,
  only: only,
  between: between
};