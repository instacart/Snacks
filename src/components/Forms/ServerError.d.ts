import * as React from 'react'
import { Interpolation } from '@emotion/core'

export interface ServerErrorProps {
  className?: string

  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style?: Interpolation

  /** Error text */
  text?: React.ReactNode
}

declare const ServerError: React.ComponentClass<ServerErrorProps>

export default ServerError
