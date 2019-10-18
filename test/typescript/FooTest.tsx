import * as React from 'react'

import { withTheme } from '../../src'
import { WithThemeInjectedProps } from '../../src/styles/themer/withTheme'

export interface FooTestRefApi {
  focus(): void
}

interface FooTestProps extends WithThemeInjectedProps {
  ref?: React.Ref<FooTestRefApi>
}

class FooTest extends React.Component<FooTestProps> {
  focus() {}

  render() {
    return <div />
  }
}

export default withTheme(FooTest)
