The `Link` component is valuable mainly because it's hooked up to Themer.
The link's resting/hover colors will match the current theme's action and actionHover values.

```jsx
import { Link } from 'ic-snacks'

; <div>
    <div style={{marginBottom: '16px'}}>
      <Link href="/radish">Normal link</Link>
    </div>

    <div style={{marginBottom: '16px'}}>
      <Link href="/radish" onClick={(e, props) => { e.preventDefault() }}>With an onClick callback</Link>
    </div>

    <div style={{marginBottom: '16px'}}>
      <Link href="/radish" onClick={(e, props) => { e.preventDefault() }} elementAttributes={{'aria-label': 'Foo'}}>With extra attributes like an aria-label</Link>
    </div>

    <div style={{marginBottom: '16px'}}>
      <Link href="/radish" onClick={(e, props) => { e.preventDefault() }} style={{textDecoration: 'underline', fontWeight: 600}}>With added styles</Link>
    </div>
  </div>
```
