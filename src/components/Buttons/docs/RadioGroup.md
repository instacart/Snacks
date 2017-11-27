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
