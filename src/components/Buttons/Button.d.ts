import * as React from 'react'
import { RadiumStyles, ElementAttributes } from '../..'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface ButtonProps
  extends WithThemeInjectedProps,
    Pick<
      React.ComponentPropsWithoutRef<'button'>,
      'onClick' | 'onMouseDown' | 'type' | 'tabIndex'
    > {
  children?: React.ReactNode

  /** Whether or not the button is disabled. */
  disabled?: boolean

  /** Size of the button. */
  size?: 'tiny' | 'small' | 'standard' | 'large'

  /** Snacks button variants. */
  snacksStyle?: 'primary' | 'secondary' | 'flat' | 'coupon'

  /** Optional style overrides. */
  style?: RadiumStyles

  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<'button'>>

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

  /**
    * If passed, users will have the ability to render a custom element
    * or React Component in the DOM while leveraging the styling of a
    * Snacks Button (e.g., using react-router's Link)
    */
  elementType?: React.ElementType
}

declare const Button: ApplyWithTheme<React.ComponentClass<ButtonProps>>

export default Button
