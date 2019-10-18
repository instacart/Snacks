/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import * as Validator from 'validator'

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

interface FormComponentOuterProps<P>
  extends Partial<Pick<FormComponentInjectedProps, 'serverError' | 'hasError' | 'id' | 'isValid'>>,
    FormComponentProps,
    FormComponentRef<P> {}

type WithoutInjectedProps<P extends FormComponentInjectedProps> = Omit<
  P,
  keyof FormComponentInjectedProps
>

type FormComponentRef<P> = {
  ref?: React.Ref<{
    FormComponent: 'ref' extends keyof P
      ? P extends { ref?: React.Ref<infer R> }
        ? R
        : never
      : never
  }>
}

declare function formComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps = React.ComponentProps<T>
>(
  component: T
): React.ComponentType<WithoutInjectedProps<React.PropsWithoutRef<P>> & FormComponentOuterProps<P>>

// helper for applying hoc in .d.ts files
export type ApplyFormComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps = React.ComponentProps<T>
> = React.ComponentType<WithoutInjectedProps<React.PropsWithoutRef<P>> & FormComponentOuterProps<P>>

export default formComponent
