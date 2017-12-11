### Groups
Create a radio button group where only one radio button can be selected at a time.

```js
<RadioGroup name="radioContact">
  <Radio id="radioContactGroup1" value="email">Email</Radio>
  <Radio id="radioContactGroup2" value="phone">Phone</Radio>
  <Radio id="radioContactGroup3" value="mail">Mail</Radio>
</RadioGroup>
```

### Styling
You can pass an object to the `styles` prop for styling the parent element. Optionally, you can pass styles to each radio button:
```js
<RadioGroup name="radioColors" styles={{wrapEl: {border: '2px dotted lightblue', padding: 20}}}>
  <Radio id="radioColorGroup1" value="email" styles={{label: {color: 'green'}}}>Green</Radio>
  <Radio id="radioColorGroup2" value="phone" styles={{label: {color: 'red'}}}>Red</Radio>
  <Radio id="radioColorGroup3" value="mail" styles={{label: {color: 'blue'}}}>Blue</Radio>
</RadioGroup>
```

### Callback
You can keep track of the currently selected radio button by passing a callback to the `onChange` prop:
```js
function alertMeal(value, props) {
  alert(`The current meal is "${value}" and the id is "${props.id}"`)
}

<RadioGroup name="radioMeal" onChange={alertMeal}>
  <Radio id="radioMealGroup1" value="sushi">Sushi</Radio>
  <Radio id="radioMealGroup2" value="hamburger">Hamburger</Radio>
  <Radio id="radioMealGroup3" value="soup">Soup</Radio>
</RadioGroup>
```

### Disabeling radio buttons
You can disable radio buttons inside a group and the remaining enabled buttons will function as expected. Note that if you passed both `isSelected` and `isDisabled` the former will be ignored (see example below).
```js
function alertCity(value, props) {
  alert(`The selected city is "${value}"`)
}

<RadioGroup name="radioCity" onChange={alertCity}>
  <Radio id="radioCityGroup1" value="New York" isDisabled>New York</Radio>
  <Radio id="radioCityGroup2" value="San Fracisco" isSelected isDisabled>San Francisco</Radio>
  <Radio id="radioCityGroup3" value="Chicago">Chicago</Radio>
  <Radio id="radioCityGroup4" value="Chicago">San Diego</Radio>
  <Radio id="radioCityGroup5" value="Chicago">Atlanta</Radio>
</RadioGroup>
```
