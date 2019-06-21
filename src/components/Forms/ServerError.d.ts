import * as React from 'react'
import { RadiumStyles } from '../..'

export interface ServerErrorProps {
  style?: RadiumStyles

  /** Error text */
  text?: React.ReactNode
}

declare const ServerError: React.ComponentClass<ServerErrorProps>

export default ServerError
