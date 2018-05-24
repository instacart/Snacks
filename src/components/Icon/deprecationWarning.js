import svgIcons from '../SVGIcon/icons'
import hexValues from './hexValues'

const hexLookup = Object.keys(hexValues).reduce((lookup, value) => (
  { ...lookup, [hexValues[value]]: value }
), {})

const renamed = {
  arrowDownSmall: 'arrowDown', arrowDownSmallBold: 'arrowDownSmall', arrowLeftSmall: 'arrowLeft', arrowLeftSmallBold: 'arrowLeftSmall', arrowRightSmall: 'arrowRight', arrowRightSmallBold: 'arrowRightSmall', arrowUpSmall: 'arrowUp', arrowUpSmallBold: 'arrowUpSmall', bogo: 'lightning', bogoFilled: 'lightningFilled', check: 'checkmark', checkProgressComplete: 'checkmarkCircle', checkProgressDashed: 'checkmarkCircleDashed', deals: 'coupons', dealsFilled: 'couponsFilled', facebookFilled: 'facebook', hamburger: 'menu', happy: 'reaction', iconPerson: 'person', iconPersonAdd: 'personAdd', iconPersonAddFilled: 'personAddFilled', iconPersonFilled: 'personFilled', listsAndRecipes: 'recipes', message: 'chat', messageFilled: 'chatFilled', note: 'instructions', noteFilled: 'instructionsFilled', orderHistory: 'orders', orderProblem: 'orderIssue', phone: 'call', phoneFilled: 'callFilled', phoneIphone: 'phone', phoneIphoneFilled: 'phoneFilled', picture: 'photo', pinterestFilled: 'pinterest', pricing: 'sale', pricingFilled: 'saleFilled', reccuring: 'recurringOrder', replace: 'replacement', save: 'saveForLater', saveFilled: 'saveForLaterFilled', specials: 'glitter', specialsFilled: 'glitterFilled', trash: 'delete', trashFilled: 'deleteFilled', twitterFilled: 'twitter', xBold: 'xSmall',
  checkBold: 'checkmark', iconExit: 'logout', minusBold: 'minus', plusBold: 'plus', pricingSameFilled: 'checkmarkCircleFilled', replaceBold: 'replace',
}

export default function deprecationWarning({ name, code, style }) {
  if(!window.ICSnacksDeprecationWarnings) return
  if(!window.ICSnacksDeprecationWarnings.SVGIcon) return
  const messages = ['The `Icon` component has been deprecated.']
  messages.push('Please use the `SVGIcon` component instead.')
  if(code) {
    messages.push('The `code` prop has also been depreacted, please use `name` instead.')
    name = hexLookup[code]
  }
  if(name in renamed) {
    messages.push(`The icon name '${name}' has been renamed to '${renamed[name]}'.`)
  } else if(!(name in svgIcons)) {
    messages.push(`The icon name '${name}' has been removed.`)
  }
  if(style) {
    const styleCopy = { ...style }
    if(style.fontSize) {
      delete styleCopy.fontSize
      messages.push('Sizing the Icon component with the `fontSize` style property is deprecated, use the `size` prop instead.')
    }
    if(style.color) {
      delete styleCopy.color
      messages.push('Coloring the Icon component with the `color` style property is deprecated, use the `color` prop instead.')
    }
    const styleKeys = Object.keys(styleCopy)
    if(styleKeys.length > 0) {
      messages.push(`When converting to 'SVGIcon', styling will be different please audit the following style properties and verify they will work with SVGIcon: ${styleKeys.join(', ')}`)
    }
  }
  console.warn(...messages)
}
