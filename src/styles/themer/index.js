/* eslint-disable no-underscore-dangle */
import { cleanConfig, defaultTheme, themeTemplate, validConfigValue } from './utils'

class Themer {
  constructor() {
    this._themeConfig = defaultTheme
    this._onChangeListeners = []
  }

  _callListeners() {
    this._onChangeListeners.forEach(listener => {
      listener(this._themeConfig)
    })
  }

  get themeConfig() {
    return this._themeConfig
  }

  set themeConfig(themeConfig) {
    this._themeConfig = cleanConfig(themeConfig)
    this._callListeners()
  }

  get(section, sectionKey) {
    if (!this._themeConfig) {
      console.warn(
        'Snacks theme error: No themeConfig defined. Please use Themer template: ',
        themeTemplate
      )
    } else if (validConfigValue(section, sectionKey)) {
      return this._themeConfig[section][sectionKey]
    }
  }

  set(section, sectionKey, themeValue) {
    if (validConfigValue(section, sectionKey)) {
      this._themeConfig[section][sectionKey] = themeValue
      this._callListeners()
    }
  }

  subscribe(listener) {
    this._onChangeListeners.push(listener)

    const unsubscribe = () => {
      const index = this._onChangeListeners.indexOf(listener)
      if (index === -1) {
        return
      }
      this._onChangeListeners.splice(index, 1)
    }

    return unsubscribe
  }
}

export default new Themer()
