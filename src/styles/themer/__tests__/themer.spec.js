import { spy } from 'sinon'
import themer from '../index'
import { themeTemplate } from '../utils'

it('should warn when no config is set', () => {
  const oldWarn = console.warn
  console.warn = spy()
  themer._themeConfig = undefined // NOTE: never actually do this
  themer.get('colors', 'action')
  expect(console.warn.calledWith(`Snacks theme error: No themeConfig defined. Please use Themer template: `, themeTemplate)).toBeTruthy()

  console.warn = oldWarn
})

it('should set new, partial config', () => {
  themer.themeConfig = {
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#4a4gsa',
      primaryForeground: '#fff',
    }
  }

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#4a4gsa',
      primaryForeground: '#fff',
    }
  })
})

it('should set new, full config', () => {
  themer.themeConfig = {
    colors: {
      action: '#ccc',
      primaryBackground: '#ededed',
      primaryForeground: '#eee',
      secondaryBackground: '#fff',
      secondaryForeground: '#000',
    }
  }

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#ccc',
      primaryBackground: '#ededed',
      primaryForeground: '#eee',
      secondaryBackground: '#fff',
      secondaryForeground: '#000',
    }
  })
})

it('should warn and clean config on full config set', () => {
  const oldWarn = console.warn
  console.warn = spy()

  themer.themeConfig = {
    colors: {
      action: '#ccc',
      primaryBackground: '#ededed',
      primaryForeground: '#eee',
      secondaryBackground: '#fff',
      secondaryForeground: '#000',
      madness: 'pure madness'
    },
    stuff: {
      whatever: 'chaos'
    }
  }

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#ccc',
      primaryBackground: '#ededed',
      primaryForeground: '#eee',
      secondaryBackground: '#fff',
      secondaryForeground: '#000',
    }
  })

  expect(console.warn.calledTwice).toBeTruthy()
  expect(console.warn.calledWith('Snacks theme error: "madness" not a valid config key. This value will not be set. Please use Themer template: ', themeTemplate)).toBeTruthy()
  expect(console.warn.calledWith('Snacks theme error: "stuff" not a valid config section. These values will not be set. Please use Themer template: ', themeTemplate)).toBeTruthy()

  console.warn = oldWarn
})

it('should set specifc value in config', () => {
  themer.themeConfig = {
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  }

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  })

  themer.set('colors', 'action', '#fff')

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#fff',
      primaryBackground: '#sg444h',
    }
  })

  themer.set('colors', 'primaryForeground', '#eee')

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#fff',
      primaryBackground: '#sg444h',
      primaryForeground: '#eee'
    }
  })
})

it('should not set bad value in config and warn', () => {
  const oldWarn = console.warn
  console.warn = spy()

  themer.themeConfig = {
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  }

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  })

  themer.set('colors', 'madness', 'pure madness')

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  })

  expect(console.warn.calledWith('Snacks theme error: "madness" not a valid config key. This value will not be set. Please use Themer template: ', themeTemplate)).toBeTruthy()

  themer.set('stuff', 'whatever', 'chaos')

  expect(themer.themeConfig).toEqual({
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  })

  expect(console.warn.calledWith('Snacks theme error: "stuff" not a valid config section. These values will not be set. Please use Themer template: ', themeTemplate)).toBeTruthy()

  console.warn = oldWarn
})

it('should get specifc value in config', () => {
  themer.themeConfig = {
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  }

  expect(themer.get('colors', 'action')).toEqual('#4a4gsa')

})

it('should not get bad value in config', () => {
  const oldWarn = console.warn
  console.warn = spy()

  themer.themeConfig = {
    colors: {
      action: '#4a4gsa',
      primaryBackground: '#sg444h',
    }
  }

  expect(themer.get('stuff', 'whatever')).toEqual(undefined)
  expect(console.warn.calledWith('Snacks theme error: "stuff" not a valid config section. These values will not be set. Please use Themer template: ', themeTemplate)).toBeTruthy()

  console.warn = oldWarn
})
