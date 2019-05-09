import * as React from 'react'

import { withTheme } from '../../src'
import { WithThemeInjectedProps } from '../../src/styles/themer/withTheme'

interface FooTestProps extends WithThemeInjectedProps {}

class FooTest extends React.Component<FooTestProps> {
  focus() {}

  render() {
    return <div />
  }
}

export default withTheme(FooTest)
