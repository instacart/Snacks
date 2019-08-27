import * as React from 'react'
import { Interpolation } from '@emotion/core'
import * as icons from './icons'
import { Omit } from '../..'

export interface SVGIconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'style'> {
  color?: string
  name: keyof typeof icons
  size?: 'small' | 'standard' | 'large'
  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const SVGIcon: React.ComponentClass<SVGIconProps>

export default SVGIcon
