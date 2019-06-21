import * as React from 'react'
import { RadioCheckboxBaseProps } from '../../base/RadioCheckboxBase'
import { WithThemeInjectedProps } from '../../styles/themer/withTheme'
import { Omit } from '../..'

export interface CheckboxProps
  extends Omit<
    RadioCheckboxBaseProps,
    keyof WithThemeInjectedProps | 'renderInputButton' | 'btnType'
  > {
  name?: string
}

declare const Checkbox: React.FunctionComponent<CheckboxProps>

export default Checkbox
