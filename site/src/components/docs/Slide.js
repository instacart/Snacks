import React, {Fragment} from 'react'
import Playground from '../Playground'
import {Title2, Title3, Subtitle} from '../Typography'

export default () => (

Example:

<Playground>
{`
    initialState = { isOpen: false };
    width = 250;

    <div>
      <Button onClick={() => setState({ isOpen: !state.isOpen })} style={{ marginBottom: 10 }}>Toggle</Button>
      <div style={{ overflow: 'hidden'}}>
        <Slide in={state.isOpen} offset={width + 42}>
          <div style={{padding: 20, display: 'flex', alignItems:'center', background: '#43B02A', flexDirection: 'column', width: width, border: '1px solid black' }}>
            <LoadingBox shape='circle' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
          </div>
        </Slide>
      </div>
      <div style={{ marginTop: 10 }}>
        Content below
      </div>
    </div>
`}
</Playground>

<Title2>Combination of Transitions:</Title2>

<Playground>
{`
    initialState = { isOpen: false };
    <div>
      <Button onClick={() => setState({ isOpen: !state.isOpen })} style={{ marginBottom: 10 }}>Toggle</Button>
      <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
        <Grow in={state.isOpen}>
          <Fade in={state.isOpen}>
            <Slide in={state.isOpen} offset={width + 42}>
              <div style={{padding: 20, display: 'flex', alignItems:'center', background: '#43B02A', flexDirection: 'column', width: width, border: '1px solid black' }}>
                <LoadingBox shape='circle' />
                <LoadingBox shape='line' />
                <LoadingBox shape='line' />
                <LoadingBox shape='line' />
              </div>
            </Slide>
          </Fade>
        </Grow>
        <div style={{ marginTop: 10 }}>
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
