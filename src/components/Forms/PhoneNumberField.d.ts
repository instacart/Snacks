import * as React from 'react'
import { MaskedTextFieldProps } from './MaskedTextField'
import { Omit } from '../..'

export interface PhoneNumberFieldProps
  extends Omit<MaskedTextFieldProps, 'mask' | 'getValue'>,
    Partial<Pick<MaskedTextFieldProps, 'mask' | 'getValue'>> {}

declare const PhoneNumberField: React.ComponentClass<PhoneNumberFieldProps>

export default PhoneNumberField
