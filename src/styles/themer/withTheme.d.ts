import * as React from 'react'
import { ThemePropTypes } from './utils'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface WithThemeInjectedProps {
  snacksTheme: ThemePropTypes
}

interface WithThemeProps {
  snacksTheme?: ThemePropTypes
}

type WithThemeOuterProps<P extends WithThemeInjectedProps> = Omit<P, keyof WithThemeInjectedProps> &
  WithThemeProps

// helper for applying hoc in .d.ts files
export type ApplyWithTheme<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
> = React.ComponentClass<WithThemeOuterProps<P>>

export type ApplyWithThemeForwardRef<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
> = React.NamedExoticComponent<JSX.LibraryManagedAttributes<T, WithThemeOuterProps<P>>>

export interface WithThemeOptions {
  forwardRef?: boolean
}

declare function withTheme<TOptions extends WithThemeOptions>(
  options?: TOptions
): <T extends React.ComponentType<P>, P extends WithThemeInjectedProps>(
  component: T & React.ComponentType<P>
) => TOptions extends { forwardRef: true }
  ? React.NamedExoticComponent<JSX.LibraryManagedAttributes<T, WithThemeOuterProps<P>>>
  : React.ComponentClass<WithThemeOuterProps<P>>
declare function withTheme<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
>(component: T): React.ComponentClass<WithThemeOuterProps<P>>
export default withTheme
