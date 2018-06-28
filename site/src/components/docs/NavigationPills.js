import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

NavigationPills example:

<Playground>
  {`

    initialState = { activePill: 'carrots' };
    pills = [
      { text: 'bananas' },
      { text: 'carrots' },
      { text: 'watermelon' },
      { text: 'snacks' },
      { text: 'kale' },
      { text: 'endives' },
      { text: 'arugula' },
      { text: 'spinach' },
      { text: 'potatoes' }
    ];
    <div>
      <NavigationPills
        pills={pills}
        onPillClick={(e, pill) => {
          e.preventDefault();
          setState({ activePill: pill.text })
          console.log('NavigationPills NavigationPill clicked!', pill)
        }}
        label={'Filter by'}
        activePill={state.activePill}
      />
    </div>
  `}
</Playground>

)
