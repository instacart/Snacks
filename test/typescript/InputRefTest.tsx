/* eslint-disable */
import * as React from 'react'
import Input, { InputRefApi } from './Input'

export class InputTest extends React.Component {
  testRef = React.createRef<InputRefApi>()

  componentDidMount = () => {
    this.testRef.current && this.testRef.current.focus()
  }

  render() {
    return <Input ref={this.testRef} />
  }
}
