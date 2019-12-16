import * as React from 'react'

import { withTheme } from '../../src'
import { WithThemeInjectedProps } from '../../src/styles/themer/withTheme'

export interface InputRefApi {
  focus(): void
}

interface InputProps extends WithThemeInjectedProps {}

const Input = React.forwardRef<InputRefApi, InputProps>((_, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current && inputRef.current.focus()
    },
  }))

  return <input ref={inputRef} />
})

export default withTheme({ forwardRef: true })(Input)
