For visual consistency we've created a fixed set of screen sizes
based on the Snacks grid system.

| Screen Size | Px value         |
|-------------|------------------|
| xs          | 0 - 768px        |
| sm          | 768px - 831px    |
| md          | 832px - 1039px   |
| mdLg        | 1040px - 1247px  |
| lg          | 1248px - 1455px  |
| xl          | > 1456px         |

There are four helpers available for generating media queries:

```js static
import { responsive } from 'ic-snacks'

// Target a given screen size and larger
responsive.up('sm') //=> '@media (min-width: 768px)'
responsive.up('lg') //=> '@media (min-width: 1248px)'

// Target a given screen size and smaller
responsive.down('sm') //=> '@media (max-width: 831px)'
responsive.down('lg') //=> '@media (max-width: 1248px)'

// Target a single screen size
responsive.only('xs') //=> '@media (max-width: 768px)'
responsive.only('md') //=> '@media (min-width: 832px) and (max-width: 1039px)'
responsive.only('lg') //=> '@media (min-width: 1248px) and (max-width: 1455px)'

// Target a given screen size up to but
// not including a second screen size
responsive.between('sm', 'md') //=> '@media (min-width: 0px) and (max-width: 832px)'
responsive.between('sm', 'xl') //=> '@media (min-width: 768px) and (max-width: 1456px)'
```
