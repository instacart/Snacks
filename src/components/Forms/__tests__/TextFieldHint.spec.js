import React from 'react'
import renderer from 'react-test-renderer'
import TextFieldHint from '../TextFieldHint'

it('renders TextFieldHint correctly', () => {
  const tree = renderer
    .create(
      <div>
        <TextFieldHint text="Text field hint text" show />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders TextFieldHint when show is false', () => {
  const tree = renderer
    .create(
      <div>
        <TextFieldHint text="Text field hint text" show={false} />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders TextFieldHint when disabled', () => {
  const tree = renderer
    .create(
      <div>
        <TextFieldHint text="Text field hint text" show disabled />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
