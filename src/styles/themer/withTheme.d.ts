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
> = React.NamedExoticComponent<JSX.LibraryManagedAttributes<T, WithThemeOuterProps<P>>>

declare function withTheme<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
>(component: T): React.NamedExoticComponent<JSX.LibraryManagedAttributes<T, WithThemeOuterProps<P>>>

export default withTheme
