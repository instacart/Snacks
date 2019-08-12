import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface FloatingLabelProps extends WithThemeInjectedProps {
  children?: React.ReactNode

  /** Disabled styling for the label */
  disabled?: boolean

  /** Float the label */
  float?: boolean

  /** Show error styling */
  hasError?: boolean

  /** HTML for attribute */
  htmlFor?: string

  /** Is the input in an active state */
  isActive?: boolean

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Label text */
  text?: string
}

declare const FloatingLabel: ApplyWithTheme<React.ComponentClass<FloatingLabelProps>>

export default FloatingLabel
