import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface LoadingBoxProps {
  className?: string

  /** Use for rendering dark backgrounds. */
  background?: 'light' | 'dark'

  /** Use for rendering light backgrounds, overrides dark */
  shape?: 'circle' | 'square' | 'line'

  /**
   *  By default, `size` will determine the components width.
   *  If the `shape` is prop `circle` or `square`, `size` will apply to height and width.
   */
  size?: string | number

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const LoadingBox: React.ComponentType<LoadingBoxProps>

export default LoadingBox
