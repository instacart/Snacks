### LoadingBox example:
Light:
    <div>
      <LoadingBox light />
    </div>

Standard:
    <div>
      <LoadingBox />
    </div>

Dark:
    <div>
      <LoadingBox dark />
    </div>

Example Combination:

    const cardStyles = {
      display: 'flex',
      flexDirection: 'row',
      width: '330px'
    };
    const baseLineStyle = { width: 200, marginTop: 10 };
    const LoadingLine = () => <LoadingBox style={baseLineStyle} />;

    <div style={cardStyles}>
      <div style={{ flexGrow: 1 }}>
        <LoadingBox style={{ width: '100px' }} dark />
        <LoadingLine />
        <LoadingLine />
        <LoadingLine />
      </div>
      <div>
        <LoadingBox style={{ borderRadius: '50%', height: 100, width: 100, marginBottom: 10 }} light />
      </div>
    </div>
