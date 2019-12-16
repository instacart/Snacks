/* eslint-disable */
import * as React from 'react'
import FooTest, { FooTestRefApi } from './FooTest'

export class FooRefTest extends React.Component {
  testRef = React.createRef<FooTestRefApi>()

  componentDidMount = () => {
    this.testRef.current && this.testRef.current.focus()
  }

  render() {
    return <FooTest ref={this.testRef} />
  }
}
