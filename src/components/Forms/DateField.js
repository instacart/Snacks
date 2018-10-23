import React              from 'react'
import MaskedTextField    from './MaskedTextField'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

const mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
const hint = 'MM/DD/YYYY'
const pipe = createAutoCorrectedDatePipe('mm/dd/yyyy')

const DateField = React.forwardRef((props, ref) =>  {
  return (
    <MaskedTextField
      type='tel'
      mask={mask}
      maskHint={hint}
      pipe={pipe}
      getValue={v => v}
      ref={ref}
      {...props}
    />
  )
})

export default DateField

