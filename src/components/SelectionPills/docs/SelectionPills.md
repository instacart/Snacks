SelectionPills example:

```jsx
// import { SelectionPills } from 'ic-snacks'
import SelectionPills from '../SelectionPills.js'

const initialState = { activePill: 'carrots' }
const pills = [
  { text: 'bananas', id: 'selection-1', isSelected: true },
  { text: 'carrots', id: 'selection-2' },
  { text: 'watermelon', id: 'selection-3' },
  { text: 'snacks', id: 'selection-4' },
  { text: 'kale', id: 'selection-5' },
  { text: 'endives', id: 'selection-6' },
  { text: 'arugula', id: 'selection-7' },
  { text: 'spinach', id: 'selection-8' },
  { text: 'potatoes', id: 'selection-9' },
]

; <div>
    <SelectionPills
      pills={pills}
      onPillClick={(e, pill) => {
        e.preventDefault()
        console.log('SelectionPills SelectionPill clicked!', pill)
      }}
      label="Filter by"
    />
  </div>
```
