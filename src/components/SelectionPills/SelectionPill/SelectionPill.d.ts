import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../../styles/themer/withTheme'
import { RadiumStyles, ElementAttributes } from '../../..'

export interface SelectionPillProps extends WithThemeInjectedProps {
  /** unique identifier for the pill */
  id?: string | number

  /** Any additional props to add to the list element (e.g. data attributes). */
  listElementAttributes?: ElementAttributes<'li'>

  /** Any additional props to add to the checkbox element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<'label'>

  /** Flag determining if component selected state is controlled by parent through props or internal state */
  parentControlledState?: boolean

  /** Determines wether or not selected styles are applied and start is a selected state */
  isSelected?: boolean

  /** Determines Whether or not the pill is disabled. */
  isDisabled?: boolean

  /** Callback function called after pill click */
  onClick?(e: React.MouseEvent<HTMLElement>, props: SelectionPillProps): void

  /** Callback function called after pill gained focus */
  onFocus?(e: React.MouseEvent<HTMLElement>, props: SelectionPillProps & { isFocused: boolean }): void

  /** Callback function called after pill has lost focus */
  onBlur?(e: React.MouseEvent<HTMLElement>, props: SelectionPillProps & { isFocused: boolean }): void

  /** Text to appear inside pill */
  text: string

  /** Optional styles. */
  style?: {
    button?: React.CSSProperties
    disabledStyle?: React.CSSProperties
    selectedStyle?: React.CSSProperties
    focusedStyle?: React.CSSProperties
  }

  /** Aria overrides for accessibility (i.e. use if label is not descriptive enough for screen readers) */
  aria?: { label ?: string }
}

declare const SelectionPillProps: ApplyWithTheme<React.ComponentType<SelectionPillProps>>

export default SelectionPillProps
