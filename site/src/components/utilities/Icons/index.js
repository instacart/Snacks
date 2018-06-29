import React, {Fragment} from 'react'
import Radium from 'radium'
import {colors, spacing, Tooltip} from 'ic-snacks'
import * as icons from '../../../../../src/components/SVGIcon/icons'
import Playground from '../../Playground'
import {Title2, Title3, SectionTitle, Subtitle, Body} from '../../Typography'
import PropsDocs from '../../PropsDocs'
import SVGIconDocs from '!!react-docgen-loader!../../../../../src/components/SVGIcon/SVGIcon'
import SVGIcon from '../../../../../src/components/SVGIcon/SVGIcon'
import groups from './groups'

export default Radium(() => (
  <Fragment>
    <Title2>SVG Icons</Title2>
    <Subtitle>
      This is our Button.
      There are many like it, but this one is ours.

      Buttons guide our users to take a certain action, like 'Add to Cart' or
      'Checkout'. The call to action should start with an active verb, and the
      style choice of the button should reflect the hierarchy and importance of
      the action.
    </Subtitle>
    <PropsDocs docs={SVGIconDocs} />

    <Title3>Size</Title3>
    <Body>Icons can be styled as three preset sizes.</Body>
    <Playground>
      {`
        <div>
          <SVGIcon name='cart' size='large' style={{marginRight: spacing.SM}} />
          <SVGIcon name='cart' style={{marginRight: spacing.SM}} />
          <SVGIcon name='cart' size='small' style={{marginRight: spacing.SM}} />
        </div>
      `}
    </Playground>

    <Title3>Color</Title3>
    <Body>
      Icons can be colored via the css <code>color</code> property or
      the <code>color</code> prop.
    </Body>
    <Playground>
      {`
        <div>
          <SVGIcon name='cart' style={{color: colors.GREEN_500, marginRight: spacing.SM}} />
          <SVGIcon name='cart' color={colors.GREEN_500} style={{marginRight: spacing.SM}} />
        </div>
      `}
    </Playground>

    <Title3>Icons</Title3>
    {
      Object.keys(groups).map(group => (
        <Fragment key={group}>
          <SectionTitle>{group}</SectionTitle>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {
              groups[group].map(icon => (
                <div
                  key={icon}
                  style={{
                    backgroundColor: colors.GRAY_97,
                    ...spacing.PADDING_XS,
                    ...spacing.MARGIN_RIGHT_XS,
                    ...spacing.MARGIN_BOTTOM_XS,
                    borderRadius: 5,
                    textAlign: 'center',
                    color: colors.GRAY_46,
                    cursor: 'pointer',

                    ':hover': {
                      backgroundColor: colors.GREEN_500,
                      color: 'white',
                    }
                  }}
                >
                  <Tooltip
                    placement="top"
                    snacksStyle="dark"
                    target={<div><SVGIcon name={icon} size='large' /></div>}
                  >
                    {icon}
                  </Tooltip>
                </div>
              ))
            }
          </div>
        </Fragment>
      ))
    }
  </Fragment>
))
