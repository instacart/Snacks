This component outputs a switch with an optional label.

You can define whether the button starts in the pressed on unpressed state through the `isSelected` prop. In addition, you can change the selected/unselected state at any moment after the mount state by redifining the prop `isSelected`.

### Label
Associating a label to every switch button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: `<Switch>My label</Switch>`. The other option is to associate a label yourself:

```js
<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <Switch id="switch1" isSelected />
    <label htmlFor="switch1" style={{marginLeft: 10, lineHeight: '22px'}}>Label associated manually</label>
  </div>
  <Switch id="switch2">Label auto-generated</Switch>
</div>
```
**Important!** If you attach a label to a switch manually, make sure you set the line-height and margin-left properties as per the example above.

### Styling
You can pass an object to the `style` prop for styling the label, radio button and wrap element using Radium's structure:
```js
<Switch
  id="switch3"
  wrapEl='span'
  style={{
    wrapEl: {padding: 10, border: '2px dotted lightblue'},
    button: {marginRight: 40},
    label: {color: 'salmon'},
  }}
>
  My Switch Button Label
</Switch>
```


### Callback
You can pass a callback through the `onChange` prop:

```js
function onChange(event, props) {
  alert(`This button is ${props.isSelected ? '' : 'not '}selected`)
}

<Switch id="switch4" onChange={onChange}>Click me!</Switch>
```

### Disabling
You can disable a switch by declaring the `isDisabled` prop:

```js
function onChange(event, props) {
  alert(`This function will not be called`)
}

<Switch id  ="switch5" onChange={onChange} isDisabled>I am disabled</Switch>
```
**Important!** If you attach a label to a switch manually, make sure the colors for the disabled state follow the styleguide.
