The spacing module is based on the design system's base 8 spacing.
Using predefined values for padding and margin help us keep things visually consistent.

### Sizes
| Property   | Px value  |
|------------|-----------|
| XS         | 8px       |
| SM         | 16px      |
| MD         | 24px      |
| LG         | 32px      |
| XL         | 48px      |
| HUGE       | 64px      |

### Example usage:

```markdown
import { spacing } from 'ic-snacks'

// If you need to reference the pixel values directly
spacing.SM //=> 16

const styles = {
  // Padding/margin for all sides
  ...spacing.PADDING_SM,               // => { padding: 16 }
  ...spacing.MARGIN_SM,                // => { margin: 16 }

  // Padding/margin in one direction
  ...spacing.PADDING_LEFT_MD,          // => { paddingLeft: 24 }
  ...spacing.MARGIN_TOP_MD,            // => { marginLeft: 24 }

  // Padding/margin along one dimension
  ...spacing.PADDING_Y_XL              // => { paddingTop: 64, paddingBottom: 64 }
  ...spacing.MARGIN_X_LG,              // => { marginLeft: 32, marginRight: 32 }
}
```
