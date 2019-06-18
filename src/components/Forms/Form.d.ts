import * as React from 'react'
import { FormComponentInjectedProps } from './FormComponent'

export interface Model {
  [key: string]: string
}

type FormComponent = React.Component<FormComponentInjectedProps>

export interface FormProps {
  /** Form html chilren */
  children?: React.ReactNode

  /** HTML form attributes */
  formProps?: React.ComponentPropsWithRef<'form'>

  /** onSubmit callback will pass in model as parameter */
  onSubmit(model: { [key: string]: string }): void

  /** onValidationError callback will pass in invalid FormComponents as parameter */
  onValidationError(invalidComponents: FormComponent[]): void

  /** errors from server mapped to model names. Will attach serverErrors styling to FormComppnents */
  serverErrors: null | { [key: string]: string }
}

declare const Form: React.ComponentClass<FormProps>

export default Form
