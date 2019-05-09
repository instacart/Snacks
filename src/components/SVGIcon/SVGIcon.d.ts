import * as React from 'react'
import * as icons from './icons'
import { RadiumStyles, Omit } from '../..'

export interface SVGIconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'style'> {
  color?: string
  name: keyof typeof icons
  size?: 'small' | 'standard' | 'large'
  style?: RadiumStyles
}

declare const SVGIcon: React.ComponentClass<SVGIconProps>

export default SVGIcon
