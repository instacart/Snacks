import * as React from 'react'
import { Interpolation } from '@emotion/core'
import { FormComponentInjectedProps, ApplyFormComponent } from './FormComponent'
import { WithThemeInjectedProps, ApplyWithTheme } from '../../styles/themer/withTheme'

export type Option<TValue = string | number | boolean> = {
  label: string
  value: TValue
}

export interface SelectProps extends FormComponentInjectedProps, WithThemeInjectedProps {
  /** Name of the field */
  name: string

  className?: string

  /** Children are passed to Menu and should be MenuItems or MenuDivider */
  children?: React.ReactNode

  /** DefaultOption */
  defaultOption?: Option

  /** Disable the text field */
  disabled?: boolean

  /** Text of label that will animate when TextField is focused */
  floatingLabelText?: string

  /** Sets width to 100% */
  fullWidth?: boolean

  /** Sets width to 162px */
  halfWidth?: boolean

  /** FormComponent error for validation */
  hasError: boolean

  /** Hint text will show up when the Select is open and there is no value */
  hintText?: string

  /** Uniq id for Select */
  id: string

  /** Handled by FormComponent after running built in validations */
  isValid: boolean

  /** onOpen callback */
  onOpen(): void

  /** onClose callback */
  onClose(): void

  /** onFocus callback */
  onFocus: React.ComponentPropsWithoutRef<'div'>['onFocus']

  /** onSelect callback returns option object {label: , value:} */
  onSelect(e: React.MouseEvent<HTMLElement>, option: Option): void

  /** onBlur callback */
  onBlur: React.ComponentPropsWithoutRef<'div'>['onBlur']

  /** Mark the field as required.  */
  required?: boolean

  /** Control the component selection manually */
  selectedOption: Option

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
}

declare const Select: ApplyWithTheme<ApplyFormComponent<React.ComponentClass<SelectProps>>>

export default Select
