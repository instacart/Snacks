import {spacing, colors} from 'ic-snacks'

const sidebar = 'calc(13vw + 120px)'

export const container = {
}

export const navigation = {
  width: sidebar,
  height: '100vh',
  position: 'fixed',
}

export const content = {
  marginLeft: sidebar,
  padding: '7vw',
  overflow: 'scroll',
}
