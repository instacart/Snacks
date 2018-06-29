import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

NavigationPill example:

<Playground>
  {`
    <div>
      <NavigationPill
        isActive={false}
        onClick={e => {
          e.preventDefault()
          console.log('NavigationPill click!', "bananas")
        }}
        text={"bananas"}
      />
      <NavigationPill
        isActive={true}
        onClick={e => {
          e.preventDefault()
          console.log('NavigationPill click!', "carrots")
        }}
        text={"carrots"}
      />
      <NavigationPill
        isActive={false}
        onClick={e => {
          e.preventDefault()
          console.log('NavigationPill click!', "watermelon")
        }}
        text={"watermelon"}
      />
    </div>
`}
</Playground>

)
