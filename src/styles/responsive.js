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

// TODO: exporting just for test (so far at least), smell?
export const sizes = {
  xs: {
    // TODO: no min, hmmm
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
    // TODO: no max, hmmm
  }
}

// all sizes: xs, sm, md, mdLg, lg, xl
// TODO: better error messages
const up = (size) => {
  if (size === 'xs') {
    throw new Error('size "xs" not supported')
  }

  return `@media (min-width: ${sizes[size].min}px)`
}

const down = (size) => {
  if (size === 'xl') {
    throw new Error('size "xl" not supported')
  }

  return `@media (max-width: ${sizes[size].max}px)`
}

const only = (size) => {
  const { min, max } = sizes[size]

  if (!min) {
    return `@media (max-width: ${max}px)`
  }

  if (!max) {
    return `@media (min-width: ${min}px)`
  }

  return `@media (min-width: ${min}px) and (max-width: ${max}px)`
}

const between = (lower, upper) => {
  const min = sizes[lower].min
  const max = sizes[upper].max
  return `@media (min-width: ${min}px) and (max-width: ${max}px)`
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

  // Helpers
  up,
  down,
  only,
  between
}
