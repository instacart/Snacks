import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface MenuItemProps<TValue extends string | number | boolean = string> {
  /** Completely override the MenuItem rendering and create a custom MenuItem */
  children?: React.ReactNode

  className?: string

  /** Disable the MenuItem */
  disabled?: boolean

  /** Focus the MenuItem */
  focus?: boolean

  /** Index of MenuItem within Menu. Used for currentIndex */
  index?: number

  /** Text for the menu item */
  label: string

  /** Override styles of label */
  labelStyles?: Interpolation

  labelClassName?: string

  /** Icon name or Icon component displayed left of label */
  leftIcon?: string | React.ReactNode

  /** Override styles for leftIcon */
  leftIconStyles?: Interpolation

  leftIconClassName?: string

  /** Callback function fired when the menu item is click. Overriden by parent Menu or DropdownMenu */
  _onClick?(
    e: React.MouseEvent<HTMLElement>,
    option: { value: TValue; label: string },
    index: number
  ): void

  /** Callback function fired when the menu item is focused. */
  onFocus?(index: number, e: React.FocusEvent<HTMLElement>): void

  /** Used by menu to keep track of current focus index. */
  onMenuItemFocus?(index: number): void

  /** Whether or not to prevent default when menu item is clicked */
  preventDefault?: boolean

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

  /** Override tabIndex property */
  tabIndex?: number

  /** Whether or not to use use the tabIndex HTML attribute */
  useTabIndex?: boolean

  /** Underlying value. Also, passed into _onClick function */
  value: TValue
}

export default class MenuItem<
  TValue extends string | number | boolean = string
> extends React.Component<MenuItemProps<TValue>> {
  render(): JSX.Element
}
