import * as React from 'react'
import { TransitionProps } from 'react-transition-group/Transition'

export interface SlideProps extends Partial<Pick<TransitionProps, 'in' | 'appear' | 'timeout'>> {
  axis?: 'x' | 'y'

  children: React.ReactNode

  containerStyle?: React.CSSProperties

  /** Inverts offset direction, e.g. changes animation direction from right to left */
  invert?: boolean

  /**
   * Number of pixels to offset the children. To have the children completely hidden
   * prior to animation, offset should equal the width of the widest child.
   */
  offset?: number

  /** Time of animation in milliseconds. */
  transitionTime?: number

  /** Name of the transition-timing-function CSS property. */
  timingFunction?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'

  style?: React.CSSProperties
}

declare const Slide: React.ComponentClass<SlideProps>

export default Slide
