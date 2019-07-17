import * as React from 'react'
import { RadiumStyles, ElementAttributes } from '../..'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface ButtonProps extends WithThemeInjectedProps {
  children?: React.ReactNode

  /** Whether or not the button is disabled. */
  disabled?: boolean

  /** Size of the button. */
  size?: 'tiny' | 'small' | 'standard' | 'large'

  /** Snacks button variants. */
  snacksStyle?: 'primary' | 'secondary' | 'flat' | 'coupon'

  /** Optional style overrides. */
  style?: RadiumStyles

  /** An optional icon. Can be a an icon name or a Snacks `Icon` component. */
  icon?: string | React.ReactElement<any> // eslint-disable-line @typescript-eslint/no-explicit-any

  /** Where the icon is positioned relative to primary text content. */
  iconPosition?: 'left' | 'right'

  /** Reverses colors. Use for rendering buttons on dark backgrounds. */
  inverted?: boolean

  /**
   * If href is provided, `Button` will render as an anchor
   * tag with the supplied href value.
   */
  href?: string
}

type ButtonElementProps<C extends React.ElementType> = Pick<
  React.ComponentPropsWithRef<C>,
  'onClick' | 'onMouseDown' | 'type' | 'tabIndex'
> & {
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<C>>
}

type ButtonBase<C extends React.ElementType, P = {}> = ApplyWithTheme<
  (props: P & ButtonProps & ButtonElementProps<C>) => JSX.Element
>

type Button = ButtonBase<'a', { href: string }> & ButtonBase<'button'>

declare const Button: Button

export default Button
