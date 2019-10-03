SelectionPill example:

```jsx
// import { SelectionPill } from 'ic-snacks'
import SelectionPill from '../SelectionPill.js'

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
