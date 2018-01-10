Example:

    initialState = { isOpen: false, isOpen2: false };
    <div>
      <button onClick={() => setState({ isOpen: !state.isOpen })} style={{ marginBottom: 10 }}>Toggle</button>
      <Grow in={state.isOpen}>
        <div style={{padding: 20, display: 'flex', alignItems:'center', flexDirection: 'column', width: 250, border: '1px solid black' }}>
          <LoadingBox shape='line' />
          <LoadingBox shape='line' />
          <LoadingBox shape='line' />
          <LoadingBox shape='circle' />
        </div>
      </Grow>
      <div style={{ marginTop: 10 }}>
        Content below
      </div>
    </div>
