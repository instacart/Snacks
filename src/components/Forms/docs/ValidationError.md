ValidationError is small red styled text that is used for clientside validation errors. ex TextField:

```js
<div>
  <TextField
    name="test"
    type="email"
    floatingLabelText="Email"
    hintText="Enter your email address"
    validationErrorText="Please enter a valid email address."
    value="foobars.com"
    isValid={false}
  />
</div>
```
