Column Example without a parent Grid or Row:

    columnStyles = { backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };
    <div>
      <Column sizes={{ sm: 1 }} styles={columnStyles}><p>One</p></Column>
      <Column sizes={{ md: 3 }} styles={columnStyles}><p>Two</p></Column>
      <Column sizes={{ sm: 2, md: 1, mdLg: 4, lg: 5, xl: 4 }} styles={columnStyles}><p>Three</p></Column>
    </div>
