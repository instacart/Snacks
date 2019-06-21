import * as React from 'react'
import { RadioProps } from './Radio'

export interface RadioGroupProps {
  children: React.ReactElement<RadioProps>[]
  name: string
  selectedBtn?: React.ReactElement<RadioProps>
  onChange(value: string, inputBtnProps: RadioProps): void
  wrapEl: keyof JSX.IntrinsicElements
  style: {
    wrapEl: React.CSSProperties
  }
}

declare const RadioGroup: React.ComponentClass<RadioGroupProps>

export default RadioGroup
