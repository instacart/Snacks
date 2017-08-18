Grid example:

    rowStyles = { marginBottom: '20px' };
    columnStyles = { backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };
    <div>
      <Grid styles={{ backgroundColor: '#eee' }}>
        <Row styles={rowStyles} maxColumns={10}>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Seven</p></Column>
        </Row>
        <Row styles={rowStyles} maxColumns={6}>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Seven</p></Column>
        </Row>
        <Row styles={rowStyles} forceFullPage={true}>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 4 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 6 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 8 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 10 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 12 }} styles={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 14 }} styles={columnStyles}><p>Seven</p></Column>
        </Row>
      </Grid>
    </div>
