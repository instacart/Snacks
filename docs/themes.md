Snacks comes with a default color theme, but can be configured and/or used by code outside of Snacks itself.

The default theme is:

```jsx static
const defaultTheme = require('../src/styles/themer/utils').defaultTheme

<div>
  {Object.keys(defaultTheme).map((section, idx) => {
    return (
      <div key={`section-idx`}>
        <h4>{section}</h4>
        { Object.keys(defaultTheme[section]).map((sectionKey, sidx) => {
          const value = defaultTheme[section][sectionKey]
          return (
            <p>{sectionKey}: <span style={{ backgroundColor: value, display: 'inline-block', padding: '8px'}}>{value}</span></p>
          )
        }) }
      </div>
    )
  })}
</div>
```

This theme can be controlled via the `themer`. See `themer` documentation below for more info.
