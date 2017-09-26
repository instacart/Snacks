The withTheme higher order component is the best way to use Snacks themes in your own React components. It tracks updates to your theme config and re-renders your components as needed. Theme attributes are passed to your components via a `snacksTheme` prop. Using this or the themer directly allows you to share a theme across snacks components and your own components.

If you'd like to change the theme, you'll need to import `themer` from snacks and set it there.

Class with decorator style
```js static
  import React, { Component } from 'react'
  import { withTheme } from 'ic-snacks'

  @withTheme()
  class MyComponent extends Component {
    render() {
      <p style={{ color: this.props.snacksTheme.color.action }}>
        Hi!
      </p>
    }
  }

  export default MyComponent
```

Functional style
```js static
import { withTheme } from 'ic-snacks'

const MyComponent = props => {
  return (
    <p style={{ color: props.snacksTheme.color.action }}>
      Hi!
    </p>
  )
}

export default withTheme(MyComponent)
```
