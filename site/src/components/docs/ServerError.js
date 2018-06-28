import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

ServerError Example:

<Playground>
{`
<div>
  <TextField
    name="test"
    type="email"
    floatingLabelText="Email"
    hintText="Enter your email address"
    serverError="The email you have entered is already taken"
    defaultValue="foobar@instacart.com"
    isValid={false}
  />
</div>
`}
</Playground>

)
