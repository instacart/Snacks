import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface TextFieldHintProps {
  className?: string

  /** Hint Text */
  text: React.ReactNode

  /** Disabled styling */
  disabled?: boolean

  /** Show the hint text */
  show?: boolean

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** A uniq id */
  inputId: string
}

declare const TextFieldHint: React.ComponentClass<TextFieldHintProps>

export default TextFieldHint
