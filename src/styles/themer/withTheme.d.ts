import * as React from 'react'
import { ThemePropTypes } from './utils'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface WithThemeInjectedProps {
  snacksTheme: ThemePropTypes
}

interface WithThemeProps {
  snacksTheme?: ThemePropTypes
}

interface WithThemeComponent<P, T> extends React.Component<P> {
  wrapped: T
}

type WithThemeComponentClass<P, T> = React.ClassType<
  P,
  WithThemeComponent<P, T>,
  React.ComponentClass<P>
>

type WithThemeOuterProps<P extends WithThemeInjectedProps> = Omit<P, keyof WithThemeInjectedProps> &
  WithThemeProps

// helper for applying hoc in .d.ts files
export type ApplyWithTheme<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
> = T extends React.ComponentClass<P>
  ? WithThemeComponentClass<WithThemeOuterProps<P>, InstanceType<T>>
  : WithThemeComponentClass<WithThemeOuterProps<P>, never>

declare function withTheme<
  T extends React.ComponentType<P>,
  P extends WithThemeInjectedProps = React.ComponentProps<T>
>(
  component: T
): T extends React.ComponentClass<P>
  ? WithThemeComponentClass<WithThemeOuterProps<P>, InstanceType<T>>
  : WithThemeComponentClass<WithThemeOuterProps<P>, never>

export default withTheme
