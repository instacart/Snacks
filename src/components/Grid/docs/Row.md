Grid example:

    rowStyles = { marginBottom: '20px' };
    columnStyles = { backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };
    <div>
      <Grid style={{ backgroundColor: '#eee' }}>
        <Row style={rowStyles} maxColumns={10}>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Seven</p></Column>
        </Row>
        <Row style={rowStyles} maxColumns={6}>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 2 }} style={columnStyles}><p>Seven</p></Column>
        </Row>
      </Grid>
    </div>
