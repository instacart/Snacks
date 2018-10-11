import React              from 'react'
import MaskedTextField    from './MaskedTextField'

const mask = [/\d|/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
const hint = 'MM/DD/YYYY'

const getValue = (value) => value

class DateField extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  getValue = () => {
    if (!this.input) {
      return null
    }

    return this.input.getValue()
  }

  render() {
    return (
      <MaskedTextField
        type='tel'
        mask={mask}
        maskHint={hint}
        getValue={getValue}
        ref={(ref) => this.input = ref}
        {...this.props}
      />
    )
  }
}

export default DateField

