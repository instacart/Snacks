import * as React from 'react'
import { TransitionProps } from 'react-transition-group/Transition'

export interface GrowProps extends Partial<Pick<TransitionProps, 'in' | 'appear' | 'timeout'>> {
  axis?: 'x' | 'y'

  children: React.ReactNode

  /**
   * Settings for max-height and max-width during animation (this is what animates the element's height/width).
   *
   * Default start: 0
   * Default end: 1500 (If content's height is larger than 1500, pass the content's height here )
   */
  maxSize?: {
    start?: number
    end?: number
  }

  /**
   * Settings for starting and ending transformation to scale.
   *
   * Default start: 0
   * Default end: 1
   */
  scale?: {
    start?: number
    end?: number
  }

  /** Time of animation in milliseconds. */
  transitionTime?: number

  /** Name of the transition-timing-function CSS property. */
  timingFunction?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'

  style?: React.CSSProperties
}

declare const Grow: React.ComponentClass<GrowProps>

export default Grow
