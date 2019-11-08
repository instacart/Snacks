import * as React from 'react'
import FormInput from './FormInput'
import { GetRef } from '../../src'

export class FormInputTest extends React.Component {
  testRef = React.createRef<GetRef<typeof FormInput>>()

  componentDidMount = () => {
    this.testRef.current && this.testRef.current.FormComponent.focus()
  }

  renderAnother() {
    return <FormInput name="foo" ref={node => node && node.FormComponent.focus()} />
  }

  render() {
    return <FormInput name="foo" ref={this.testRef} />
  }
}
