import * as React from 'react'

interface PortalProps {
  children: React.ReactNode
  container?: React.ReactElement
}

declare const Portal: React.ComponentClass<PortalProps>

export default Portal
