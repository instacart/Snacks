const COLUMN_WIDTH = 104                  // 1/2 Item Card width

const SCREEN_SM_MIN = 768                 // 6 columns rounded
const SCREEN_MD_MIN = COLUMN_WIDTH * 8    // 832
const SCREEN_MDLG_MIN = COLUMN_WIDTH * 10 // 1040
const SCREEN_LG_MIN = COLUMN_WIDTH * 12   // 1248
const SCREEN_XL_MIN = COLUMN_WIDTH * 14   // 1456 (max width)

const SCREEN_XS_MAX = SCREEN_SM_MIN - 1   // 767
const SCREEN_SM_MAX = SCREEN_MD_MIN - 1   // 831
const SCREEN_MD_MAX = SCREEN_MDLG_MIN - 1 // 1039
const SCREEN_MDLG_MAX = SCREEN_LG_MIN - 1 // 1247
const SCREEN_LG_MAX = SCREEN_XL_MIN - 1   // 1455

export const breakpoints = {
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
}

const assertValidSizes = (...sizes) => {
  sizes.forEach(size => {
    if (breakpoints[size] === undefined) {
      throw new Error(`Screen size(s) ${sizes.join(', ')} not supported. Must be one of ${Object.keys(breakpoints).join(', ')}`) // eslint-disable-line
    }
  })
}

const up = (size) => {
  assertValidSizes(size)

  return `@media (min-width: ${breakpoints[size].min}px)`
}

const down = (size) => {
  if (size === 'xl') {
    throw new Error('size "xl" not supported')
  }

  assertValidSizes(size)

  return `@media (max-width: ${breakpoints[size].max}px)`
}

const only = (size) => {
  assertValidSizes(size)

  const { min, max } = breakpoints[size]

  if (!min) {
    return `@media (max-width: ${max}px)`
  }

  if (!max) {
    return `@media (min-width: ${min}px)`
  }

  return `@media (min-width: ${min}px) and (max-width: ${max}px)`
}

const between = (lowerSize, upperSize) => {
  assertValidSizes(lowerSize, upperSize)

  const lower = breakpoints[lowerSize].min
  const upper = breakpoints[upperSize].min

  return `@media (min-width: ${lower}px) and (max-width: ${upper}px)`
}

export default {
  xs: `@media (max-width: ${SCREEN_XS_MAX}px)`,
  sm: `@media (min-width: ${SCREEN_SM_MIN}px) and (max-width: ${SCREEN_SM_MAX}px)`,
  md: `@media (min-width: ${SCREEN_MD_MIN}px) and (max-width: ${SCREEN_MD_MAX}px)`,
  mdLg: `@media (min-width: ${SCREEN_MDLG_MIN}px) and (max-width: ${SCREEN_MDLG_MAX}px)`,
  lg: `@media (min-width: ${SCREEN_LG_MIN}px) and (max-width: ${SCREEN_LG_MAX}px)`,
  xl: `@media (min-width: ${SCREEN_XL_MIN}px)`,
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
  up,
  down,
  only,
  between
}
