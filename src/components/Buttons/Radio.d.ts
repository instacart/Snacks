import * as React from 'react'
import { RadioCheckboxBaseProps } from '../../base/RadioCheckboxBase'
import { WithThemeInjectedProps } from '../../styles/themer/withTheme'
import { Omit } from '../..'

export interface RadioProps
  extends Omit<
    RadioCheckboxBaseProps,
    keyof WithThemeInjectedProps | 'renderInputButton' | 'btnType'
  > {
  name?: string
}

declare const Radio: React.FunctionComponent<RadioProps>

export default Radio
