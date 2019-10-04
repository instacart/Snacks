import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../../styles/themer/withTheme'
import { RadiumStyles, ElementAttributes } from '../../..'

export interface SelectionPillProps extends WithThemeInjectedProps {
  /** Required unique identifier for the pill */
  id: string | number

  /** Any additional props to add to the list element (e.g. data attributes). */
  listElementAttributes?: ElementAttributes<'li'>

  /** Any additional props to add to the checkbox element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<'Checkbox'>

  /** Determines wether or not selected styles are applied and start is a selected state */
  isSelected?: boolean

  /** Determines Whether or not the pill is disabled. */
  isDisabled?: boolean

  /** Callback function called after pill click */
  onClick(): void

  /** Callback function called after pill gained focus */
  onFocus(): void

  /** Callback function called after pill has lost focus */
  onBlur(): void

  /** Text to appear inside pill */
  text?: string

  /** Optional styles. */
  style?: RadiumStyles

  /** Aria overrides for accessibility (i.e. use if label is not descriptive enough for screen readers) */
  aria?: { label ?: string }
}

declare const SelectionPillProps: ApplyWithTheme<React.ComponentType<SelectionPillProps>>

export default SelectionPillProps
