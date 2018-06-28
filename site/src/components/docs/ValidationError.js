import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

ValidationError is small red styled text that is used for clientside validation errors. ex TextField:

<Playground>
{`
  <div>
    <TextField
      name="email"
      type="email"
      floatingLabelText="Email"
      hintText="Enter your email address"
      validations={{isEmail: null, isLength: {min: 3, max: 15}}}
      validationErrorText="Please enter a valid email"
      defaultValue="foobars.com"
      isValid={false}
      required
    />
  </div>
`}
</Playground>

)
