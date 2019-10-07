
### Self controlled state

`SelectionPills` maintains its own internal for the array of pills provided. The
initial selected state of a pill may be passed as a property of the pill object,
but all changes will be maintained by `SelectionPills` component.

The array of `pills` all for all the properties of a `SelectionPill` to be passed
to override the underlying pill behavior or style.

```jsx
// import { SelectionPills } from 'ic-snacks'
import SelectionPills from '../SelectionPills.js'

const initialState = { activePill: 'carrots' }
const pills = [
  { text: 'bananas', id: 'filterby-1', isSelected: true },
  { text: 'carrots', id: 'filterby-2' },
  { text: 'watermelon', id: 'filterby-3' },
  { text: 'snacks', id: 'filterby-4' },
  { text: 'kale', id: 'filterby-5' },
  { text: 'endives', id: 'filterby-6', isDisabled: true },
  { text: 'arugula', id: 'filterby-7' },
  { text: 'spinach', id: 'filterby-8' },
  { text: 'potatoes', id: 'filterby-9' },
]

;<div>
  <SelectionPills
    pills={pills}
    onSelectPill={(e, pill) => {
      e.preventDefault()
      console.log('SelectionPills SelectionPill clicked!', pill)
    }}
    label="Filter by"
  />
  </div>
```

#### With select all pill

Optional parameter to include select all button that unselects all selected options
when clicked.

```jsx
// import { SelectionPills } from 'ic-snacks'
import SelectionPills from '../SelectionPills.js'

const pills = [
  { text: 'bananas', id: 'selection-1', isSelected: true },
  { text: 'carrots', id: 'selection-2' },
  { text: 'watermelon', id: 'selection-3' },
  { text: 'snacks', id: 'selection-4' },
  { text: 'kale', id: 'selection-5' },
  { text: 'endives', id: 'selection-6', isDisabled: true },
  { text: 'arugula', id: 'selection-7' },
  { text: 'spinach', id: 'selection-8' },
  { text: 'potatoes', id: 'selection-9' },
]
;<div>
  <SelectionPills
    includeSelectAll
    selectAllLabel="Select all"
    pills={pills}
    onSelectPill={(e, pill) => {
      e.preventDefault()
      console.log('SelectionPills SelectionPill clicked!', pill)
    }}
    label="Filter by"
  />
  </div>
```

#### With maximum number of selections

Optional parameter to restrict the number of selections that can be chosen

```jsx
// import { SelectionPills } from 'ic-snacks'
import SelectionPills from '../SelectionPills.js'

const pills = [
  { text: 'bananas', id: 'maxSelection-1' },
  { text: 'carrots', id: 'maxSelection-2' },
  { text: 'watermelon', id: 'maxSelection-3' },
  { text: 'snacks', id: 'maxSelection-4' },
  { text: 'kale', id: 'maxSelection-5' },
  { text: 'endives', id: 'maxSelection-6' },
  { text: 'arugula', id: 'maxSelection-7' },
  { text: 'spinach', id: 'maxSelection-8' },
  { text: 'potatoes', id: 'maxSelection-9' },
]
;<div>
  <SelectionPills
    maxSelectionCount={3}
    pills={pills}
    onSelectPill={(e, pill) => {
      e.preventDefault()
      console.log('SelectionPills SelectionPill clicked!', pill)
    }}
    label="Select up to 3:"
  />
  </div>
```

### Parent controlled state

State of each `SelectionPill` can be controlled by a parent component by passing a
in the `parentControlledState` prop. When this prop is present, the `pills`
array prop controls the state of each pill through the `isSelected` property.



```jsx
// import { SelectionPills } from 'ic-snacks'
import SelectionPills from '../SelectionPills.js'

const initialState = {
  pills: [
    { text: 'bananas', id: 'parentControlled-1' },
    { text: 'carrots', id: 'parentControlled-2' },
    { text: 'watermelon', id: 'parentControlled-3' },
    { text: 'snacks', id: 'parentControlled-4' },
    { text: 'kale', id: 'parentControlled-5' },
    { text: 'endives', id: 'parentControlled-6' },
    { text: 'arugula', id: 'parentControlled-7' },
    { text: 'spinach', id: 'parentControlled-8' },
    { text: 'potatoes', id: 'parentControlled-9' },
  ]
}
;<div>
  <SelectionPills
    parentControlledState
    pills={state.pills}
    onSelectPill={(e, pill) => {
      e.preventDefault()
      console.log('SelectionPills SelectionPill clicked!', pill)
      const updatedPills = state.pills.map(p => {
        if (p.id === pill.id) {
          return {
            ...p,
            isSelected: !p.isSelected
          }
        }
        return p
      })
      setState({
        pills: updatedPills
      })
    }}
    label="Filter by"
  />
  </div>
```
