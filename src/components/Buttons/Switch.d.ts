import * as React from 'react'
import { RadioCheckboxBaseProps } from '../../base/RadioCheckboxBase'
import { Omit } from '../..'
import { WithThemeInjectedProps } from '../../styles/themer/withTheme'

export interface SwitchProps
  extends Omit<
    RadioCheckboxBaseProps,
    keyof WithThemeInjectedProps | 'renderInputButton' | 'btnType'
  > {
  name?: string
  displayOnOffLabel?: boolean
}

declare const Switch: React.FunctionComponent<SwitchProps>

export default Switch
