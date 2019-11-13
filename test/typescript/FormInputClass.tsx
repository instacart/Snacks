import * as React from 'react'

import { withTheme, FormComponent } from '../../src'
import { WithThemeInjectedProps } from '../../src/styles/themer/withTheme'
import { FormComponentInjectedProps } from '../../src/components/Forms/FormComponent'

interface FormInputProps extends WithThemeInjectedProps, FormComponentInjectedProps {}

class FormInputClass extends React.Component<FormInputProps> {
  inputRef = React.createRef<HTMLInputElement>()

  focus = () => {
    this.inputRef.current && this.inputRef.current.focus()
  }

  render() {
    return <input ref={this.inputRef} />
  }
}

export default withTheme(FormComponent(FormInputClass))
