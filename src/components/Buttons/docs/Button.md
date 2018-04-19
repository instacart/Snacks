This is our Button.
There are many like it, but this one is ours.

Buttons guide our users to take a certain action, like 'Add to Cart' or 'Checkout'.
The call to action should start with an active verb, and the style choice of the button should reflect the hierarchy and importance of the action.

### Primary
Primary buttons are for, you guessed it, the primary action.
Don't use these lightly.
Overuse on a single screen could hinder your main objective rather than help it.

```js
<div style={{display: 'flex'}}>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Tiny</div>
    <Button snacksStyle="primary" size="tiny">
      Primary Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Small</div>
    <Button snacksStyle="primary" size="small">
      Primary Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Standard</div>
    <Button snacksStyle="primary" size="standard">
      Primary Button
    </Button>
  </div>
  <div>
    <div style={{marginBottom: '8px'}}>Large</div>
    <Button snacksStyle="primary" size="large">
      Primary Button
    </Button>
  </div>
</div>
```

### Secondary
Secondary buttons are for your second most important action.
A good use is as a cancel button when asking the user a question.

```js
<div style={{display: 'flex'}}>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Tiny</div>
    <Button snacksStyle="secondary" size="tiny">
      Secondary Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Small</div>
    <Button snacksStyle="secondary" size="small">
      Secondary Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Standard</div>
    <Button snacksStyle="secondary" size="standard">
      Secondary Button
    </Button>
  </div>
  <div>
    <div style={{marginBottom: '8px'}}>Large</div>
    <Button snacksStyle="secondary" size="large">
      Secondary Button
    </Button>
  </div>
</div>
```

### Flat
The flat style can be used when you want a button that looks like a link.
A typical solution is to use an anchor tag to do this, however this approach
has issues such as not having consistent padding to a button and there are
accessibility concerns (links should navigate, buttons should cause actions).

```js
<div style={{display: 'flex'}}>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Tiny</div>
    <Button snacksStyle="flat" size="tiny">
      Flat Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Small</div>
    <Button snacksStyle="flat" size="small">
      Flat Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Standard</div>
    <Button snacksStyle="flat" size="standard">
      Flat Button
    </Button>
  </div>
  <div>
    <div style={{marginBottom: '8px'}}>Large</div>
    <Button snacksStyle="flat" size="large">
      Flat Button
    </Button>
  </div>
</div>
```

### Coupon

Note that coupon buttons aren't affected by a Snacks theme.

```js
<div style={{display: 'flex'}}>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Tiny</div>
    <Button snacksStyle="coupon" size="tiny">
      Coupon Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Small</div>
    <Button snacksStyle="coupon" size="small">
      Coupon Button
    </Button>
  </div>
  <div style={{marginRight: '24px'}}>
    <div style={{marginBottom: '8px'}}>Standard</div>
    <Button snacksStyle="coupon" size="standard">
      Coupon Button
    </Button>
  </div>
  <div>
    <div style={{marginBottom: '8px'}}>Large</div>
    <Button snacksStyle="coupon" size="large">
      Coupon Button
    </Button>
  </div>
</div>
```

### Disabled

Disabled buttons are to show the user there is a future action they can take, but they must first accomplish another task.

```js
<div>
  <span style={{marginRight: '24px'}}>
    <Button disabled snacksStyle="primary" size="tiny">
      Disabled Button
    </Button>
  </span>
  <span style={{marginRight: '24px'}}>
    <Button disabled snacksStyle="primary" size="small">
      Disabled Button
    </Button>
  </span>
  <span style={{marginRight: '24px'}}>
    <Button disabled snacksStyle="primary" size="standard">
      Disabled Button
    </Button>
  </span>
  <span>
    <Button disabled snacksStyle="primary" size="large">
      Disabled Button
    </Button>
  </span>
</div>
```

### Inverted colors
Button colors can be inverted for darker backgrounds.

```js
<div style={{padding: '24px', backgroundColor: '#43B02A'}}>
  <span style={{marginRight: '24px'}}>
    <Button inverted snacksStyle="primary" size="standard">
      Primary Button
    </Button>
  </span>
  <span style={{marginRight: '24px'}}>
    <Button inverted snacksStyle="secondary" size="standard">
      Secondary Button
    </Button>
  </span>
  <span>
    <Button disabled snacksStyle="primary" size="standard">
      Disabled Button
    </Button>
  </span>
</div>
```

### With icons
Buttons can be rendered with an icon to the left or right of the primary content.

```js
<div style={{padding: '24px'}}>
  <span style={{marginRight: '24px'}}>
    <Button iconPosition="right" icon={<Icon name="arrowRightSmallBold" />} snacksStyle="secondary" size="standard">
      View 24 more
    </Button>
  </span>
  <span style={{marginRight: '24px'}}>
    <Button icon="cart" snacksStyle="primary" size="standard">
      Cart
    </Button>
  </span>
  <span style={{marginRight: '24px'}}>
    <Button icon={<Icon name="deals" />} snacksStyle="coupon" size="small">
      Save $5.00
    </Button>
  </span>
</div>
```
