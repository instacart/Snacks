import * as React from 'react'
import { RadiumStyles } from '../..'

export interface LoadingBoxProps {
  /** Use for rendering dark backgrounds. */
  background?: 'light' | 'dark'

  /** Use for rendering light backgrounds, overrides dark */
  shape?: 'circle' | 'square' | 'line'

  /**
   *  By default, `size` will determine the components width.
   *  If the `shape` is prop `circle` or `square`, `size` will apply to height and width.
   */
  size?: string | number

  style?: RadiumStyles
}

declare const LoadingBox: React.ComponentType<LoadingBoxProps>

export default LoadingBox
