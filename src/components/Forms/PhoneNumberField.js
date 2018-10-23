import React              from 'react'
import MaskedTextField    from './MaskedTextField'

console.log('hi from snacks3')
const phoneRegex = /\(|\)|-| /g

// input masks by alpha-2 code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// NOTE: this currently only supports US, but will someday include other regions and countries
const inputMasks = {
  'US': {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    hint: '(555) 555-555'
  }
}

const getValue = (value) => value.replace(phoneRegex, '')

const PhoneNumberField = React.forwardRef((props, ref) =>
  <MaskedTextField
    type='tel'
    mask={inputMasks.US.mask}
    maskHint={inputMasks.US.hint}
    getValue={getValue}
    ref={ref}
    {...props}
  />
)

PhoneNumberField.displayName = 'PhoneNumberField'

export default PhoneNumberField
