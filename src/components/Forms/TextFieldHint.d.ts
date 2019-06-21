import * as React from 'react'
import { RadiumStyles } from '../..'

export interface TextFieldHintProps {
  /** Hint Text */
  text: React.ReactNode

  /** Disabled styling */
  disabled?: boolean

  /** Show the hint text */
  show?: boolean

  /** Override styles */
  style?: RadiumStyles

  /** A uniq id */
  inputId: string
}

declare const TextFieldHint: React.ComponentClass<TextFieldHintProps>

export default TextFieldHint
