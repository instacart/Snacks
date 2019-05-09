import * as React from 'react'
import { MaskedTextFieldProps } from './MaskedTextField'
import { Omit } from '../..'

export interface DateFieldProps
  extends Omit<MaskedTextFieldProps, 'mask' | 'pipe' | 'getValue'>,
    Partial<Pick<MaskedTextFieldProps, 'mask' | 'pipe' | 'getValue'>> {}

declare const DateField: React.ComponentClass<DateFieldProps>

export default DateField
