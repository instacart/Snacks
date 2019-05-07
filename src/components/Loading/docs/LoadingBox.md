Light:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox background="light" />
  </div>
```

Standard:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox />
  </div>
```

Dark:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox background="dark" />
  </div>
```

Circle:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox shape="circle" background="dark" size={150} />
  </div>
```

Square:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox shape="square" background="light" size={150} />
  </div>
```

Line:
```jsx
import { LoadingBox } from 'ic-snacks'

; <div>
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
  </div>
```

Example Combination:

```jsx
import { LoadingBox } from 'ic-snacks'

const cardStyles = {
  display: 'flex',
  flexDirection: 'row',
  width: '280px',
}
const baseLineStyle = { marginTop: 10 }

; <div style={cardStyles}>
    <div style={{ flexGrow: 1 }}>
      <LoadingBox size={100} background="dark" />
      <LoadingBox shape="line" />
      <LoadingBox shape="line" />
      <LoadingBox shape="line" />
    </div>
    <div>
      <LoadingBox shape="circle" />
    </div>
  </div>
````

**Note:** the size prop can be a percentage (supplied as a string) or a number in pixels:

```jsx
import { LoadingBox } from 'ic-snacks'

; <div style={{ width: 200 }}>
    <LoadingBox shape="line" size="50%" />
    <LoadingBox shape="line" size={100} />
  </div>
```
