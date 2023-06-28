import { Theme } from './utils'

export declare class Themer {
  themeConfig: Theme

  constructor()

  set<TSection extends keyof Theme, TSectionKey extends keyof Theme[TSection]>(
    section: TSection,
    sectionKey: TSectionKey,
    themeValue: string
  ): void

  subscribe(listener: (themeConfig?: Theme) => void): () => void
}
