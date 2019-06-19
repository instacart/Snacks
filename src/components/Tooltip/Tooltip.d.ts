import * as React from 'react'

export interface TooltipProps {
  children?: React.ReactNode

  size?: 'small' | 'medium' | 'large'

  placement?: 'top' | 'left' | 'right' | 'bottom'

  style?: {
    border?: string
    padding?: string
    boxShadow?: string
  }

  arrowStyle?: {
    border?: string
    boxShadowRight?: string
    boxShadowBottom?: string
    boxShadowLeft?: string
    boxShadowTop?: string
  }

  target: React.ReactNode

  snacksStyle: 'primary' | 'secondary' | 'dark'

  onDismiss(): void

  onShow(): void

  isVisible?: boolean
}

declare const Tooltip: React.ComponentClass<TooltipProps>

export default Tooltip
