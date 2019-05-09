import * as React from 'react'
import { RadiumStyles } from '../..'

export interface GridProps {
  children?: React.ReactNode
  style?: RadiumStyles
}

declare const Grid: React.ComponentType<GridProps>

export default Grid
