import React, {Fragment} from 'react'
import Playground from '../Playground'
import {Title2, Title3, Subtitle} from '../Typography'
import PropsDocs from '../PropsDocs'
import ButtonDocs from '!!react-docgen-loader!../../../../src/components/Buttons/Button'

export default () => (
  <Fragment>
    <Title2>Button</Title2>
    <Subtitle>
      This is our Button.
      There are many like it, but this one is ours.

      Buttons guide our users to take a certain action, like 'Add to Cart' or
      'Checkout'. The call to action should start with an active verb, and the
      style choice of the button should reflect the hierarchy and importance of
      the action.
    </Subtitle>
    <PropsDocs docs={ButtonDocs} />

    <Title3>Primary</Title3>
    Primary buttons are for, you guessed it, the primary action.
    Don't use these lightly.
    Overuse on a single screen could hinder your main objective rather than help it.

    <Playground>
      {`
        <div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Tiny</div>
            <Button snacksStyle="primary" size="tiny">
              Primary Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Small</div>
            <Button snacksStyle="primary" size="small">
              Primary Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Standard</div>
            <Button snacksStyle="primary" size="standard">
              Primary Button
            </Button>
          </div>
          <div>
            <div style={{marginBottom: 4}}>Large</div>
            <Button snacksStyle="primary" size="large">
              Primary Button
            </Button>
          </div>
        </div>
      `}
    </Playground>

    <Title3>Secondary</Title3>
    Secondary buttons are for your second most important action.
    A good use is as a cancel button when asking the user a question.

    <Playground>
      {`
        <div style={{display: 'flex'}}>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Tiny</div>
            <Button snacksStyle="secondary" size="tiny">
              Secondary Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Small</div>
            <Button snacksStyle="secondary" size="small">
              Secondary Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Standard</div>
            <Button snacksStyle="secondary" size="standard">
              Secondary Button
            </Button>
          </div>
          <div>
            <div style={{marginBottom: 4}}>Large</div>
            <Button snacksStyle="secondary" size="large">
              Secondary Button
            </Button>
          </div>
        </div>
      `}
    </Playground>

    <Title3>Flat</Title3>
    The flat style can be used when you want a button that looks like a link.
    A typical solution is to use an anchor tag to do this, however this approach
    has issues such as not having consistent padding to a button and there are
    accessibility concerns (links should navigate, buttons should cause actions).

    <Playground>
      {`
        <div style={{display: 'flex'}}>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Tiny</div>
            <Button snacksStyle="flat" size="tiny">
              Flat Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Small</div>
            <Button snacksStyle="flat" size="small">
              Flat Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Standard</div>
            <Button snacksStyle="flat" size="standard">
              Flat Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Large</div>
            <Button snacksStyle="flat" size="large">
              Flat Button
            </Button>
          </div>
          <div>
            <div style={{marginBottom: 4}}>Disabled</div>
            <Button snacksStyle="flat" size="standard" disabled>
              Flat Button
            </Button>
          </div>
        </div>
      `}
    </Playground>

    <Title3>Coupon</Title3>

    Note that coupon buttons aren't affected by a Snacks theme.

    <Playground>
      {`
        <div style={{display: 'flex'}}>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Tiny</div>
            <Button snacksStyle="coupon" size="tiny">
              Coupon Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Small</div>
            <Button snacksStyle="coupon" size="small">
              Coupon Button
            </Button>
          </div>
          <div style={{marginBottom: 12}}>
            <div style={{marginBottom: 4}}>Standard</div>
            <Button snacksStyle="coupon" size="standard">
              Coupon Button
            </Button>
          </div>
          <div>
            <div style={{marginBottom: 4}}>Large</div>
            <Button snacksStyle="coupon" size="large">
              Coupon Button
            </Button>
          </div>
        </div>
      `}
    </Playground>

    <Title3>Disabled</Title3>

    Disabled buttons are to show the user there is a future action they can take, but they must first accomplish another task.

    <Playground>
      {`
        <div>
          <span style={{marginBottom: 12}}>
            <Button disabled snacksStyle="primary" size="tiny">
              Disabled Button
            </Button>
          </span>
          <span style={{marginBottom: 12}}>
            <Button disabled snacksStyle="primary" size="small">
              Disabled Button
            </Button>
          </span>
          <span style={{marginBottom: 12}}>
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
      `}
    </Playground>

    <Title3>Inverted colors</Title3>
    Button colors can be inverted for darker backgrounds.

    <Playground>
      {`
        <div style={{padding: '24px', backgroundColor: '#43B02A'}}>
          <span style={{marginBottom: 12}}>
            <Button inverted snacksStyle="primary" size="standard">
              Primary Button
            </Button>
          </span>
          <span style={{marginBottom: 12}}>
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
      `}
    </Playground>

    <Title3>With icons</Title3>
    Buttons can be rendered with an icon to the left or right of the primary content.

    <Playground>
      {`
        <div style={{padding: '24px'}}>
          <span style={{marginBottom: 12}}>
            <Button iconPosition="right" icon={<Icon name="arrowRightSmallBold" />} snacksStyle="secondary" size="standard">
              View 24 more
            </Button>
          </span>
          <span style={{marginBottom: 12}}>
            <Button icon="cart" snacksStyle="primary" size="standard">
              Cart
            </Button>
          </span>
          <span style={{marginBottom: 12}}>
            <Button icon={<Icon name="deals" />} snacksStyle="coupon" size="small">
              Save $5.00
            </Button>
          </span>
        </div>
      `}
    </Playground>
  </Fragment>
)
