import * as React from 'react'
import { RadiumStyles } from '../..'

export interface RowProps {
  children?: React.ReactNode

  /** Force Row to width of 100vw -- Snacks will add negative margin */
  forceFullPage?: boolean

  /** Maximum number of columns this Row should grow to as screen width increases. Cannot exceed 14. */
  maxColumns?: number

  style?: RadiumStyles
}

declare const Row: React.ComponentType<RowProps>

export default Row
