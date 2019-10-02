SelectionPill example:

```jsx
// import { SelectionPill } from 'ic-snacks'
import SelectionPill from '../SelectionPill.js'


; <div>
    <SelectionPill
      id="selection1"
      isActive={false}
      onClick={e => {
        e.preventDefault()
        console.log('SelectionPill click!', "bananas")
      }}
      text="bananas"
    />
    <SelectionPill
      id="selection2"
      isActive={true}
      onClick={e => {
        e.preventDefault()
        console.log('SelectionPill click!', "carrots")
      }}
      text="carrots"
    />
    <SelectionPill
      id="selection3"
      isActive={false}
      onClick={e => {
        e.preventDefault()
        console.log('SelectionPill click!', "watermelon")
      }}
      text="watermelon"
    />
  </div>
```
