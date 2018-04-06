The PhoneNumberField is similar to the TextField component, but with input masking and validations for US phone numbers.

PhoneNumberField Example:

```js
<div style={{width: '335px'}}>
  <PhoneNumberField
    name="phone"
    floatingLabelText="Phone Number"
    halfWidth
    required
  />
</div>
```

In a future release, this component will also support phone numbers from outside the US.