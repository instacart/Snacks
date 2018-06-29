import React, {Fragment} from 'react'
import {colors} from 'ic-snacks'
import Swatch from '../Swatch'
import {Title2, Title3, Body} from '../Typography'

const group = {
  display: 'flex',
  flexWrap: 'wrap',
}

export default function Colors() {
  return (
    <Fragment>
      <Title2>Colors</Title2>
      <Body>
        We have two main color palettes - a UI color palette (primary and
        secondary colors) and an illustration color palette that has some
        expanded colors for selective use.
      </Body>
      <Title3>Primary</Title3>
      <div style={group}>
        <Swatch name="Green 700" value={colors.GREEN_700} />
        <Swatch name="Green 600" value={colors.GREEN_600} />
        <Swatch name="Green 500" value={colors.GREEN_500} selected />
        <Swatch name="Green 400" value={colors.GREEN_400} />
        <Swatch name="Green 300" value={colors.GREEN_300} />
      </div>
      <Title3>Secondary</Title3>
      <div style={group}>
        <Swatch name="Red 700" value={colors.RED_700} />
        <Swatch name="Red 600" value={colors.RED_600} />
        <Swatch name="Red 500" value={colors.RED_500} selected />
        <Swatch name="Red 400" value={colors.RED_400} />
        <Swatch name="Red 300" value={colors.RED_300} />
      </div>
      <Title3>Grayscale</Title3>
      <div style={group}>
        <Swatch name="White" value={colors.WHITE} />
        <Swatch name="Gray 97" value={colors.GRAY_97} />
        <Swatch name="Gray 93" value={colors.GRAY_93} />
        <Swatch name="Gray 88" value={colors.GRAY_88} />
        <Swatch name="Gray 74" value={colors.GRAY_74} />
        <Swatch name="Gray 20" value={colors.GRAY_20} />
        <Swatch name="Gray 13" value={colors.GRAY_13} />
      </div>
    </Fragment>
  )
}
