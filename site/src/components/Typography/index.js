import React from 'react'
import * as styles from './styles'

const styled = style => ({children}) => <div style={style}>{children}</div>

export const Title1 = styled(styles.title1)
export const Title2 = styled(styles.title2)
export const Title3 = styled(styles.title3)
export const Subtitle = styled(styles.subtitle)
export const BodyTitle2 = styled(styles.bodyTitle2)

