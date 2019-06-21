import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface CircleButtonProps
  extends WithThemeInjectedProps,
    Pick<React.ComponentPropsWithoutRef<'button'>, 'onClick'> {
  ariaLabel?: string
  children?: React.ReactNode

  /** Bool to disable click/touch listeners */
  disabled?: boolean
}

declare const CircleButton: ApplyWithTheme<React.FunctionComponent<CircleButtonProps>>

export default CircleButton
