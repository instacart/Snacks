import * as React from 'react'
import { TextField } from '../../src'

interface Props {
  value: string
  onChange: (changeEvent: React.ChangeEvent<HTMLInputElement>) => void
}

export class MyField extends React.Component<Props> {
  private inputRef = React.createRef<InstanceType<typeof TextField>>()

  componentDidMount = () => {
    if (this.inputRef.current) {
      this.inputRef.current.wrapped.FormComponent.triggerFocus()
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
