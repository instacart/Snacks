The PhoneNumberField is similar to the TextField component, but with input masking and validations for US phone numbers.

PhoneNumberField Example:

```jsx static
(
  <Form
    onSubmit={(model) => ( console.log(model) )}
    serverErrors={{}}
    formProps={{}}
  >
    <div style={{ marginBottom: '15px' }}>
      <PhoneNumberField
        name="phone"
        floatingLabelText="Phone Number"
        validationErrorText="Please enter a valid phone number"
        validations={{isLength: {min: 10, max: 10}}}
        halfWidth
        required
      />
    </div>

    <Button type="submit">
      Submit
    </Button>
  </Form>
)
```

In a future release, this component will also support phone numbers from outside the US.
