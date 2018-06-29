import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

TextField Example:

<Playground>
{`
<div style={{width: '335px'}}>
  <div style={{marginBottom: '10px'}}>
    <TextField
      style={{marginRight: '5px'}}
      name="first_name"
      type="text"
      floatingLabelText="First Name"
      halfWidth
      required
    />
    <TextField
      style={{marginLeft: '5px'}}
      name="last_name"
      type="text"
      floatingLabelText="Last Name"
      halfWidth
      required
    />
  </div>
  <div style={{marginBottom: '10px'}}>
    <TextField
      name="email"
      type="email"
      floatingLabelText="Email"
      hintText="Enter your email address"
      validations={{isEmail: null, isLength: {min: 3, max: 15}}}
      validationErrorText="Please enter a valid email"
      fullWidth
      required
    />
  </div>

  <div>
    <TextField
      name="password"
      type="password"
      floatingLabelText="Password"
      hintText="Enter a secure password"
      validations={{isLength: {min: 6}}}
      validationErrorText="Password must be at least 6 characters"
      fullWidth
      required
    />
  </div>
</div>
`}
</Playground>

)
