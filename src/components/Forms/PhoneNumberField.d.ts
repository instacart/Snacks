import * as React from 'react'
import MaskedTextField from './MaskedTextField'
import { Omit } from '../..'

export interface PhoneNumberFieldProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof MaskedTextField>,
      'type' | 'mask' | 'maskHint' | 'getValue'
    >,
    Partial<
      Pick<React.ComponentPropsWithoutRef<typeof MaskedTextField>, 'mask' | 'pipe' | 'getValue'>
    > {}

declare class PhoneNumberField extends React.Component<PhoneNumberFieldProps> {
  triggerFocus(): void
}

export default PhoneNumberField
