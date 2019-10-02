SelectionPill example:

```jsx
// import { SelectionPill } from 'ic-snacks'
import SelectionPill from '../SelectionPill.js'


; <div>
    <SelectionPill
      id="selection1"
      isSelected={false}
      onClick={e => {
        console.log('SelectionPill click!', "bananas")
      }}
      text="bananas"
    />
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
  </div>
```
