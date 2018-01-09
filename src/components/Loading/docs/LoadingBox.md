### LoadingBox example:
Light:
    <div>
      <LoadingBox background='light' />
    </div>

Standard:
    <div>
      <LoadingBox />
    </div>

Dark:
    <div>
      <LoadingBox background='dark' />
    </div>

Circle:
    <div>
      <LoadingBox shape='circle' background='dark' size={150} />
    </div>

Square:
    <div>
      <LoadingBox shape='square' background='light' size={150} />
    </div>

Line:
    <div>
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
      <LoadingBox shape='line' />
    </div>

Example Combination:

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
