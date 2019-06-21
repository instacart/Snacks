import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'
import { ElementAttributes } from '../..'

export interface NavigationPillProps extends WithThemeInjectedProps {
  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<'li'>

  /** Any additonal props to add to the inner a element (e.g. data attributes). */
  anchorItemAttributes: ElementAttributes<'a'>

  /** determines wether or not active styles are applied */
  isActive?: boolean

  /** Callback function called after pill click
   * @param event The react `SyntheticEvent`
   * @param props All the props passed to the component
   */
  onClick(e: React.MouseEvent<HTMLElement>, props: NavigationPillProps): void

  /** url used for href property */
  path?: string

  /** text to appear inside pill */
  text?: string
}

declare const NavigationPill: ApplyWithTheme<React.ComponentClass<NavigationPillProps>>

export default NavigationPill
