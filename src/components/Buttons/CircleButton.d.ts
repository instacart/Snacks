import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface CircleButtonProps
  extends WithThemeInjectedProps,
    Pick<React.ComponentPropsWithoutRef<'button'>, 'onClick'> {
  ariaLabel?: string
  children?: React.ReactNode

  className?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Bool to disable click/touch listeners */
  disabled?: boolean
}

declare const CircleButton: ApplyWithTheme<React.FunctionComponent<CircleButtonProps>>

export default CircleButton
