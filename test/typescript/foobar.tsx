import * as React from 'react'
import { Button, SVGIcon } from '../../src'

export function Foo() {
  return <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e}>Foo</Button>
}

export function Foo2() {
  return (
    <Button href="foo.html" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e}>
      Foo
    </Button>
  )
}

export function Bar() {
  return <SVGIcon width="75px" height="75px" name="delete" />
}
