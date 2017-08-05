Icon example:
```jsx
<div>
  <Icon name={'cart'} />
  <Icon code={'e08e'} />
  <Icon
    name={'likeFilled'}
    style={{
      backgroundColor: '#43B02A',
      color: '#fff',
      borderRadius: '50%',
      padding: '5px'
    }}
  />
</div>
```

All Icons:
```jsx
const hexValues = require('../hexValues');
const colors = require('../../../styles/colors').default;
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
  fontSize: '26px',
  color: colors.GREEN_500
}
const icons = Object.keys(hexValues.default).map(name => {
  return (
    <li style={iconWrapStyles}>
      <Icon name={name} style={iconStyle}/>
      <p>{name}</p>
    </li>
  );
});

  <ul style={wrapperStyles}>
   { icons }
  </ul>
```
