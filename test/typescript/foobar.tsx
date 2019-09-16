import * as React from 'react'
import { Button, SVGIcon } from '../../src'

export function Foo() {
  return (
    <Button
      style={[
        { background: 'green', ':hover': { background: 'purple' } },
        true && { color: 'red' },
      ]}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => e}
    >
      Foo
    </Button>
  )
}

export function Foo2() {
  return (
    <Button
      style={{
        '@media (max-width: 123px)': {
          background: 'green',
        },
      }}
      href="foo.html"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e}
    >
      Foo
    </Button>
  )
}

export function Bar() {
  return <SVGIcon width="75px" height="75px" name="delete" />
}
