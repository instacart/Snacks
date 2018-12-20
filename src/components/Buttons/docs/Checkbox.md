This component outputs a checkbox with an optional label.

You can define whether the button starts in the pressed on unpressed state through the `isSelected` prop. In addition, you can change the selected/unselected state at any moment after the mount state by redifining the prop `isSelected`.

### Label
Associating a label to every checkbox button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: `<Checkbox>My label</Checkbox>`. The other option is to associate a label yourself:

```js
<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <Checkbox id="checkbox1" isSelected />
    <label htmlFor="checkbox1" style={{marginLeft: 10, lineHeight: '22px'}}>Label associated manually</label>
  </div>
  <Checkbox id="checkbox2">Label auto-generated</Checkbox>
</div>
```
**Important!** If you attach a label to a checkbox manually, make sure you set the line-height and margin-left properties as per the example above.

### Styling
You can pass an object to the `style` prop for styling the label, radio button and wrap element using Radium's structure:
```js
<Checkbox
  id="checkbox3"
  wrapEl='span'
  style={{
    wrapEl: {padding: 10, border: '2px dotted lightblue'},
    button: {marginRight: 40},
    label: {color: 'salmon'},
  }}
>
  My Checkbox Button Label
</Checkbox>
```


### Callback
You can pass a callback through the `onChange` prop:

```js
function onChange(event, props) {
  alert(`This button is ${props.isSelected ? '' : 'not '}selected`)
}

<Checkbox id="checkbox4" onChange={onChange}>Click me!</Checkbox>
```

### Disabling
You can disable a checkbox by declaring the `isDisabled` prop:

```js
function onChange(event, props) {
  alert(`This function will not be called`)
}

<Checkbox id  ="checkbox5" onChange={onChange} isDisabled>I am disabled</Checkbox>
```
**Important!** If you attach a label to a checkbox manually, make sure the colors for the disabled state follow the styleguide.
