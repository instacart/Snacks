To use an icon, see the `Icon` component in the Components section.

Available Icons:
```jsx
const icons = require('../src/components/Icon/icons');
const colors = require('../src/styles/colors').default;
const wrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0
}
const iconWrapStyles = {
  flex: 1,
  height: '100px',
  flexBasis: '200px',
  padding: '8px',
  boxSizing: 'border-box',
  textAlign: 'center',
  listStyle: 'none',
  border: '1px solid #eee'
}
const iconStyle = {
  fill: colors.GREEN_500
}
const list = Object.keys(icons).map(name => {
  return (
    <li style={iconWrapStyles}>
      <Icon name={name} style={iconStyle}/>
      <p>{name}</p>
    </li>
  );
});

  <ul style={wrapperStyles}>
   { list }
  </ul>
```
