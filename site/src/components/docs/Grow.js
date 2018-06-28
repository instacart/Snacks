import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

Example:

<Playground>
{`
    initialState = { isOpen: false };
    <div>
      <Button onClick={() => setState({ isOpen: !state.isOpen })} style={{ marginBottom: 10 }}>Toggle</Button>
      <div style={{ display: 'flex' }}>
        <Grow in={state.isOpen}>
          <div style={{padding: 20, display: 'flex', alignItems:'center', background: '#43B02A', flexDirection: 'column', width: 250, border: '1px solid black' }}>
            <LoadingBox shape='circle' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
          </div>
        </Grow>
        <div>
          Content right
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        Content below
      </div>
    </div>

`}
</Playground>

)
