// TODO: update with new grid widths
const IPHONE_5 = 320
const XS_MIN = 480
const SM_MIN = 768
const MD_MIN = 992
const LG_MIN = 1200

const XS_MAX = SM_MIN - 1
const SM_MAX = MD_MIN - 1
const MD_MAX = LG_MIN - 1

export default {
  iphone5: `@media (max-width: ${IPHONE_5}px)`,
  xxs: `@media (max-width: ${XS_MIN}px)`,
  xs: `@media (max-width: ${XS_MAX}px)`,
  sm: `@media (min-width: ${SM_MIN}px) (max-width: ${SM_MAX}px)`,
  md: `@media (min-width: ${MD_MIN}px) (max-width: ${MD_MAX}px)`,
  lg: `@media (min-width: ${LG_MIN}px)`,
  smMdLg: `@media (min-width: ${SM_MIN}px)`,
  mdLg: `@media (min-width: ${MD_MIN}px)`
}
