import path from 'path'
import { readFileSync } from 'fs-extra'

const indexPath = path.resolve(__dirname, '../index.js')

const expectedExports = [
  'colors',
  'zIndex',
  'GlobalTheme',
  'Normalize',
  'SetStyles',
  'themer',
  'withTheme',
  'themePropTypes',
  'responsive',
  'spacing',
  'Grid',
  'Column',
  'Row',
  'Form',
  'FormComponent',
  'FloatingLabel',
  'PhoneNumberField',
  'DateField',
  'MaskedTextField',
  'ServerError',
  'TextField',
  'Select',
  'ValidationError',
  'Grow',
  'Fade',
  'Slide',
  'Pill',
  'Tooltip',
  'Button',
  'CircleButton',
  'Radio',
  'Checkbox',
  'Switch',
  'Icon',
  'SVGIcon',
  'Link',
  'LoadingBox',
  'NavigationPill',
  'NavigationPills',
  'ScrollTrack',
  'Menu',
  'MenuItem',
  'MenuDivider',
  'DropdownMenu',
  'Portal',
]
const indexFile = readFileSync(indexPath).toString()

describe('ensure module exports', () => {
  expectedExports.forEach((expected) => {
    it(`exports module: ${expected}`, () => {
      const found = !!indexFile.includes(expected)
      expect(found).toBe(true)
    })
  })
})

describe('ensure test for exports', () => {
  const exportStr = indexFile.substr(indexFile.indexOf('export {') + 9)
  const finalStr = exportStr.substr(0, exportStr.indexOf('}') - 1)
  // console.log(finalStr)
  const arr = finalStr.split('\n').filter(i => !i.includes('//') && i !== '').map(i => i.replace(/ |,/g, ''))
  arr.forEach((exported) => {
    it(`has a test: ${exported}`, () => {
      expect(expectedExports.includes(exported)).toBe(true)
    })
  })
})