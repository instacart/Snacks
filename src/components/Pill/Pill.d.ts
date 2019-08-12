import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'
import { ElementAttributes } from '../..'
import { Theme } from '../../styles/themer/utils'

export interface PillProps extends WithThemeInjectedProps {
  /** Color of the pill. can be hex value or themer color key as string */
  color?: keyof Theme['colors'] | string

  /** The pill's text content. */
  children: React.ReactNode

  className?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Any addional props. */
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<'div'>>
}

declare const Pill: ApplyWithTheme<React.ComponentType<PillProps>>

export default Pill
