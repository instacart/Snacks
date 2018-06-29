import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (
<Fragment>
  Icon example:

  <Playground>
    {`
      <div>
        <Icon name={'cart'} />
        <Icon code={'e08e'} />
        <Icon
          name={'likeFilled'}
          style={{
            backgroundColor: '#43B02A',
            color: '#fff',
            borderRadius: '50%',
            padding: '5px'
          }}
        />
      </div>
  `}
  </Playground>

  See full list of available icons under the Icons section.
</Fragment>

)
