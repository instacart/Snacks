import React, {Fragment} from 'react'
import Playground from '../Playground'
import {Title3} from '../Typography'

export default () => (
  <Fragment>
    <Title3>Groups</Title3>
    Create a radio button group where only one radio button can be selected at a time.

    <Playground>
      {`
        <RadioGroup name="radioContact">
          <Radio id="radioContactGroup1" value="email">Email</Radio>
          <Radio id="radioContactGroup2" value="phone">Phone</Radio>
          <Radio id="radioContactGroup3" value="mail">Mail</Radio>
        </RadioGroup>
      `}
    </Playground>

    <Title3>Styling</Title3>
    You can pass an object to the `style` prop for styling the parent element. Optionally, you can pass styles to each radio button:
    <Playground>
      {`
        <RadioGroup name="radioColors" style={{wrapEl: {border: '2px dotted lightblue', padding: 20}}}>
          <Radio id="radioColorGroup1" value="email" style={{label: {color: 'green'}}}>Green</Radio>
          <Radio id="radioColorGroup2" value="phone" style={{label: {color: 'red'}}}>Red</Radio>
          <Radio id="radioColorGroup3" value="mail" style={{label: {color: 'blue'}}}>Blue</Radio>
        </RadioGroup>
      `}
    </Playground>

    <Title3>Callback</Title3>
    You can keep track of the currently selected radio button by passing a callback to the `onChange` prop:
    <Playground>
      {`
        function alertMeal(value, props) {
          alert(\`The current meal is "${value}" and the id is "${props.id}"\`)
        }

        <RadioGroup name="radioMeal" onChange={alertMeal}>
          <Radio id="radioMealGroup1" value="sushi">Sushi</Radio>
          <Radio id="radioMealGroup2" value="hamburger">Hamburger</Radio>
          <Radio id="radioMealGroup3" value="soup">Soup</Radio>
        </RadioGroup>
      `}
    </Playground>

    <Title3>Disabeling radio buttons</Title3>
    You can disable radio buttons inside a group and the remaining enabled buttons will function as expected. Note that if you passed both `isSelected` and `isDisabled` the former will be ignored (see example below).
    <Playground>
      {`
        function alertCity(value, props) {
          alert(\`The selected city is "${value}"\`)
        }

        <RadioGroup name="radioCity" onChange={alertCity}>
          <Radio id="radioCityGroup1" value="New York" isDisabled>New York</Radio>
          <Radio id="radioCityGroup2" value="San Fracisco" isSelected isDisabled>San Francisco</Radio>
          <Radio id="radioCityGroup3" value="Chicago">Chicago</Radio>
          <Radio id="radioCityGroup4" value="San Diego">San Diego</Radio>
          <Radio id="radioCityGroup5" value="Atlanta">Atlanta</Radio>
        </RadioGroup>
      `}
    </Playground>
  </Fragment>
)
