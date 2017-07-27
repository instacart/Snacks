import React from 'react'
import renderer from 'react-test-renderer'
import ScrollTrack from '../ScrollTrack'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

it('renders ScrollTrack correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <ScrollTrack leftOverride={0} >
          <p>one</p>
          <p>two</p>
          <p>three</p>
          <p>four</p>
          <p>five</p>
          <p>six</p>
          <p>seven</p>
        </ScrollTrack>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ScrollTrack without children correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <ScrollTrack leftOverride={0} >
        </ScrollTrack>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ScrollTrack buttons correctly', () => {
  const track = mount(
    <StyleRoot>
      <div>
        <ScrollTrack leftOverride={0}>
          <p>one</p>
          <p>two</p>
          <p>three</p>
          <p>four</p>
          <p>five</p>
          <p>six</p>
          <p>seven</p>
        </ScrollTrack>
      </div>
    </StyleRoot>
  )

  track.find(ScrollTrack).node.showRightArrow()
  expect(track.find('button')).toHaveLength(1)

  track.find(ScrollTrack).node.showLeftArrow()
  expect(track.find('button')).toHaveLength(2)

  track.find(ScrollTrack).node.hideRightArrow()
  expect(track.find('button')).toHaveLength(1)

  track.find(ScrollTrack).node.hideLeftArrow()
  expect(track.find('button')).toHaveLength(0)

  track.find(ScrollTrack).node.showRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  expect(track.find('button')).toHaveLength(2)
  track.find(ScrollTrack).node.hideArrows()
  expect(track.find('button')).toHaveLength(0)
})
