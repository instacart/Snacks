const icons = ['accessibility', 'accessibilityFilled', 'account', 'accountFilled', 'addToOrder', 'addToOrderFilled', 'adjustment', 'alcohol', 'alcoholFilled', 'appStore', 'arrowDown', 'arrowDownSmall', 'arrowLeft', 'arrowLeftSmall', 'arrowRight', 'arrowRightSmall', 'arrowUp', 'arrowUpSmall', 'backgroundCheck', 'bag', 'bagFilled', 'barcode', 'bell', 'bellFilled', 'browse', 'browseFilled', 'calendar', 'call', 'callFilled', 'car', 'carFilled', 'cart', 'cartFilled', 'categories', 'categoriesFilled', 'chat', 'chatFilled', 'checkmark', 'checkmarkCircle', 'checkmarkCircleDashed', 'checkmarkCircleFilled', 'clock', 'clockFilled', 'coffee', 'cold', 'copy', 'coupons', 'couponsFilled', 'creditCard', 'delete', 'deleteFilled', 'email', 'emailFilled', 'facebook', 'filter', 'fire', 'fireFilled', 'flag', 'flagFilled', 'gear', 'gearFilled', 'gift', 'giftcard', 'glitter', 'glitterFilled', 'google', 'graph', 'graphFilled', 'help', 'helpFilled', 'home', 'homeFilled', 'inSeason', 'inSeasonFilled', 'info', 'infoFilled', 'instagram', 'instructions', 'instructionsFilled', 'items', 'itemsFilled', 'lightbulb', 'lightbulbFilled', 'lightning', 'lightningFilled', 'like', 'likeFilled', 'listsAdd', 'locationCurrent', 'locationCurrentFilled', 'locationMarker', 'locationMarkerFilled', 'lock', 'lockFilled', 'logout', 'loyaltyCard', 'loyaltyCardFilled', 'menu', 'minus', 'money', 'moneyFilled', 'moon', 'moonFilled', 'more', 'moreFilled', 'no', 'noFilled', 'office', 'officeFilled', 'order', 'orderIssue', 'orderIssueFilled', 'orderFilled', 'orderReview', 'orderReviewFilled', 'orders', 'ordersFilled', 'organic', 'organicFilled', 'pencil', 'pencilFilled', 'person', 'personAdd', 'personAddFilled', 'personFilled', 'phone', 'phoneFilled', 'photo', 'photoMissing', 'pinterest', 'playStore', 'plus', 'reaction', 'reactionAdd', 'recipes', 'recurringOrder', 'recurringOrderFilled', 'refund', 'reorder', 'reorderFilled', 'replacement', 'sale', 'saleFilled', 'saveForLater', 'saveForLaterFilled', 'scan', 'scissors', 'search', 'sendEmail', 'sendEmailFilled', 'share', 'shareFilled', 'skip', 'skipFilled', 'sort', 'star', 'starFilled', 'store', 'storeFilled', 'sunset', 'sunsetFilled', 'thumbsDown', 'thumbsUp', 'ticket', 'ticketFilled', 'tobacco', 'twitter', 'unlock', 'unlockFilled', 'view', 'viewFilled', 'warning', 'warningFilled', 'weight', 'weightFilled', 'x', 'xCircle', 'xCircleFilled', 'xSmall', 'zoomIn', 'zoomOut']
const removed = ['addToOrderAndroid', 'arrowEnter', 'arrowLeft', 'compassFilled', 'creditCardFilled', 'dealsIcon', 'faq', 'filterAndroid', 'filterFilled', 'giftcardFilled', 'googleFilled', 'grid', 'gridFilled', 'guaranteedFresh', 'guaranteedFreshFilled', 'itemsYouveOrdered', 'lightbulbAndroid', 'listsAndRecipesFilled', 'phoneAndroid', 'phoneAndroidFilled', 'popular', 'pricingSame', 'quickAdd', 'receipt', 'request', 'shareAndroid', 'shareAndroid2', 'shareAndroid2Filled', 'shareAndroidFilled', 'tip', 'tipFilled']
const renamed = {
  arrowDownSmall: 'arrowDown', arrowDownSmallBold: 'arrowDownSmall', arrowLeftSmall: 'arrowLeft', arrowLeftSmallBold: 'arrowLeftSmall', arrowRightSmall: 'arrowRight', arrowRightSmallBold: 'arrowRightSmall', arrowUpSmall: 'arrowUp', arrowUpSmallBold: 'arrowUpSmall', bogo: 'lightning', bogoFilled: 'lightningFilled', check: 'checkmark', checkProgressComplete: 'checkmarkCircle', checkProgressDashed: 'checkmarkCircleDashed', deals: 'coupons', dealsFilled: 'couponsFilled', facebookFilled: 'facebook', hamburger: 'menu', happy: 'reaction', iconPerson: 'person', iconPersonAdd: 'personAdd', iconPersonAddFilled: 'personAddFilled', iconPersonFilled: 'personFilled', listsAndRecipes: 'recipes', message: 'chat', messageFilled: 'chatFilled', note: 'instructions', noteFilled: 'instructionsFilled', orderHistory: 'orders', orderProblem: 'orderIssue', phone: 'call', phoneFilled: 'callFilled', phoneIphone: 'phone', phoneIphoneFilled: 'phoneFilled', picture: 'photo', pinterestFilled: 'pinterest', pricing: 'sale', pricingFilled: 'saleFilled', reccuring: 'recurringOrder', replace: 'replacement', save: 'saveForLater', saveFilled: 'saveForLaterFilled', specials: 'glitter', specialsFilled: 'glitterFilled', trash: 'delete', trashFilled: 'deleteFilled', twitterFilled: 'twitter', xBold: 'xSmall',
  checkBold: 'checkmark', iconExit: 'logout', minusBold: 'minus', plusBold: 'plus', pricingSameFilled: 'checkmarkCircleFilled', replaceBold: 'replace',
}
const hexValues = {e044: 'accountFilled', e043: 'account', e092: 'addToOrderAndroid', e093: 'addToOrderFilled', e094: 'addToOrder', e087: 'adjustment', e049: 'alcoholFilled', e01b: 'alcohol', e013: 'arrowDownSmallBold', e014: 'arrowDownSmall', e04a: 'arrowEnter', e011: 'arrowLeftSmallBold', e012: 'arrowLeftSmall', e04b: 'arrowLeft', e00f: 'arrowRightSmallBold', e010: 'arrowRightSmall', e027: 'arrowRight', e00d: 'arrowUpSmallBold', e00e: 'arrowUpSmall', e038: 'bagFilled', e037: 'bag', e047: 'bellFilled', e01a: 'bell', e097: 'bogoFilled', e02c: 'bogo', e00c: 'browseFilled', e09b: 'browse', e015: 'calendar', e01c: 'carFilled', e019: 'car', e02d: 'cartFilled', e023: 'cart', e0a9: 'categories', e03c: 'checkBold', e088: 'checkProgressComplete', e089: 'checkProgressDashed', e03b: 'check', e04c: 'clockFilled', e017: 'clock', e046: 'compassFilled', e04d: 'creditCardFilled', e048: 'creditCard', e05e: 'dealsFilled', e07b: 'dealsIcon', e04e: 'deals', e02f: 'emailFilled', e084: 'email', e030: 'facebookFilled', e031: 'faq', e076: 'filterAndroid', e078: 'filterFilled', e077: 'filter', e098: 'flagFilled', e08c: 'flag', e09c: 'gearFilled', e099: 'gear', e09e: 'gift', e0a1: 'giftcardFilled', e09f: 'giftcard', e050: 'googleFilled', e04f: 'google', e08b: 'gridFilled', e08a: 'grid', e054: 'guaranteedFreshFilled', e055: 'guaranteedFresh', e02e: 'hamburger', e029: 'happy', e053: 'helpFilled', e00b: 'help', e05f: 'homeFilled', e022: 'home', e08d: 'iconExit', e090: 'iconPersonAddFilled', e08f: 'iconPersonAdd', e091: 'iconPersonFilled', e08e: 'iconPerson', e079: 'inSeasonFilled', e070: 'inSeason', e052: 'infoFilled', e001: 'info', e073: 'instagram', e0a2: 'items', e06f: 'itemsFilled', e0a3: 'itemsYouveOrdered', e07d: 'lightbulbAndroid', e07e: 'lightbulbFilled', e07c: 'lightbulb', e081: 'likeFilled', e080: 'like', e07f: 'listsAndRecipesFilled', e002: 'listsAndRecipes', e045: 'listsAdd', e051: 'locationMarkerFilled', e003: 'locationMarker', e018: 'lock', e004: 'logout', e056: 'loyaltyCardFilled', e021: 'loyaltyCard', e042: 'messageFilled', e041: 'message', e058: 'minusBold', e057: 'minus', e005: 'money', e059: 'moreFilled', e006: 'more', e03f: 'noFilled', e040: 'no', e061: 'noteFilled', e060: 'note', e063: 'officeFilled', e062: 'office', e007: 'orderHistory', e064: 'orderProblem', e071: 'orderReview', e05b: 'organicFilled', e05a: 'organic', e066: 'phoneAndroidFilled', e065: 'phoneAndroid', e03d: 'phoneFilled', e06a: 'phoneIphoneFilled', e06b: 'phoneIphone', e03e: 'phone', e024: 'picture', e05c: 'pinterestFilled', e02b: 'plusBold', e02a: 'plus', e072: 'popular', e01e: 'pricingFilled', e020: 'pricingSameFilled', e01f: 'pricingSame', e01d: 'pricing', e0a6: 'quickAdd', e0a0: 'reactionAdd', e028: 'receipt', e0a7: 'reccuring', e085: 'refund', e06c: 'replaceBold', e067: 'replace', e086: 'request', e0a8: 'save', e0aa: 'saveFilled', e074: 'scissors', e008: 'search', e03a: 'shareAndroid2Filled', e039: 'shareAndroid2', e032: 'shareAndroidFilled', e033: 'shareAndroid', e09d: 'sort', e068: 'specialsFilled', e069: 'specials', e026: 'starFilled', e025: 'star', e075: 'storeFilled', e009: 'store', e096: 'thumbsDown', e095: 'thumbsUp', e036: 'ticketFilled', e00a: 'ticket', e05d: 'tipFilled', e016: 'tip', e035: 'tobacco', e0a5: 'trashFilled', e0a4: 'trash', e034: 'twitterFilled', e083: 'viewFilled', e082: 'view', e09a: 'weight', e07a: 'xBold', e06e: 'xCircleFilled', e06d: 'xCircle', e000: 'x'}

