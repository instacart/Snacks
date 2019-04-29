### Pill example:

```jsx static
const defaultTheme = require('../../../styles/themer/utils').defaultTheme
const colors = require('../../../styles/colors').default

const internalTrackStyles = {
  RightArrow: {
    backgroundColor: 'blue',
  }
}

const styles = {
  padding: '8px 20px',
  marginRight: '5px',
  fontSize: '24px',
  borderRadius: '4px',
  backgroundColor: '#eee',
  color: '#43B02A',
  top: '8px',
}

<div>
  <h3>Passing in theme color keys </h3>
  <div style={{ height: '56px' }}>
    <ScrollTrack styles={internalTrackStyles}>
    <div style={{ padding: '8px 0' }}>
      {Object.keys(defaultTheme.colors).map(color => (
        <Pill color={color} style={{margin: '0.5rem'}}>{color}</Pill>
      ))}
      </div>
    </ScrollTrack>
  </div>

  <h3>Passing in Hex values</h3>
  <div style={{ height: '56px' }}>
    <ScrollTrack styles={internalTrackStyles}>
    <div style={{ padding: '8px 0' }}>
      {Object.values(colors).map(color => (
        <Pill color={color} style={{margin: '0.5rem'}}>{color}</Pill>
      ))}
      </div>
    </ScrollTrack>
  </div>
</div>
```
