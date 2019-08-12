import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface RowProps {
  className?: string

  children?: React.ReactNode

  /** Force Row to width of 100vw -- Snacks will add negative margin */
  forceFullPage?: boolean

  /** Maximum number of columns this Row should grow to as screen width increases. Cannot exceed 14. */
  maxColumns?: boolean

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const Row: React.ComponentType<RowProps>

export default Row
