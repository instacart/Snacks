import { cleanConfig, themeTemplate, validConfigValue } from './utils'

class Themer {
  get themeConfig() {
    return this._themeConfig
  }

  set themeConfig(themeConfig) {
    this._themeConfig = cleanConfig(themeConfig)
  }

  get(section, sectionKey) {
    if (!this._themeConfig) {
      console.warn(`Snacks theme error: No themeConfig defined. Please use Themer template: `, themeTemplate)
    } else if (validConfigValue(section, sectionKey)) {
      return this._themeConfig[section][sectionKey]
    }
  }

  set(section, sectionKey, themeValue) {
    if (validConfigValue(section, sectionKey)) {
      this._themeConfig[section][sectionKey] = themeValue
    }
  }
}

export default new Themer()
