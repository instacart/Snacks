import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { MenuItemProps } from './MenuItem'

export interface MenuProps<TValue extends string | number | boolean = string>
  extends Pick<React.ComponentProps<'div'>, 'onBlur' | 'onKeyDown'> {
  className?: string

  /** aria-hidden HTML attribute */
  ariaHidden?: boolean

  /** MenuItems or Divider */
  children: React.ReactNode

  /** Callback function fired when a MenuItem is selected */
  onSelect: MenuItemProps<TValue>['_onClick']

  /** Role HTML attribute */
  role?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

export default class Menu<
  TValue extends string | number | boolean = string
> extends React.Component<MenuProps<TValue>> {
  render(): JSX.Element
}
