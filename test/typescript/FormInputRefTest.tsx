/* eslint-disable react/no-multi-comp, max-classes-per-file */
import * as React from 'react'
import FormInput from './FormInput'
import { GetRef } from '../../src'
import FormInputClass from './FormInputClass'

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

export class FormInputClassTest extends React.Component {
  testRef = React.createRef<GetRef<typeof FormInputClass>>()

  componentDidMount = () => {
    this.testRef.current && this.testRef.current.FormComponent.focus()
  }

  renderAnother() {
    return <FormInputClass name="foo" ref={node => node && node.FormComponent.focus()} />
  }

  render() {
    return <FormInputClass name="foo" ref={foo => foo && foo.FormComponent} />
  }
}
