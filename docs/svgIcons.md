To use an icon, see the `SVGIcon` component in the Components section.

Available SVGIcons:

```jsx
import { SVGIcon, colors } from 'ic-snacks'
import iconsList from '../src/components/SVGIcon/icons'

const icons = Object.keys(iconsList)

const groups = {
  People: ['account', 'person', 'personAdd', 'walking'],
  'Social Media': ['google', 'facebook', 'instagram', 'twitter', 'pinterest', 'appStore', 'playStore', 'ios'],
  Orders: ['order', 'orders', 'addToOrder', 'orderIssue', 'orderReview', 'recurringOrder', 'reorder', 'replacement', 'adjustment', 'refund'],
  'Times of Day': ['sunset', 'moon', 'inSeason'],
  Shopping: ['cart', 'bag', 'store', 'money', 'creditCard', 'loyaltyCard', 'giftcard', 'coupons', 'categories', 'recipes', 'sale'],
  Delivery: ['home', 'office', 'barcode', 'scan', 'car', 'clock', 'calendar', 'locationCurrent', 'locationMarker', 'parking'],
  Items: ['items', 'organic', 'cold', 'fire', 'alcohol', 'coffee', 'tobacco', 'weight'],
  Actions: ['reaction', 'reactionAdd', 'thumbsUp', 'thumbsDown', 'saveForLater', 'like', 'listsAdd', 'star', 'flag'],
  Communication: ['sendEmail', 'email', 'chat', 'phone', 'call', 'instructions', 'pencil'],
  Arrows: ['arrowLeft', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowLeftSmall', 'arrowUpSmall', 'arrowRightSmall', 'arrowDownSmall'],
  Symbols: ['checkmark', 'checkmarkCircle', 'checkmarkCircleDashed', 'plus', 'minus', 'x', 'xCircle', 'xSmall', 'no', 'info', 'help', 'warning'],
  UI: ['browse', 'filter', 'more', 'menu', 'scissors', 'search', 'sort', 'zoomIn', 'zoomOut', 'copy', 'delete', 'lock', 'unlock', 'skip', 'logout', 'gear', 'share'],
  Miscellaneous: ['accessibility', 'bell', 'backgroundCheck', 'folder', 'gift', 'glitter', 'graph', 'lightbulb', 'lightning', 'photo', 'photoMissing', 'ticket', 'trending', 'view'],
}
const wrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
}
const iconWrapStyles = {
  flex: 0,
  padding: '0 16px 0 8px',
  marginBottom: 8,
  listStyle: 'none',
  borderLeft: `1px solid ${colors.GRAY_88}`,
}
const rowStyles = {
  whiteSpace: 'nowrap',
}
const iconStyles = {
  marginRight: 5,
}

; <div>
    {
      Object.keys(groups).map(group => (
        <div>
          <h2>{group}</h2>
          <ul style={wrapperStyles}>
            {
              groups[group].map(name => (
                !name.endsWith('Filled') &&
                <li style={iconWrapStyles} key={name}>
                  <div style={rowStyles}>
                    <span title={name}>
                      <SVGIcon
                        name={name}
                        color={colors.GREEN_500}
                        style={iconStyles}
                      />
                    </span>
                    {
                      icons.includes(`${name}Filled`) &&
                      <span title={`${name}Filled`}>
                        <SVGIcon
                          name={`${name}Filled`}
                          color={colors.GREEN_500}
                          style={iconStyles}
                        />
                      </span>
                    }
                  </div>
                  <div style={rowStyles}>{name}</div>
                </li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>
```
