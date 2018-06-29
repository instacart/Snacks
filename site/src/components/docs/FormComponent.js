import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

Read more @ https://github.com/nbwar/icformable

<Playground>
{`
  @FormComponent
  class ICCustomInput extends React.Component {
    static propTypes = {
      name    : React.PropTypes.string.isRequired,
      disabled: React.PropTypes.bool,
      required: React.PropTypes.bool,
    }

    render() {
      return (
        <div>
          <input
            name={this.props.name}
            disabled={this.props.disabled}
            required={this.props.required}
          />
        </div>
      )
    }
  }
`}
</Playground>

)
