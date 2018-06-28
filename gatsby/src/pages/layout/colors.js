import React from 'react'
import {colors} from 'ic-snacks'
import Layout from '../../components/Layout'
import Swatch from '../../components/Swatch'
import SwatchGroup from '../../components/SwatchGroup'
import {Title2, Title3} from '../../components/Typography'

export default function Colors() {
  return (
    <Layout>
      <Title2>Colors</Title2>
      We have two main color palettes - a UI color palette (primary and
      secondary colors) and an illustration color palette that has some expanded
      colors for selective use.
      <Title3>Primary</Title3>
      <SwatchGroup>
        <Swatch name="Green 700" value={colors.GREEN_700} />
        <Swatch name="Green 600" value={colors.GREEN_600} />
        <Swatch name="Green 500" value={colors.GREEN_500} selected />
        <Swatch name="Green 400" value={colors.GREEN_400} />
        <Swatch name="Green 300" value={colors.GREEN_300} />
      </SwatchGroup>
      <Title3>Secondary</Title3>
      <SwatchGroup>
        <Swatch name="Red 700" value={colors.RED_700} />
        <Swatch name="Red 600" value={colors.RED_600} />
        <Swatch name="Red 500" value={colors.RED_500} selected />
        <Swatch name="Red 400" value={colors.RED_400} />
        <Swatch name="Red 300" value={colors.RED_300} />
      </SwatchGroup>
      <Title3>Grayscale</Title3>
      <SwatchGroup>
        <Swatch name="White" value={colors.WHITE} />
        <Swatch name="Gray 97" value={colors.GRAY_97} />
        <Swatch name="Gray 93" value={colors.GRAY_93} />
        <Swatch name="Gray 88" value={colors.GRAY_88} />
        <Swatch name="Gray 74" value={colors.GRAY_74} />
        <Swatch name="Gray 20" value={colors.GRAY_20} />
        <Swatch name="Gray 13" value={colors.GRAY_13} />
      </SwatchGroup>
    </Layout>
  )
}
