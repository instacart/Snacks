import * as React from 'react'
import { RadioProps } from './Radio'

export interface RadioGroupProps {
  className?: string
  children: React.ReactElement<RadioProps>[]
  name: string
  selectedBtn?: React.ReactElement<RadioProps>
  onChange(value: string, inputBtnProps: RadioProps): void
  wrapEl: keyof JSX.IntrinsicElements

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: {
    wrapEl: React.CSSProperties
  }
}

declare const RadioGroup: React.ComponentClass<RadioGroupProps>

export default RadioGroup
