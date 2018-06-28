import React from 'react'
import PropTypes from 'prop-types'
import { StyleRoot } from 'radium'

import Navigation from '../Navigation'
import './styles.css'
import * as styles from './styles'

const Layout = ({children}) => (
  <StyleRoot>
    <div style={styles.container} >
      <div style={styles.navigation} >
        <Navigation />
      </div>
      <div style={styles.content} >
        {children}
      </div>
    </div>
  </StyleRoot>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout