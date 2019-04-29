To start using a Snacks component in your app, first be sure to wrap your app root with the `StyleRoot` component from [Radium](https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component).

```jsx static
import { StyleRoot } from 'radium'
import MyApp from '/dir/to/MyApp'

ReactDOM.render(
  <StyleRoot>
    <MyApp />
  </StyleRoot>,
  document.getElementById('my-react-container')
)
```

Once you've done this, you can start importing and using any Snacks component you'd like:

```jsx static
import React from 'react'
import { Button, Link } from 'ic-snacks'

class MyReactComponent extends React.Component {
  render() {
    return (
      <div>
        <p>This is my component. It is great.</p>
        <Button onClick={() => { alert('You clicked me!') }} >
          Click me
        </Button>
        <Link href="https://instacart.github.io/Snacks/">
          Snacks documentation
        </Link>
      </div>
    )
  }
}
```
