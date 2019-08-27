type SpacingSize = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'HUGE'
type Spacing = number
type Spacings = { [Key in SpacingSize]: Spacing }

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'

export declare const spacings: Spacings

interface PaddingXRules {
  paddingLeft: Spacing
  paddingRight: Spacing
}

interface PaddingYRules {
  paddingTop: Spacing
  paddingBottom: Spacing
}

type PaddingRules = PaddingXRules & PaddingYRules

interface MarginXRules {
  marginLeft: Spacing
  marginRight: Spacing
}

interface MarginYRules {
  marginTop: Spacing
  marginBottom: Spacing
}

type MarginRules = MarginXRules & MarginYRules

type MarginRuleProperty =
  | 'MARGIN_XS'
  | 'MARGIN_SM'
  | 'MARGIN_MD'
  | 'MARGIN_LG'
  | 'MARGIN_XL'
  | 'MARGIN_HUGE'

type MarginXRuleProperty =
  | 'MARGIN_X_XS'
  | 'MARGIN_X_SM'
  | 'MARGIN_X_MD'
  | 'MARGIN_X_LG'
  | 'MARGIN_X_XL'
  | 'MARGIN_X_HUGE'

type MarginYRuleProperty =
  | 'MARGIN_Y_XS'
  | 'MARGIN_Y_SM'
  | 'MARGIN_Y_MD'
  | 'MARGIN_Y_LG'
  | 'MARGIN_Y_XL'
  | 'MARGIN_Y_HUGE'

type PaddingRuleProperty =
  | 'PADDING_XS'
  | 'PADDING_SM'
  | 'PADDING_MD'
  | 'PADDING_LG'
  | 'PADDING_XL'
  | 'PADDING_HUGE'

type PaddingXRuleProperty =
  | 'PADDING_X_XS'
  | 'PADDING_X_SM'
  | 'PADDING_X_MD'
  | 'PADDING_X_LG'
  | 'PADDING_X_XL'
  | 'PADDING_X_HUGE'

type PaddingYRuleProperty =
  | 'PADDING_Y_XS'
  | 'PADDING_Y_SM'
  | 'PADDING_Y_MD'
  | 'PADDING_Y_LG'
  | 'PADDING_Y_XL'
  | 'PADDING_Y_HUGE'

// Would be nice to build this automatically, but need this:
// https://github.com/Microsoft/TypeScript/issues/12754
type FinalSpacings = { [Key in MarginXRuleProperty]: MarginXRules } &
  { [Key in MarginYRuleProperty]: MarginYRules } &
  { [Key in MarginRuleProperty]: MarginRules } &
  { [Key in PaddingRuleProperty]: PaddingRules } &
  { [Key in PaddingXRuleProperty]: PaddingXRules } &
  { [Key in PaddingYRuleProperty]: PaddingYRules } & {
    MARGIN_TOP_XS: {
      marginTop: Spacing
    }
    MARGIN_TOP_SM: {
      marginTop: Spacing
    }
    MARGIN_TOP_MD: {
      marginTop: Spacing
    }
    MARGIN_TOP_LG: {
      marginTop: Spacing
    }
    MARGIN_TOP_XL: {
      marginTop: Spacing
    }

    MARGIN_LEFT_XS: {
      marginLeft: Spacing
    }
    MARGIN_LEFT_SM: {
      marginLeft: Spacing
    }
    MARGIN_LEFT_MD: {
      marginLeft: Spacing
    }
    MARGIN_LEFT_LG: {
      marginLeft: Spacing
    }
    MARGIN_LEFT_XL: {
      marginLeft: Spacing
    }

    MARGIN_BOTTOM_XS: {
      marginBottom: Spacing
    }
    MARGIN_BOTTOM_SM: {
      marginBottom: Spacing
    }
    MARGIN_BOTTOM_MD: {
      marginBottom: Spacing
    }
    MARGIN_BOTTOM_LG: {
      marginBottom: Spacing
    }
    MARGIN_BOTTOM_XL: {
      marginBottom: Spacing
    }

    MARGIN_RIGHT_XS: {
      marginRight: Spacing
    }
    MARGIN_RIGHT_SM: {
      marginRight: Spacing
    }
    MARGIN_RIGHT_MD: {
      marginRight: Spacing
    }
    MARGIN_RIGHT_LG: {
      marginRight: Spacing
    }
    MARGIN_RIGHT_XL: {
      marginRight: Spacing
    }

    PADDING_TOP_XS: {
      paddingTop: Spacing
    }
    PADDING_TOP_SM: {
      paddingTop: Spacing
    }
    PADDING_TOP_MD: {
      paddingTop: Spacing
    }
    PADDING_TOP_LG: {
      paddingTop: Spacing
    }
    PADDING_TOP_XL: {
      paddingTop: Spacing
    }

    PADDING_LEFT_XS: {
      paddingLeft: Spacing
    }
    PADDING_LEFT_SM: {
      paddingLeft: Spacing
    }
    PADDING_LEFT_MD: {
      paddingLeft: Spacing
    }
    PADDING_LEFT_LG: {
      paddingLeft: Spacing
    }
    PADDING_LEFT_XL: {
      paddingLeft: Spacing
    }

    PADDING_BOTTOM_XS: {
      paddingBottom: Spacing
    }
    PADDING_BOTTOM_SM: {
      paddingBottom: Spacing
    }
    PADDING_BOTTOM_MD: {
      paddingBottom: Spacing
    }
    PADDING_BOTTOM_LG: {
      paddingBottom: Spacing
    }
    PADDING_BOTTOM_XL: {
      paddingBottom: Spacing
    }

    PADDING_RIGHT_XS: {
      paddingRight: Spacing
    }
    PADDING_RIGHT_SM: {
      paddingRight: Spacing
    }
    PADDING_RIGHT_MD: {
      paddingRight: Spacing
    }
    PADDING_RIGHT_LG: {
      paddingRight: Spacing
    }
    PADDING_RIGHT_XL: {
      paddingRight: Spacing
    }

    TOP_XS: {
      top: Spacing
    }
    TOP_SM: {
      top: Spacing
    }
    TOP_MD: {
      top: Spacing
    }
    TOP_LG: {
      top: Spacing
    }
    TOP_XL: {
      top: Spacing
    }

    LEFT_XS: {
      left: Spacing
    }
    LEFT_SM: {
      left: Spacing
    }
    LEFT_MD: {
      left: Spacing
    }
    LEFT_LG: {
      left: Spacing
    }
    LEFT_XL: {
      left: Spacing
    }

    BOTTOM_XS: {
      bottom: Spacing
    }
    BOTTOM_SM: {
      bottom: Spacing
    }
    BOTTOM_MD: {
      bottom: Spacing
    }
    BOTTOM_LG: {
      bottom: Spacing
    }
    BOTTOM_XL: {
      bottom: Spacing
    }

    RIGHT_XS: {
      right: Spacing
    }
    RIGHT_SM: {
      right: Spacing
    }
    RIGHT_MD: {
      right: Spacing
    }
    RIGHT_LG: {
      right: Spacing
    }
    RIGHT_XL: {
      right: Spacing
    }
  }

declare const allSpacings: Spacings & FinalSpacings

export default allSpacings
