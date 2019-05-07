ValidationError is small red styled text that is used for clientside validation errors. ex TextField:

```jsx
import { TextField } from 'ic-snacks'

; <div>
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
```
