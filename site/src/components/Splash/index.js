import React, {Fragment} from 'react'
import {Button, spacing} from 'ic-snacks'
import {Title1, Subtitle} from '../Typography'
import splash from './splash.png'
import * as styles from './styles'

export default function Splash() {
  return (
    <Fragment>
      <Title1 style={{marginBottom: spacing.MD}}>
        Welcome to Snacks!
      </Title1>
      <Subtitle style={{width: '65%'}}>
        Snacks is a repository of design guidelines and interface components
        used across Instacart's products. These components are a set of atomic
        pieces, designed for web, iOS, and Android. Paired with them, you will
        find React components. Enjoy!
      </Subtitle>
      <div style={{display: 'flex', marginTop: spacing.XL}}>
        <Button
          size="large"
          href="https://github.com/instacart/Snacks"
          style={{textDecoration: 'none'}}
          elementAttributes={{target: '_blank'}}
          >
          GitHub
        </Button>
        <Button
          size="large"
          href="https://www.npmjs.com/package/ic-snacks"
          style={{textDecoration: 'none'}}
          snacksStyle="flat"
          elementAttributes={{target: '_blank'}}
        >
          npm
        </Button>
      </div>
      <img src={splash} style={styles.splash} alt="teamwork carrot" />
    </Fragment>
  )
}
