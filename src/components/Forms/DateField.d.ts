import * as React from 'react'
import MaskedTextField from './MaskedTextField'
import { Omit } from '../..'

export interface DateFieldProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof MaskedTextField>,
      'type' | 'mask' | 'maskHint' | 'getValue'
    >,
    Partial<
      Pick<React.ComponentPropsWithoutRef<typeof MaskedTextField>, 'mask' | 'pipe' | 'getValue'>
    > {}

declare class DateField extends React.Component<DateFieldProps> {
  triggerFocus(): void
}

export default DateField
