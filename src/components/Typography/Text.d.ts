import * as React from 'react'
import { RadiumStyles, Omit } from '../..'

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  children: React.ReactNode

  /**
   * Overrides the default HTML element type. Each typography variant has a default HTML element (e.g. h1, p),
   * but this is only a best guess. Always ensure you're using the correct header markup -- element
   * types with Snacks typography should be used to describe document structure, not visual style.
   */
  elementType?: keyof JSX.IntrinsicElements

  /** Overrides the variant's default font weight. */
  fontWeight?: 'light' | 'regular' | 'semiBold' | 'bold'

  /** Typography variant to be used. */
  variant:
    | 'T.11'
    | 'T.12'
    | 'T.14'
    | 'T.16'
    | 'T.18'
    | 'T.22'
    | 'T.28'
    | 'T.36'
    | 'T.46'
    | 'T.58'
    | 'T.64'
    | 'T.72'
    | 'T.82'
    | 'T.92'

  style?: RadiumStyles
}

declare const Text: React.ComponentClass<TextProps>

export default Text
