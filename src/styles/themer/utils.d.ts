import * as PropTypes from 'prop-types'

export interface ThemeTemplate {
  colors: {
    action: boolean
    actionHover: boolean
    primaryBackground: boolean
    primaryForeground: boolean
    secondaryBackground: boolean
    secondaryForeground: boolean
    secondaryForegroundFocus: boolean
  }
}

export declare const themeTemplate: ThemeTemplate

export interface Theme {
  colors: {
    action: string
    actionHover: string
    primaryBackground: string
    primaryForeground: string
    secondaryBackground: string
    secondaryForeground: string
    secondaryForegroundFocus: string
  }
}

export declare const defaultTheme: Theme

export declare function cleanConfig<T extends Theme>(themeConfig: T): Theme

export declare function validConfigValue(section: string, sectionKey: string): boolean

export type ThemePropTypes = Theme

export declare const themePropTypes: PropTypes.Requireable<
  PropTypes.InferProps<{
    colors: PropTypes.Requireable<
      PropTypes.InferProps<{
        action: PropTypes.Requireable<string>
        actionHover: PropTypes.Requireable<string>
        primaryBackground: PropTypes.Requireable<string>
        primaryForeground: PropTypes.Requireable<string>
        secondaryBackground: PropTypes.Requireable<string>
        secondaryForeground: PropTypes.Requireable<string>
        secondaryForegroundFocus: PropTypes.Requireable<string>
      }>
    >
  }>
>

declare const utils: {
  cleanConfig: typeof cleanConfig
  themePropTypes: typeof themePropTypes
  themeTemplate: ThemeTemplate
  validConfigValue: typeof validConfigValue
}

export default utils
