import React, {Fragment} from 'react'
import {Button, spacing, SVGIcon} from 'ic-snacks'
import {Title1, Subtitle} from '../Typography'
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
          snacksStyle="secondary"
          href="https://github.com/instacart/Snacks"
          style={styles.link}
          elementAttributes={{target: '_blank'}}
        >
          GitHub
        </Button>
        <Button
          snacksStyle="secondary"
          href="https://www.npmjs.com/package/ic-snacks"
          style={styles.link}
          elementAttributes={{target: '_blank'}}
        >
          npm
        </Button>
      </div>
      <Button
        size='large'
        href='/foundations/introduction'
        icon={<SVGIcon name='arrowRight' size='small' />}
        iconPosition='right'
        style={styles.introduction}
      >
        Introduction
      </Button>
      <div style={styles.splash} />
      <div style={styles.background} />
    </Fragment>
  )
}
