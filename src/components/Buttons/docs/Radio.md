This component outputs a radio button with an optional label.

You can define whether the button starts in the pressed on unpressed state through the `isSelected` prop. In addition, you can change the selected/unselected state at any moment after the mount state by redifining the prop `isSelected`.

**Note:** Radio buttons are not supposed to be unselected once pressed. If you need that behavior, a button or a checkbox is a better solution.

### Label
Associating a label to every radio button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: `<Radio>My label<Radio>`. The other option is to associate a label yourself:

```js
<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <Radio id="radio1" isSelected />
    <label htmlFor="radio1" style={{marginLeft: 10}}>Label associated manually</label>
  </div>
  <Radio id="radio2">Label auto-generated</Radio>
</div>
```

### Groups
To create a radio group where only one button can be selected [see here](#radiogroup).

### Styling
You can pass an object to the `style` prop for styling the label, radio button and wrap element using Radium's structure:
```js
<Radio
  id="radio3"
  wrapEl='span'
  style={{
    wrapEl: {padding: 10, border: '2px dotted lightblue'},
    button: {marginRight: 40},
    label: {color: 'salmon'},
  }}
>
  My Radio Button Label
</Radio>
```


### Callback
You can pass a callback through the `onChange` prop:

```js
function onChange(event, props) {
  alert(`This button is ${props.isSelected ? '' : 'not '}selected`)
}

<Radio id="radio4" onChange={onChange}>Click me!</Radio>
```

### Disabling
You can disable a checkbox by declaring the `isDisabled` prop:

**Important!** If you attach a label to a Radio button manually, make sure the styleguide is followed for the disabled state.

```js
function onChange(event, props) {
  alert(`This function will not be called`)
}

<Radio id="radio5" onChange={onChange} isDisabled>I am disabled</Radio>
```
