import React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import omit from '../../utils/omit'
import MaskedTextField, { maskedTextFieldPropTypes } from './MaskedTextField'

const mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
const hint = 'MM/DD/YYYY'
const pipe = createAutoCorrectedDatePipe('mm/dd/yyyy')

const getValue = value => value

export const dateFieldPropTypes = omit(
  maskedTextFieldPropTypes,
  'type',
  'mask',
  'maskHint',
  'pipe',
  'getValue',
  'ref'
)

class DateField extends React.Component {
  static propTypes = dateFieldPropTypes

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
        type="tel"
        mask={mask}
        maskHint={hint}
        pipe={pipe}
        getValue={getValue}
        ref={ref => (this.input = ref)}
        {...this.props}
      />
    )
  }
}

export default DateField
