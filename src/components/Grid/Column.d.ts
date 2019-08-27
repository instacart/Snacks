import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { Size } from '../../styles/responsive'

export interface ColumnProps {
  className?: string

  children?: React.ReactNode

  /** object where keys are breakpoint and value is number of columns to span at that breakpoint */
  sizes?: { [Key in Size]?: number }

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const Column: React.ComponentType<ColumnProps>

export default Column
