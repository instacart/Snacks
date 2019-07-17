import * as React from 'react'
import { RadiumStyles } from '../..'
import hexValues from './hexValues'

export interface IconProps {
  /** String name of icon - ex 'cart' */
  name?: keyof typeof hexValues

  /** Hexcode of desired icon from ic-icons */
  code?: string

  /** Optional style overrides */
  style?: RadiumStyles

  /** Callback function called after button click */
  onClick?: React.ComponentProps<'i'>['onClick']
}

declare const Icon: React.ComponentType<IconProps>

export default Icon
