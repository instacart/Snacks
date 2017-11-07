#### Features

* Function and flexible validation using Validator.js (https://github.com/chriso/validator.js) or custom regex
* Flexibility to build custom inputs
* onSubmit callback with form model serialized. No more “e.target.value” for every input!
* Pass “serverErrors” to the form that will map to each component appropriately

## Build Custom Components

#### FormComponent

In order to build custom inputs you'll want to use FormComponent as a Higher Order Component to inherit validation and form functionality.

**Props:**

* **name** (required) - the key for the form model
* **disabled** - to disable the input
* **required** - to mark the field as a required field
* **regexValidation** - a regex string to validate via regex
* **validations** - Validator.js (https://github.com/chriso/validator.js) validations use syntax: {validatorMethod: arguments}

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

    <div style={{marginTop: '10px'}}>
      <Button type="submit">
        Submit
      </Button>
    </div>
  </div>
</Form>

```
