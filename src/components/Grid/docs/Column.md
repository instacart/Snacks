Column Example without a parent Grid or Row:

```jsx static
const columnStyles = { backgroundColor: '#43B02A', border: '1px solid white', textAlign: 'center' };

(
  <div>
    <Column sizes={{ sm: 1 }} style={columnStyles}><p>One</p></Column>
    <Column sizes={{ md: 3 }} style={columnStyles}><p>Two</p></Column>
    <Column sizes={{ sm: 2, md: 1, mdLg: 4, lg: 5, xl: 4 }} style={columnStyles}><p>Three</p></Column>
  </div>
)
```
