This component outputs a checkbox with an optional label.

You can define whether the button starts in the pressed on unpressed state through the `isChecked` prop. In addition, you can change the checked/unchecked state at any moment after the mount state by redifining the prop `isChecked`.

### Label
Associating a label to every radio button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: `<Checkbox>My label</Checkbox>`. The other option is to associate a label yourself:

```js
<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <Checkbox id="checkbox1" isChecked />
    <label htmlFor="checkbox1" style={{marginLeft: 10}}>Label associated manually</label>
  </div>
  <Checkbox id="checkbox2">Label auto-generated</Checkbox>
</div>
```

### Styling
You can pass an object to the `styles` prop for styling the label, radio button and wrap element using Radium's structure:
```js
<Checkbox
  id="checkbox3"
  wrapEl='span'
  styles={{
    wrapEl: {padding: 10, border: '2px dotted lightblue'},
    button: {marginRight: 40},
    label: {color: 'salmon'},
  }}
>
  My Checkbox Button Label
</Checkbox>
```


### Callback
You can pass a callback through the `onClick` prop:

```js
function onClick(event, props) {
  alert(`This button is ${props.isSelected ? '' : 'not '}checked`)
}

<Checkbox id="checkbox4" onClick={onClick}>Click me!</Checkbox>
```

### Disabling
You can disable a checkbox by declaring the `isDisabled` prop:

```js
function onClick(event, props) {
  alert(`This function will not be called`)
}

<Checkbox id  ="checkbox5" onClick={onClick} isDisabled>I am disabled</Checkbox>
```
**Important!** If you attach a label to a checkbox manually, make sure the colors for the disabled state follow the styleguide.
