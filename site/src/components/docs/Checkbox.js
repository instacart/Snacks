import React, {Fragment} from 'react'
import Playground from '../Playground'
import {Title3} from '../Typography'

export default () => (
  <Fragment>
    This component outputs a checkbox with an optional label.

    You can define whether the button starts in the pressed on unpressed state through the `isSelected` prop. In addition, you can change the selected/unselected state at any moment after the mount state by redifining the prop `isSelected`.

    <Title3>Label</Title3>
    Associating a label to every radio button is very important for accessibility purposes. There are two ways to do it. The easiest is to enclose the text with the component: <code>{`<Checkbox>My label</Checkbox>`}</code>. The other option is to associate a label yourself:

    <Playground>
      {`
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', marginBottom: 20}}>
            <Checkbox id="checkbox1" isSelected />
            <label htmlFor="checkbox1" style={{marginLeft: 10}}>Label associated manually</label>
          </div>
          <Checkbox id="checkbox2">Label auto-generated</Checkbox>
        </div>
      `}
    </Playground>

    <Title3>Styling</Title3>
    You can pass an object to the `style` prop for styling the label, radio button and wrap element using Radium's structure:

    <Playground>
      {`
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
      `}
    </Playground>


    <Title3>Callback</Title3>
    You can pass a callback through the `onChange` prop:

    <Playground>
      {`
        function onChange(event, props) {
          alert(\`This button is \${props.isSelected ? '' : 'not '}selected\`)
        }

        <Checkbox id="checkbox4" onChange={onChange}>Click me!</Checkbox>
      `}
    </Playground>

    <Title3>Disabling</Title3>
    You can disable a checkbox by declaring the `isDisabled` prop:

    <Playground>
      {`
        function onChange(event, props) {
          alert('This function will not be called')
        }

        <Checkbox id  ="checkbox5" onChange={onChange} isDisabled>I am disabled</Checkbox>
      `}
    </Playground>
    **Important!** If you attach a label to a checkbox manually, make sure the colors for the disabled state follow the styleguide.
  </Fragment>
)