module.exports = function(file, api, options) {

  function handleName(name) {
    const newName = renamed[name] || name
    if(!icons.includes(newName)) {
      // console.log(`Could not find icon: ${newName}`)
    }
  }

  const j = api.jscodeshift
  const root = j(file.source)
  const importsSnacksIcon = root
    .find(j.ImportDeclaration, {source: {value: 'ic-snacks'}})
    .filter(path => j(path).find(j.ImportSpecifier, {imported: {name: 'Icon'}}))
    .size() > 0
  if(!importsSnacksIcon) return file.source

  root
    .find(j.JSXOpeningElement, {name: {type: 'JSXIdentifier', name: 'Icon'}})
    .forEach(path => {
      const element = j(path)
      function processNameAttribute(attribute, handle) {
        const value = attribute.value.value
        switch(value.type) {
          case 'StringLiteral': {
            handle(value.value)
            return
          }
          case 'JSXExpressionContainer': {
            switch(value.expression.type) {
              case('StringLiteral'): {
                handle(value.expression.value)
                return
              }
              case('ConditionalExpression'): {
                const {consequent, alternate} = value.expression
                if(
                  consequent.type === 'StringLiteral' &&
                  alternate.type === 'StringLiteral'
                ) {
                  handle(consequent.value)
                  handle(alternate.value)
                  return
                }
                console.log(`unhandled ternary types: ${consequent.type}, ${alternate.type}`)
                return
              }
              default:
                console.log(`unhandled expression type (${value.expression.type}) in ${file.path}`)
            }
            return
          }
          default:
            throw `Unhandled name attribute value type: ${value.type}`
        }
      }
      function processStyleAttribute(attribute) {
        const container = attribute.value.value
        if(container.type === 'JSXExpressionContainer') {
          const {expression} = container
          switch(expression.type) {
            case 'ObjectExpression': {
              // console.log(expression)
              return
            }
            case 'ArrayExpression': {
              // console.log(expression)
              return
            }
            default:
              console.error(`Cannot process style attribute value type: ${expression.type}`)
              return
          }
        } else {
          throw `Unhandled style attribute value type: ${container.type}`
        }
      }
      element
        .find(j.JSXAttribute, {name: {name: 'code'}})
        .forEach(attribute => {
          processNameAttribute(attribute, value => {
            if(hexValues[value]) {
              handleName(hexValues[value])
            } else {
              console.log(`could not find hex: ${value}`)
            }
          })
        })
      element
        .find(j.JSXAttribute, {name: {name: 'name'}})
        .forEach(attribute => {
          processNameAttribute(attribute, value => handleName(value))
        })
      element
        .find(j.JSXAttribute, {name: {name: 'style'}})
        .forEach(attribute => {
          processStyleAttribute(attribute)
        })
      })
  return file.source

}
