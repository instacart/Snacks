import * as React from 'react'
import { TransitionProps } from 'react-transition-group/Transition'

export interface FadeProps extends Partial<Pick<TransitionProps, 'in' | 'appear' | 'timeout'>> {
  children: React.ReactNode

  className?: string

  /**
   * Settings for opacity during animation.
   *
   * Default start: 0
   * Default end: 1500 (If content's height is larger than 1500, pass the content's height here )
   */
  opacity?: {
    start?: number
    end?: number
  }

  /** Time of animation in milliseconds. */
  transitionTime?: number

  /** Name of the transition-timing-function CSS property. */
  timingFunction?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: React.CSSProperties
}

declare const Fade: React.ComponentClass<FadeProps>

export default Fade
