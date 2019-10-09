import * as React from 'react'
import { MenuProps } from './Menu'
import { RadiumStyles } from '../..'

export interface DropdownMenuProps<TValue extends string | number | boolean = string> {
  /** MenuItems or Divider */
  children: React.ReactNode

  /** React component or HTML that will be used as the dropdown trigger. ie. Button or Icon */
  triggerElement?: React.ReactElement

  /** Open and close menu manually */
  open?: boolean

  /** Callback fired on dropdown close */
  onClose?(): void

  /** Callback fired on click */
  onClick?(e: React.MouseEvent<HTMLElement>): void

  /** Callback fired on dropdown open */
  onOpen?(): void

  /** Requesting to open/close for controlled open component. */
  onRequestChange?(open: boolean): void

  /** Callback function fired when a MenuItem is selected */
  onSelect?: MenuProps<TValue>['onSelect']

  /** Customize style root element */
  style?: RadiumStyles

  /** Customize style of menu parent */
  menuContainerStyle?: RadiumStyles

  /** Customize style of menu parent when dropdown is open */
  menuContainerOpenStyle?: RadiumStyles

  /** Props passed to Menu component */
  menuProps?: MenuProps
}

export default class DropdownMenu<
  TValue extends string | number | boolean = string
> extends React.Component<DropdownMenuProps<TValue>> {
  render(): JSX.Element
}
