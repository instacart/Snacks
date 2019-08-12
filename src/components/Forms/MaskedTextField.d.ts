import * as React from 'react'
import { MaskedInputProps } from 'react-text-mask'
import { Interpolation } from '@emotion/core'
import { FormComponentInjectedProps, ApplyFormComponent } from './FormComponent'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export interface MaskedTextFieldProps
  extends FormComponentInjectedProps,
    WithThemeInjectedProps,
    Pick<React.ComponentProps<'input'>, 'onFocus' | 'onBlur' | 'onKeyDown'> {
  className?: string

  /** Name of the field */
  name: string

  /**
   * Transforms the raw value from the input
   *
   * @example strips slashes from a phone number
   *   (value) => value.replace(NON_DIGIT_REGEX, '')
   *
   * @param rawValue the raw value
   * @returns the transformed value
   */
  getValue(rawValue: string): string

  /** The mask */
  mask: MaskedInputProps['mask']

  /** The pipe mask */
  pipe?: MaskedInputProps['pipe']

  /** The mask hint */
  maskHint: string

  /** The type of the input */
  type: string

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

  /** FormComponent error for validation */
  hasError: boolean

  /** Helper text will show up in bottom right corner below TextField */
  helperText?: string

  /** Uniq id for input */
  id: string

  /** Style for input */
  inputStyle: Interpolation

  /** Set by FormComponent by default.   */
  isValid: boolean

  /**
   * onChange callback
   *
   * @param e The change event
   * @param value The value from the input with `(`, `)`, space, and `-` characters removed
   * @param rawValue The raw value from the input
   */
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: ReturnType<MaskedTextFieldProps['getValue']>,
    rawValue: string
  ) => void

  /** Mark the field as required.  */
  required?: boolean

  /** Error from server to show ServerError message */
  serverError: string | null

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Text to show for validation error  */
  validationErrorText?: string

  /** Value will make TextField a controlled component  */
  value?: string
}

declare const MaskedTextField: ApplyWithTheme<
  ApplyFormComponent<React.ComponentClass<MaskedTextFieldProps>>
>

export default MaskedTextField
