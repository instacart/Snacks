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
type Validations = Partial<{ [Key in keyof Validators]: ParametersAfterFirst<Validators[Key]> }>

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
  ref(node: React.Component): void
  serverError: null | string
  hasError: boolean
  id: string
}

interface FormComponent<P, T> extends React.Component<P> {
  FormComponent: T
}

type FormComponentClass<P, T> = React.ClassType<P, FormComponent<P, T>, React.ComponentClass<P>>

type FormComponentOuterProps<P extends FormComponentInjectedProps> = Omit<
  P,
  keyof FormComponentInjectedProps
> &
  Partial<Pick<FormComponentInjectedProps, 'serverError' | 'hasError' | 'id' | 'isValid'>> &
  FormComponentProps

// helper for applying hoc in .d.ts files
export type ApplyFormComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps = React.ComponentProps<T>
> = T extends React.ComponentClass<P>
  ? FormComponentClass<FormComponentOuterProps<P>, InstanceType<T>>
  : FormComponentClass<FormComponentOuterProps<P>, never>

declare function formComponent<
  T extends React.ComponentType<P>,
  P extends FormComponentInjectedProps = React.ComponentProps<T>
>(
  component: T
): T extends React.ComponentClass<P>
  ? FormComponentClass<FormComponentOuterProps<P>, InstanceType<T>>
  : FormComponentClass<FormComponentOuterProps<P>, never>

export default formComponent
