import * as React from 'react'
import { RadiumStyles } from '../..'

export interface MenuItemProps<TValue extends string | number | boolean = string> {
  /** Completely override the MenuItem rendering and create a custom MenuItem */
  children?: React.ReactNode

  /** Disable the MenuItem */
  disabled?: boolean

  /** Focus the MenuItem */
  focus?: boolean

  /** Index of MenuItem within Menu. Used for currentIndex */
  index?: number

  /** Text for the menu item */
  label: string

  /** Override styles of label */
  labelStyles?: RadiumStyles

  /** Icon name or Icon component displayed left of label */
  leftIcon?: string | React.ReactNode

  /** Override styles for leftIcon */
  leftIconStyles?: RadiumStyles

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

  /** Customize style of MenuItem */
  style?: RadiumStyles

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
