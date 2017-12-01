
```js
<Form
  onSubmit={(model) => ( console.log(model) ) }
  serverErrors={{}}
  formProps={{}}
>
  <div style={{width: '335px'}}>
    <div style={{marginBottom: '10px'}}>
      <TextField
        name="email"
        type="email"
        floatingLabelText="Email"
        hintText="Enter your email address"
        validations={{isEmail: null, isLength: {min: 3, max: 50}}}
        validationErrorText="Please enter a valid email"
        fullWidth
        required
      />
    </div>

    <div style={{marginBottom: '10px'}}>
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

    <div>
      <Select
        name="country"
        floatingLabelText="Country"
        hintText="Select a country"
        validationErrorText="Please select a country."
        fullWidth
        required
      >
        <MenuItem label="United States" value="US"/>
        <MenuItem label="Canada" value="CA"/>
      </Select>
    </div>


    <div style={{marginTop: '10px'}}>
      <Button type="submit">
        Submit
      </Button>
    </div>
  </div>
</Form>

```
