import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

SVGIcon example:

<Playground>
{`
  <div>
    <SVGIcon name='cart' size='large' />
    <SVGIcon name='cart' />
    <SVGIcon name='cart' size='small' />
    <SVGIcon
      name='likeFilled'
      color='#fff'
      style={{
        backgroundColor: '#43B02A',
        borderRadius: '50%',
        padding: '5px'
      }}
    />
  </div>
`}
</Playground>

See full list of available icons under the SVGIcons section.

)
