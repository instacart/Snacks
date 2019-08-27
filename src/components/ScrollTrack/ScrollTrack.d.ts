import * as React from 'react'
import { Interpolation } from '@emotion/core'

interface CallbackProps {
  atStart: boolean
  atEnd: boolean
  slideTo: number
  parentWidth: number
  trackWidth: number
}

export interface ScrollTrackProps {
  /** Prop for passing in custom button content for back button */
  backButtonContent?: React.ReactNode

  /** The elements to scroll */
  children?: React.ReactNode

  className?: string

  /** Manually control left positioning of ScrollTrack */
  leftOverride?: number

  /** Prop for passing in custom button content for next button */
  nextButtonContent?: React.ReactNode

  /**
   * A callback called before sliding to next set.
   * ** Passed function must return a promsie **
   * -- will wait for promise resolution before continuing slide.
   * Use for high levels of control
   */
  onBeforeNext?(callbackProps: CallbackProps): Promise<undefined | { scrollOffset?: number }>

  /**
   * A callback called before sliding to previous set.
   * ** Passed function must return a promsie **
   * -- will wait for promise resolution before continuing slide.
   * Use for high levels of control
   */
  onBeforeBack?(callbackProps: CallbackProps): Promise<undefined | { scrollOffset?: number }>

  /**  function to be called after sliding to next set. */
  onAfterNext?(callbackProps: CallbackProps): void

  /**  function to be called after sliding to previous set. */
  onAfterBack?(callbackProps: CallbackProps): void

  /** number of pixels to offset forward scrolls by */
  scrollOffset?: number

  /** Speed of scrolling animaton in milleseconds - defaults to 150ms */
  scrollSpeed?: number

  /** Transition timing function to use for scrolling animation - defaults to ease-in-out */
  scrollTimingFunction?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Style specifc children elements [LeftArrow, RightArrow, Track] */
  styles?: {
    LeftArrow?: Interpolation
    RightArrow?: Interpolation
    Track?: Interpolation
  }
}

declare const ScrollTrack: React.ComponentClass<ScrollTrackProps>

export default ScrollTrack
