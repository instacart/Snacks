import React from 'react'
import * as styles from './styles'

const styled = typography => ({children, style}) => (
  <div style={{...typography, ...style}}>{children}</div>
)

export const Title1 = styled(styles.title1)
export const Title2 = styled(styles.title2)
export const Title3 = styled(styles.title3)
export const SectionTitle = styled(styles.sectionTitle)
export const Subtitle = styled(styles.subtitle)
export const BodyTitle2 = styled(styles.bodyTitle2)
export const Body = styled(styles.body)

