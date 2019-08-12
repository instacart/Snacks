import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface GridProps {
  className?: string
  children?: React.ReactNode
  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const Grid: React.ComponentType<GridProps>

export default Grid
