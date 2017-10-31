This component outputs a radio button with an optional label.

You can define whether the button starts in the pressed on unpressed state through the `isChecked` prop. In addition, you can change the checked/unchecked state at any moment after the mount state by redifining the prop `isChecked`.

### Label
Associating a label to every radio button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: `<Radio>My label<Radio>`. The other option is to associate a label yourself:

```js
<div style={{display: 'flex', flexDirection: 'column'}}>
  <div style={{display: 'flex', marginBottom: 20}}>
    <Radio id="radio1" isChecked />
    <label htmlFor="radio1">Label associated manually</label>
  </div>
  <Radio id="radio2">Label auto-generated</Radio>
</div>
```

### Styling
You can pass an object to the `styles` prop for styling the label, radio button and wrap element using Radium's structure:
```js
<Radio
  id="radio3"
  wrapEl='span'
  styles={{
    wrapEl: {padding: 10, border: '1px dotted gray'},
    button: {':hover': {backgroundColor: 'salmon', borderRadius: '50%'}},
    label: {color: 'salmon'},
  }}
>
  My Radio Button Label
</Radio>
```


### Callback
You can pass a callback through the `onClick` prop:

```js
function onClick(event, isChecked) {
  alert(`This button is ${isChecked ? '' : 'not '}checked`)
}

<Radio id="radio4" onClick={onClick}>Click me!</Radio>
```
