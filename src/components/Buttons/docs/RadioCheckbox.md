This component outputs a radio button or a checkbox.

The programming logic behind producing these buttons is the same. The difference is in the props `btnType`. It defaults to radio if undefined.

You can define whether the button starts in the pressed on unpressed state through the `isChecked` props.

### Label
Associating a label for every radio or checkbox button is very important for accessibility purposes. Use the `id` and `htmlFor` attributes to link them.

There are times when it makes sense to have screenreaders say something different to what the label displays. For those cases, pass an aria label using the aria shape defined in the props.

### Radio
The component defaults to a radio button is a `btnType` is undefined. You can also pass the value `radio`. Also, you can pass a callback through the props `onClick` that returns both the click event and the checked/unchecked state.

```js
function onClick(event, isChecked) {
  alert(`This button is ${isChecked ? '' : 'not '}checked`)
}

<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <RadioCheckbox id="radio1" onClick={onClick} />
    <label htmlFor="radio1">Click me with callback</label>
  </div>
  <div style={{display: 'flex'}}>
    <RadioCheckbox id="radio2" isChecked />
    <label htmlFor="radio2">Click me</label>
  </div>
</div>
```

### Checkbox
Pass a value of `checkbox` to `btnType` and a checkbox will be generated.

```js
function onClick(event, isChecked) {
  alert(`This button is ${isChecked ? '' : 'not '}checked`)
}

<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <RadioCheckbox id="checkbox1" btnType='checkbox' onClick={onClick} />
    <label htmlFor="checkbox1">Checkbox with callback</label>
  </div>
  <div style={{display: 'flex'}}>
    <RadioCheckbox id="checkbox2" btnType='checkbox' isChecked />
    <label htmlFor="checkbox2">Click me</label>
  </div>
</div>
```



