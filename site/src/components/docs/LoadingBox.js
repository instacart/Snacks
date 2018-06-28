import React, {Fragment} from 'react'
import Playground from '../Playground'

export default () => (

Light:

<Playground>
  {`
    <div>
      <LoadingBox background='light' />
    </div>
  `}
</Playground>

Standard:
<Playground>
  {`
    <div>
      <LoadingBox />
    </div>
    `}
  </Playground>

Dark:
<Playground>
  {`
    <div>
      <LoadingBox background='dark' />
    </div>
    `}
  </Playground>

Circle:
<Playground>
  {`
    <div>
      <LoadingBox shape='circle' background='dark' size={150} />
    </div>
    `}
  </Playground>

Square:
<Playground>
  {`
    <div>
      <LoadingBox shape='square' background='light' size={150} />
    </div>
    `}
  </Playground>

Line:
<Playground>
  {`
    <div>
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
    </div>
    `}
  </Playground>

Example Combination:
<Playground>
  {`

    const cardStyles = {
      display: 'flex',
      flexDirection: 'row',
      width: '280px'
    };
    const baseLineStyle = { marginTop: 10 };

    <div style={cardStyles}>
      <div style={{ flexGrow: 1 }}>
        <LoadingBox size={100} background='dark' />
        <LoadingBox shape='line' />
        <LoadingBox shape='line' />
        <LoadingBox shape='line' />
      </div>
      <div>
        <LoadingBox shape='circle' />
      </div>
    </div>
    `}
  </Playground>

**Note:** the size prop can be a percentage (supplied as a string) or a number in pixels:
<Playground>
  {`
    <div style={{ width: 200 }}>
      <LoadingBox shape='line' size='50%' />
      <LoadingBox shape='line' size={100} />
    </div>
  `}
</Playground>

)
