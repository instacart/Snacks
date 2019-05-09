import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'
import { RadiumStyles, ElementAttributes } from '../..'
import { Theme } from '../../styles/themer/utils'

export interface PillProps extends WithThemeInjectedProps {
  /** Color of the pill. can be hex value or themer color key as string */
  color?: keyof Theme['colors'] | string

  /** The pill's text content. */
  children: React.ReactNode

  /** Optional styles. */
  style?: RadiumStyles

  /** Any addional props. */
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<'div'>>
}

declare const Pill: ApplyWithTheme<React.ComponentType<PillProps>>

export default Pill
