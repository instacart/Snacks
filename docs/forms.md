The Form wrapper provides a consistent way to create forms, inputs, and validations using React.

#### Features

* Function and flexible validation using Validator.js (https://github.com/chriso/validator.js) or custom regex
* Flexibility to build custom inputs
* onSubmit callback with form model serialized. No more “e.target.value” for every input!
* Pass “serverErrors” to the form that will map to each component appropriately

## How to use

### Form

The base component to wrap all input types in to inherit Form callbacks and validations.

**Props:**

* **onSubmit** - Submit callback that will provide model object w/ form values with key being “name” attribute
* **serverErrors** - marks errors on each input based on the input's “name” attribute
* **formProps** - Props to pass to html <form> element

```js static
import { Form, TextField } from 'ic-snacks'

class SomeComponent extends React.Component {
  state = {
    serverErrors: null
  }

  handleFormSubmit = (model) => {
    console.log(model)
  }

  render() {
    const formProps = {} // HTML form props

    return (
      <Form
        onSubmit={this.handleFormSubmit}
        serverErrors={this.state.serverErrors}
        formProps={formProps}
      >
        <TextField
          floatingLabelText="Email"
          name="email"
          hintText="jonnyappleseed@example.com"
          validations={{isEmail: null, isLength: {min: 3, max: 15}}}
          validationErrorText="Sorry, please enter a valid email."
          required
        />
        <button type="submit"> Submit </button>
      </Form>
    )
  }
}

export default SomeComponent
```


## Build Custom Components

**FormComponent**

In order to build custom inputs you'll want to use FormComponent as a Higher Order Component to inherit validation and form functionality.

**Props:**

* **name** (required) - the key for the form model
* **disabled** - to disable the input
* **required** - to mark the field as a required field
* **regexValidation** - a regex string to validate via regex
* **validations** - Validator.js (https://github.com/chriso/validator.js) validations use syntax: {validatorMethod: arguments}

```js static
import { FormComponent } from 'ic-snacks'

@FormComponent
class CustomInput extends React.Component {
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

export default CustomInput
```
