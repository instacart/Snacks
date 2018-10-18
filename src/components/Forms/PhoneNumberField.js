import React              from 'react'
import MaskedTextField    from './MaskedTextField'


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

class PhoneNumberField extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  getValue = () => {
    if (!this.input) {
      return null
    }

    return this.input.getValue()
  }

  triggerFocus = () => this.input.wrapped.FormComponent.triggerFocus()

  render() {
    return (
      <MaskedTextField
        type='tel'
        mask={inputMasks.US.mask}
        maskHint={inputMasks.US.hint}
        getValue={getValue}
        ref={(ref) => this.input = ref}
        {...this.props}
      />
    )
  }
}

export default PhoneNumberField
