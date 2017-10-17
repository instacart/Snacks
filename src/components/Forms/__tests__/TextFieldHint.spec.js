import React       from 'react'
import renderer    from 'react-test-renderer'
import { StyleRoot } from 'radium'
import TextFieldHint from '../TextFieldHint'

it('renders TextFieldHint correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <TextFieldHint text="Text field hint text" show />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})



it('renders TextFieldHint when show is false', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <TextFieldHint text="Text field hint text" show={false} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders TextFieldHint when disabled', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <TextFieldHint text="Text field hint text" show disabled />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
