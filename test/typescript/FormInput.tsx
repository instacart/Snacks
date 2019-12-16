import * as React from 'react'
import { useImperativeHandle } from 'react'

import { withTheme, FormComponent } from '../../src'
import { WithThemeInjectedProps } from '../../src/styles/themer/withTheme'
import { FormComponentInjectedProps } from '../../src/components/Forms/FormComponent'

interface FormInputRefApi {
  focus(): void
}

interface FormInputProps extends WithThemeInjectedProps, FormComponentInjectedProps {}

const FormInput = React.forwardRef<FormInputRefApi, FormInputProps>((_, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current && inputRef.current.focus()
    },
  }))

  return <input ref={inputRef} />
})

export const Test = withTheme()(FormComponent(FormInput))
export const Test2 = withTheme({ forwardRef: false })(FormComponent(FormInput))

export default withTheme({ forwardRef: true })(FormComponent(FormInput))
