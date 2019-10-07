**`SelectionPill` example:**

`SelectionPill` maintains its own internal state for selected and focused, but
can also be controlled by it's parent when passing in the `parentControlledState`
prop. When this prop is present, internal state is ignored and the `isSelected`
controls whether a `SelectionPill` is is selected or not.

```jsx
import { SelectionPill } from 'ic-snacks'

; <div>
    <SelectionPill
      id="selection2"
      isSelected={true}
      onClick={e => {
        console.log('SelectionPill click!', "carrots")
      }}
      text="carrots"
    />
    <SelectionPill
      id="selection3"
      isSelected={false}
      onClick={e => {
        console.log('SelectionPill click!', "watermelon")
      }}
      text="watermelon"
    />
    <SelectionPill
      id="selection4"
      isSelected={false}
      isDisabled={true}
      onClick={e => {
        console.log('SelectionPill click!', "cabbage")
      }}
      text="cabbage"
    />
  </div>
```
