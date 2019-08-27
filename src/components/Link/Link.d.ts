import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { ElementAttributes } from '../..'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface LinkProps extends WithThemeInjectedProps {
  className?: string

  /** The link's text content. */
  children?: React.ReactNode

  /** `href` attribute for the anchor tag. */
  href?: string

  /** Callback fired when the link is clicked. */
  onClick(e: React.MouseEvent<HTMLAnchorElement>, props: LinkProps): void

  /** Any additonal props */
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<'a'>>

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation
}

declare const Link: ApplyWithTheme<React.ComponentType<LinkProps>>

export default Link
