To use an icon, see the `Icon` component in the Components section.

Available Icons:
```jsx
const icons = Object.keys(require('../src/components/Icon/icons'));
const groups = {
  People: [
    'account',
    'person',
    'personAdd',
  ],
  'Social Media': [
    'google',
    'facebook',
    'instagram',
    'twitter',
    'pinterest',
    'appStore',
    'playStore',
  ],
  Orders: [
    'order',
    'orders',
    'addToOrder',
    'orderIssue',
    'orderReview',
    'recurringOrder',
    'reorder',
    'replacement',
    'adjustment',
    'refund',
  ],
  'Times of Day': [
    'sunset',
    'moon',
    'inSeason',
  ],
  Shopping: [
    'cart',
    'bag',
    'store',
    'money',
    'creditCard',
    'loyaltyCard',
    'giftcard',
    'coupons',
    'categories',
    'recipes',
    'sale',
  ],
  Delivery: [
    'home',
    'office',
    'barcode',
    'scan',
    'car',
    'clock',
    'calendar',
    'locationCurrent',
    'locationMarker',
  ],
  Items: [
    'items',
    'organic',
    'cold',
    'fire',
    'alcohol',
    'coffee',
    'tobacco',
    'weight',
  ],
  Actions: [
    'reaction',
    'reactionAdd',
    'thumbsUp',
    'thumbsDown',
    'saveForLater',
    'like',
    'listsAdd',
    'star',
    'flag',
  ],
  Communication: [
    'sendEmail',
    'email',
    'chat',
    'phone',
    'call',
    'instructions',
    'pencil',
  ],
  Arrows: [
    'arrowLeft',
    'arrowUp',
    'arrowRight',
    'arrowDown',
    'arrowLeftSmall',
    'arrowUpSmall',
    'arrowRightSmall',
    'arrowDownSmall',
  ],
  Symbols: [
    'checkmark',
    'checkmarkCircle',
    'checkmarkCircleDashed',
    'plus',
    'minus',
    'x',
    'xCircle',
    'xSmall',
    'no',
    'info',
    'help',
    'warning',
  ],
  UI: [
    'browse',
    'filter',
    'more',
    'menu',
    'scissors',
    'search',
    'sort',
    'zoomIn',
    'zoomOut',
    'copy',
    'delete',
    'lock',
    'unlock',
    'skip',
    'logout',
    'gear',
    'share',
  ],
  Miscellaneous: [
    'accessibility',
    'bell',
    'backgroundCheck',
    'gift',
    'glitter',
    'graph',
    'lightbulb',
    'lightning',
    'photo',
    'photoMissing',
    'ticket',
    'view',
  ],
}
const colors = require('../src/styles/colors').default;
const containerStyles = {

}
const groupStyles = {

}
const headerStyles = {

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
  fill: colors.GREEN_500,
};
  <div style={containerStyles}>
    {
      Object.keys(groups).map(group => (
        <div style={groupStyles}>
          <h2 style={headerStyles}>{group}</h2>
          <ul style={wrapperStyles}>
            {
              groups[group].map(name => (
                !name.endsWith('Filled') &&
                <li style={iconWrapStyles}>
                  <div style={rowStyles}>
                    <Icon name={name} style={iconStyles} />
                    {
                      icons.includes(`${name}Filled`) &&
                      <Icon name={`${name}Filled`} style={iconStyles} />
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
