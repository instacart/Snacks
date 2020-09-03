import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'
import { ElementAttributes } from '../..'
import { NavigationPillProps } from './NavigationPill'

interface Pill
  extends Pick<NavigationPillProps, 'text' | 'elementAttributes' | 'anchorItemAttributes'> {}

export interface NavigationPillsProps extends WithThemeInjectedProps {
  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<'div'>

  /** Any additonal props to add to the inner ul element (e.g. data attributes). */
  listItemAttributes: ElementAttributes<'ul'>

  /** array of pill objects */
  pills: Pill[]

  /**
   * Callback function called after pill click
   * @param e The react `SyntheticEvent`
   * @param props All the props passed to the component
   */
  onClick(e: React.MouseEvent<HTMLElement>, props: Pill): void

  /** optional label placed in front of pills */
  label?: string

  /** string matching the text of one of the pills. Determines which pill is active, if any */
  activePill?: string

  /** optional string for overriding the tag name of the label which appears in front of pills */
  labelElementType?: keyof JSX.IntrinsicElements
}

declare const NavigationPills: ApplyWithTheme<React.ComponentClass<NavigationPillsProps>>

export default NavigationPills
