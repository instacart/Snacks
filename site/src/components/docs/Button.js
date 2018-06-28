import React, {Fragment} from 'react'
import Playground from '../Playground'
import {Title2, Title3, SectionTitle, Subtitle, Body} from '../Typography'
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

    <Title3>Styles</Title3>
    <SectionTitle>Primary</SectionTitle>
    <Body>
      Primary buttons are for, you guessed it, the primary action. Don't use
      these lightly. Overuse on a single screen could hinder your main objective
      rather than help it.
    </Body>

    <Playground>
      {`
        <Button snacksStyle="primary">
          Primary Button
        </Button>
      `}
    </Playground>

    <SectionTitle>Secondary</SectionTitle>
    <Body>
      Secondary buttons are for your second most important action.
      A good use is as a cancel button when asking the user a question.
    </Body>

    <Playground>
      {`
        <Button snacksStyle="secondary">
          Secondary Button
        </Button>
      `}
    </Playground>

    <SectionTitle>Flat</SectionTitle>
    <Body>
      The flat style can be used when you want a button that looks like a link.
      A typical solution is to use an anchor tag to do this, however this approach
      has issues such as not having consistent padding to a button and there are
      accessibility concerns (links should navigate, buttons should cause actions).
    </Body>

    <Playground>
      {`
        <Button snacksStyle="flat">
          Flat Button
        </Button>
      `}
    </Playground>

    <SectionTitle>Coupon</SectionTitle>
    <Body>
      Note that coupon buttons aren't affected by a Snacks theme.
    </Body>

    <Playground>
      {`
        <Button snacksStyle="coupon">
          Coupon Button
        </Button>
        `}
    </Playground>

    <SectionTitle>Disabled</SectionTitle>
    <Body>
      Disabled buttons are to show the user there is a future action they can
      take, but they must first accomplish another task.
    </Body>

    <Playground>
      {`
        <Button disabled snacksStyle="primary">
          Disabled Button
        </Button>
        `}
    </Playground>

    <SectionTitle>Inverted colors</SectionTitle>
    <Body>
      Button colors can be inverted for darker backgrounds.
    </Body>

    <Playground>
      {`
        <div style={{padding: spacing.MD, backgroundColor: colors.GREEN_500}}>
          <Button inverted snacksStyle="primary" style={{marginRight: spacing.SM}}>
            Primary Button
          </Button>
          <Button inverted snacksStyle="secondary" style={{marginRight: spacing.SM}}>
            Secondary Button
          </Button>
        </div>
      `}
    </Playground>

    <Title3>Sizes</Title3>
    <Body>
      Buttons can also be set to a variety of sizes.
    </Body>
    <Playground>
      {`
        <div>
          <Button size="large" style={{marginBottom: spacing.SM, display: 'block'}}>
            Large Button
          </Button>
          <Button size="standard" style={{marginBottom: spacing.SM, display: 'block'}}>
            Standard Button
          </Button>
          <Button size="small" style={{marginBottom: spacing.SM, display: 'block'}}>
            Small Button
          </Button>
          <Button size="tiny" style={{marginBottom: spacing.SM, display: 'block'}}>
            Tiny Button
          </Button>
        </div>
      `}
    </Playground>

    <Title3>With icons</Title3>
    <Body>
      Buttons can be rendered with an icon to the left or right of the primary
      content.
    </Body>

    <Playground>
      {`
        <div>
          <Button iconPosition="right" icon={<Icon name="arrowRightSmallBold" />} snacksStyle="secondary" style={{marginBottom: spacing.SM, display: 'block'}}>
            View 24 more
          </Button>
          <Button icon="cart" style={{marginBottom: spacing.SM, display: 'block'}}>
            Cart
          </Button>
          <Button icon={<Icon name="deals" />} snacksStyle="coupon" size="small" style={{marginBottom: spacing.SM, display: 'block'}}>
            Save $5.00
          </Button>
        </div>
      `}
    </Playground>
  </Fragment>
)
