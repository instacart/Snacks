import * as React from 'react'
import { RadiumStyles } from '../..'
import { Size } from '../../styles/responsive'

export interface ColumnProps {
  children?: React.ReactNode

  /** object where keys are breakpoint and value is number of columns to span at that breakpoint */
  sizes?: { [Key in Size]?: number }

  style?: RadiumStyles
}

declare const Column: React.ComponentType<ColumnProps>

export default Column
