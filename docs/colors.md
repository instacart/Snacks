Available colors:
```jsx
const colors = require('../src/styles/colors').default;
const wrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 0,
  padding: '15px',
  background: `repeating-linear-gradient( 45deg, ${colors.WHITE}, ${colors.WHITE} 10px, ${colors.GRAY_88} 10px, ${colors.GRAY_88} 20px )`
};

const colorWrapStyles = {
  flex: 1,
  height: '220px',
  flexBasis: '220px',
  boxSizing: 'border-box',
  textAlign: 'center',
  listStyle: 'none',
};

const colorSwatchStyles = {
  height: '150px'
};

const colorsSwatches = Object.keys(colors).map(name => {
  return (
    <li style={colorWrapStyles}>
      <div
        style={Object.assign({},
          colorSwatchStyles,
          { backgroundColor: colors[name] }
        )}
      ></div>
      <p style={{ fontWeight: '600', marginBottom: 0 }}>{name}</p>
      <p style={{ fontSize: '12px', margin: 0 }}>{colors[name]}</p>
    </li>
  );
});

  <ul style={wrapperStyles}>
   { colorsSwatches }
  </ul>

```
