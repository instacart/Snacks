import React from 'react'
import renderer from 'react-test-renderer'
import ScrollTrack from '../ScrollTrack'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'

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
  const styles = {
    RightArrow: {
      backgroundColor: 'blue'
    },
    LeftArrow: {
      backgroundColor: 'red'
    },
  }

  const track = mount(
    <StyleRoot>
      <div>
        <ScrollTrack leftOverride={0} styles={styles}>
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

  const rightButtonStyle = track.find('button').props().style.backgroundColor
  expect(rightButtonStyle).toEqual(styles.RightArrow.backgroundColor)

  track.find(ScrollTrack).node.showLeftArrow()
  expect(track.find('button')).toHaveLength(2)

  const leftButtonStyle = track.find('button').at(0).props().style.backgroundColor
  expect(leftButtonStyle).toEqual(styles.LeftArrow.backgroundColor)

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
