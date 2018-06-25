import ReactDOM         from 'react-dom'
import React16Portal    from './React16Portal'
import LegacyPortal     from './LegacyPortal'

let Portal

if (ReactDOM.createPortal) {
  Portal = React16Portal
} else {
  Portal = LegacyPortal
}

export default Portal
