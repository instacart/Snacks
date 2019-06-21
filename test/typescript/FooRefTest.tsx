/* eslint-disable */
import * as React from 'react'
import FooTest from './FooTest'

export class FooRefTest extends React.Component {
  testRef = React.createRef<InstanceType<typeof FooTest>>()

  componentDidMount = () => {
    this.testRef.current && this.testRef.current.wrapped
  }

  render() {
    return <FooTest ref={this.testRef} />
  }
}
