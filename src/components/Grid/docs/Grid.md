Grid example:

    columnStyles = { height: '56px', margin: 0, lineHeight: '56px', backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };
    <div>
      <Grid style={{ backgroundColor: '#eee' }}>
        <Row style={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Four</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Five</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Six</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Seven</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Eight</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Nine</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Ten</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Eleven</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Twelve</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Thirteen</p></Column>
          <Column sizes={{ sm: 1 }}><p style={columnStyles}>Fourteen</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Four</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Five</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Six</p></Column>
          <Column sizes={{ sm: 2 }}><p style={columnStyles}>Seven</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Four</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 4 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 4 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 4 }}><p style={columnStyles}>Two</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Column sizes={{ sm: 2, md: 2, lg: 4, xl: 5}}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Four</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }} maxColumns={10}>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Four</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Five</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Six</p></Column>
        </Row>
        <Row style={{ marginBottom: '20px' }} maxColumns={6}>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>One</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Two</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Three</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Four</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Five</p></Column>
          <Column sizes={{ sm: 3 }}><p style={columnStyles}>Six</p></Column>
        </Row>
      </Grid>
    </div>
