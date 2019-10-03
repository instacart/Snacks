import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../styles/themer/withTheme'

export interface RadioCheckboxBaseProps
  extends WithThemeInjectedProps,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus'> {
  children?: React.ReactNode
  renderInputButton(isSelected: boolean, style: React.CSSProperties): React.ReactNode
  id: string | number
  aria?: { label?: string }
  isDisabled?: boolean
  isSelected?: boolean
  value?: string
  wrapEl?: keyof JSX.IntrinsicElements
  width?: number
  btnType: string | number
  style?: {
    button?: React.CSSProperties
    label?: React.CSSProperties
    wrapEl?: React.CSSProperties
    inputBtn?: React.CSSProperties
    disabledLabel?: React.CSSProperties
  }
}

declare const RadioCheckboxBase: ApplyWithTheme<React.ComponentClass<RadioCheckboxBaseProps>>

export default RadioCheckboxBase
