import * as React from 'react'

export interface ValidationErrorProps {
  /** A uniq id */
  inputId: string

  /** Error text */
  text?: React.ReactNode

  /** Whether to show the error or not */
  show?: boolean
}

declare const ValidationError: React.ComponentClass<ValidationErrorProps>

export default ValidationError
