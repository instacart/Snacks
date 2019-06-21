import * as React from 'react'
import { MenuItemProps } from './MenuItem'

export interface MenuProps<TValue extends string | number | boolean = string>
  extends Pick<React.ComponentProps<'div'>, 'onBlur' | 'onKeyDown'> {
  /** aria-hidden HTML attribute */
  ariaHidden?: boolean

  /** MenuItems or Divider */
  children: React.ReactNode

  /** Callback function fired when a MenuItem is selected */
  onSelect: MenuItemProps<TValue>['_onClick']

  /** Role HTML attribute */
  role?: string

  /** Customize style of menu parent */
  style?: React.CSSProperties
}

export default class Menu<
  TValue extends string | number | boolean = string
> extends React.Component<MenuProps<TValue>> {
  render(): JSX.Element
}
