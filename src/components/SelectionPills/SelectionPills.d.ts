import * as React from 'react'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'
import { RadiumStyles, ElementAttributes } from '../..'
import { SelectionPillProps } from './SelectionPill/SelectionPill'

interface Pill
  extends Pick<SelectionPillProps, 'text' | 'id' | 'isSelected' | 'isDisabled'> { }

export interface SelectionPillsProps extends WithThemeInjectedProps {
    /** Callback function called after pill click
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {pill} object All pill attributes for pill selected
     * @param {pillList} object List of all pills
     */
    onSelectPill?(e: React.MouseEvent<HTMLElement>, pill: Pill, pills: Pill[]): void

    /** Any additional props to add to the wrapper element (e.g. data attributes). */
    elementAttributes?: ElementAttributes<'div'>

    /** Any additional props to add to the inner ul element (e.g. data attributes). */
    listAttributes?: ElementAttributes<'ul'>

    /** Flag determining if pills selected state is controlled by parent through props or internal state */
    parentControlledState?: boolean

    /** Option to exclude ScrollTrack wrapper and present pills in grid format wrapping within parent. */
    excludeScrollTrack?: boolean,

    /** Array of selectionPill attributes */
    pills: Pill[]

    /** Optional label placed in front of pills */
    label?: string

    /** Option to only allow a maximum number of selected items. No restriction if not set. */
    maxSelectionCount?: number

    /** Option to include a generated pill that will toggle all other pills on / off. Disabled if a maxSelectionCount or parentControlledState. */
    includeSelectAll?: boolean

    /** Optional override of the select all pill label */
    selectAllLabel?: string

    /** Optional styles. */
    style?: {
      wrapperStyle?: React.CSSProperties
      listStyle?: React.CSSProperties
      labelStyle?: React.CSSProperties
    }
  }

declare const SelectionPillsProps: ApplyWithTheme<React.ComponentType<SelectionPillsProps>>

export default SelectionPillsProps
