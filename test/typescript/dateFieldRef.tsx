import * as React from 'react'
import { DateField, GetRef } from '../../src'

interface Props {
  value: string
  onChange: (changeEvent: React.ChangeEvent<HTMLInputElement>) => void
}

export class MyField extends React.Component<Props> {
  private inputRef = React.createRef<GetRef<typeof DateField>>()

  componentDidMount = () => {
    if (this.inputRef.current) {
      console.log(this.inputRef.current)
      this.inputRef.current.triggerFocus()
    }
  }

  render() {
    const { value, onChange } = this.props

    return (
      <DateField
        ref={this.inputRef}
        name="search"
        value={value}
        onChange={onChange}
        floatingLabelText="search"
        autoComplete="off"
      />
    )
  }
}
