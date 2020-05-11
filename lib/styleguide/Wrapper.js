import React, { Component } from 'react'
import { StyleRoot } from '@instacart/radium'
import SetStyles from '../../src/styles/SetStyles'

export default class Wrapper extends Component {
  render() {
    return (
      <StyleRoot>
        <SetStyles assetsUrl={'src/fonts'} />
        {this.props.children}
      </StyleRoot>
    )
  }
}
