Grid example:

    columnStyles = { backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };
    <div>
      <Grid styles={{ backgroundColor: '#eee' }}>
        <Row styles={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Seven</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Eight</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Nine</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Ten</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Eleven</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Twelve</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Thirteen</p></Column>
          <Column sizes={{ sm: 1 }} styles={columnStyles}><p>Fourteen</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Six</p></Column>
          <Column sizes={{ sm: 2 }} styles={columnStyles}><p>Seven</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Four</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 4 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 4 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 4 }} styles={columnStyles}><p>Two</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 2, md: 2, lg: 4, xl: 5}} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Four</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }} maxColumns={10}>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Six</p></Column>
        </Row>
        <Row styles={{ marginBottom: '20px' }} maxColumns={6}>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>One</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Two</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Three</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Four</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Five</p></Column>
          <Column sizes={{ sm: 3 }} styles={columnStyles}><p>Six</p></Column>
        </Row>
      </Grid>
    </div>
