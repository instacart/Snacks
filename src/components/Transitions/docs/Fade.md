Example:

    initialState = { isOpen: false };
    width = 250;

    <div>
      <button onClick={() => setState({ isOpen: !state.isOpen })} style={{ marginBottom: 10 }}>Toggle</button>
      <div style={{ overflow: 'hidden'}}>
        <Fade in={state.isOpen} width={width + 42}>
          <div style={{padding: 20, display: 'flex', alignItems:'center', background: '#43B02A', flexDirection: 'column', width: width, border: '1px solid black' }}>
            <LoadingBox shape='circle' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
            <LoadingBox shape='line' />
          </div>
        </Fade>
      </div>
      <div style={{ marginTop: 10 }}>
        Content below
      </div>
    </div>
