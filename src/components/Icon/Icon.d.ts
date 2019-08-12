import * as React from 'react'
import { Interpolation } from '@emotion/core'
import hexValues from './hexValues'

export interface IconProps {
  className?: string

  /** String name of icon - ex 'cart' */
  name?: keyof typeof hexValues

  /** Hexcode of desired icon from ic-icons */
  code?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Callback function called after button click */
  onClick?: React.ComponentProps<'i'>['onClick']
}

declare const Icon: React.ComponentType<IconProps>

export default Icon
