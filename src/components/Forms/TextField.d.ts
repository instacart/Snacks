import * as React from 'react'
import { FormComponentInjectedProps, ApplyFormComponent } from './FormComponent'
import { WithThemeInjectedProps, ApplyWithThemeForwardRef } from '../../styles/themer/withTheme'
import { RadiumStyles, ElementAttributes } from '../..'

export interface TextFieldProps
  extends FormComponentInjectedProps,
    WithThemeInjectedProps,
    Pick<React.ComponentProps<'input'>, 'onFocus' | 'onBlur' | 'onKeyDown'> {
  /** Name of the field */
  name: string

  /** HTML autocomplete attribute */
  autoComplete?: string

  /** DefaultValue for non controlled component */
  defaultValue?: string

  /** Disable the text field */
  disabled: boolean

  /** Text of label that will animate when TextField is focused */
  floatingLabelText?: string

  /** Sets width to 100% */
  fullWidth?: boolean

  /** Sets width to 162px */
  halfWidth?: boolean

  /** Helper text will show up in bottom right corner below TextField */
  helperText?: string

  /** Hint text will show up when input is focused and there is no value */
  hintText?: string

  /** Uniq id for input */
  id: string

  /** Style for input */
  inputStyle?: RadiumStyles

  /** Style for input */
  labelStyle?: RadiumStyles

  /** Set by FormComponent by default.   */
  isValid: boolean

  /** onChange callback */
  onChange?(e: React.ChangeEvent<HTMLInputElement>, value: string): void

  /** Mark the field as required.  */
  required?: boolean

  /** Error from server to show ServerError message */
  serverError: string | null

  /** Wrapper styles */
  style?: RadiumStyles

  /** Input type ie. 'text', 'email', password, etc..  */
  type?: string

  /** Text to show for validation error  */
  validationErrorText?: string

  /** Value will make TextField a controlled component  */
  value?: string

  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes?: ElementAttributes<React.ComponentPropsWithoutRef<'input'>>
}

declare class TextFieldBase extends React.Component<TextFieldProps> {
  triggerFocus(): void
}

declare const TextField: ApplyWithThemeForwardRef<ApplyFormComponent<typeof TextFieldBase>>

export default TextField
