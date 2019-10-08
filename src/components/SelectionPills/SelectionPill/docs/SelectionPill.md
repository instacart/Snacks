### tl;dr
`SelectionPill` is a checkbox based component used for multi-selection purposes, such as filters.
This differs from `NavigationPill`, which supports single selection in the form of a link.
The main distinction between these components is the accessibility support, which will
inform screen reader users how to interact with the pill appropriately.

**`SelectionPill` example:**

`SelectionPill` maintains its own internal state for selected and focused, but
can also be controlled by it's parent when passing in the `parentControlledState`
prop. When this prop is present, internal state is ignored and the `isSelected`
controls whether a `SelectionPill` is is selected or not.

```jsx
import { SelectionPill } from 'ic-snacks'

; <div>
    <SelectionPill
      isSelected={true}
      onClick={e => {
        console.log('SelectionPill click!', "carrots")
      }}
      text="carrots"
    />
    <SelectionPill
      isSelected={false}
      onClick={e => {
        console.log('SelectionPill click!', "watermelon")
      }}
      text="watermelon"
    />
    <SelectionPill
      id="selection3"
      isSelected={false}
      isDisabled={true}
      onClick={e => {
        console.log('SelectionPill click!', "cabbage")
      }}
      text="cabbage"
    />
  </div>
```
