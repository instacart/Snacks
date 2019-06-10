import * as React from 'react'
import { Button, SVGIcon } from '../../src'

export function Foo() {
  return <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e}>Foo</Button>
}

export function Foo2() {
  return (
    <Button
      className="foo"
      css={{ background: 'red', ':hover': { background: 'purple' } }}
      style={{ background: 'red', ':hover': { background: 'purple' } }}
    >
      Foo
    </Button>
  )
}

export function Bar() {
  return <SVGIcon width="75px" height="75px" name="delete" />
}
