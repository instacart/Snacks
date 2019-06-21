import { Theme } from './utils'

declare class Themer {
  themeConfig: Theme

  constructor()

  get<TSection extends keyof Theme, TSectionKey extends keyof Theme[TSection]>(
    section: TSection,
    sectionKey: TSectionKey
  ): Theme[TSection][TSectionKey]

  set<TSection extends keyof Theme, TSectionKey extends keyof Theme[TSection]>(
    section: TSection,
    sectionKey: TSectionKey,
    themeValue: string
  ): void

  subscribe(listener: (themeConfig?: Theme) => void): () => void
}

declare const themer: Themer

export default themer
