import React from 'react'
import renderer from 'react-test-renderer'
import Column from '../Column'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

it('renders Column correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Column sizes={{ sm: 3 }} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Column sizes correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Column sizes={{ sm: 1 }} />
        <Column sizes={{ sm: 2 }} />
        <Column sizes={{ sm: 3 }} />
        <Column sizes={{ sm: 4 }} />
        <Column sizes={{ sm: 5 }} />
        <Column sizes={{ sm: 6 }} />
        <Column sizes={{ sm: 7 }} />
        <Column sizes={{ sm: 8 }} />
        <Column sizes={{ sm: 9 }} />
        <Column sizes={{ sm: 10 }} />
        <Column sizes={{ sm: 11 }} />
        <Column sizes={{ sm: 12 }} />
        <Column sizes={{ sm: 13 }} />
        <Column sizes={{ sm: 14 }} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Column multi-sizes correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Column sizes={{ sm: 2, md: 2, lg: 4, xl: 5}} />
        <Column sizes={{ sm: 2, lg: 4, xl: 5}} />
        <Column sizes={{ sm: 2, md: 2, lg: 4, }} />
        <Column sizes={{ md: 2, lg: 4, xl: 5}} />
        <Column sizes={{ sm: 2, md: 2, xl: 5}} />
        <Column sizes={{ sm: 6, md: 2, xl: 1}} />
        <Column sizes={{ md: 6, xl: 3}} />
        <Column sizes={{ sm: 6, md: 4, xl: 12}} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Column without passed size correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Column />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Column with passed styles correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Column
          sizes={{ sm: 3 }}
          style={{ display: 'block', color: '#ccc' }}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('warns about bad sizes prop', () => {
  const oldWarn = console.warn
  console.warn = spy()
  const column = mount(
    <StyleRoot>
      <div>
      <StyleRoot>
        <div>
          <Column sizes={{ xs: 3 }} />
        </div>
      </StyleRoot>
      </div>
    </StyleRoot>
  )

  expect(console.warn.calledOnce).toBeTruthy()
  expect(console.warn.calledWith('xs size prop passed to Column!',
  'This will be ignored. All columns at xs screen size are full-width. ',
  'Please remove this definition. Sizes passed: ', { xs: 3 })).toBeTruthy()

  console.warn = oldWarn
})
