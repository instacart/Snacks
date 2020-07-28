/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import * as Validator from 'validator'
import { GetRef } from '../..'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type ParametersAfterFirst<T extends (value: string, ...args: any[]) => any> = T extends (
  value: string,
  ...args: infer P
) => any
  ? P
  : never

type Validators = Omit<typeof Validator, 'toString' | 'version' | 'extend'>
type Validations = { [Key in keyof Validators]: ParametersAfterFirst<Validators[Key]> }

interface FormComponentProps {
  /** Model name for Form */
  name: string

  /** Disable the input; Will be removed from model in Form onSubmit callback */
  disabled?: boolean

  /** Uniq id for input */
  id?: string

  /** Mark input as required */
  required?: boolean

  /** Regex Validation pattern */
  regexValidation?: string

  /** Validations from validator.js */
  validations?: Validations
}

export interface FormComponentInjectedProps extends FormComponentProps {
  isValid: boolean
  serverError: null | string
  hasError: boolean
  id: string
}

interface FormComponentOuterProps<T extends React.ComponentType<any>>
  extends Partial<Pick<FormComponentInjectedProps, 'serverError' | 'hasError' | 'id' | 'isValid'>>,
    FormComponentProps,
    FormComponentRef<T> {}

type WithoutInjectedProps<P extends FormComponentInjectedProps> = Omit<
  P,
  keyof FormComponentInjectedProps
>

type FormComponentRef<T extends React.ComponentType<any>> = {
  ref?: React.Ref<{
    FormComponent: GetRef<T>
  }>
}

declare function formComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps
>(
  component: T & React.ComponentType<P>
): React.ComponentType<WithoutInjectedProps<P> & FormComponentOuterProps<T>>

// helper for applying hoc in .d.ts files
export type ApplyFormComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps = React.ComponentProps<T>
> = React.ComponentType<WithoutInjectedProps<P> & FormComponentOuterProps<T>>

export default formComponent
