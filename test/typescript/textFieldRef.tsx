import * as React from 'react'
import { TextField, GetRef } from '../../src'

interface Props {
  value: string
  onChange: (changeEvent: React.ChangeEvent<HTMLInputElement>) => void
}

export class MyField extends React.Component<Props> {
  private inputRef = React.createRef<GetRef<typeof TextField>>()

  componentDidMount = () => {
    if (this.inputRef.current) {
      console.log(this.inputRef.current)
      this.inputRef.current.FormComponent.triggerFocus()
    }
  }

  render() {
    const { value, onChange } = this.props

    return (
      <TextField
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
