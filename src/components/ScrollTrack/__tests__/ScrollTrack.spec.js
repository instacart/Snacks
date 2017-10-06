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

it('renders ScrollTrack with animation props correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <ScrollTrack
          scrollTimingFunction={'ease-in'}
          scrollSpeed={1000}
        >
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

it('onBefore promises & callbacks called correctly', async () => {
  const onBeforeNext = spy()
  const onBeforeBack = spy()
  const track = mount(
    <StyleRoot>
      <div>
        <ScrollTrack
          onBeforeNext={() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  onBeforeNext()
                  resolve()
                }, 1)
            })
          }}
          onBeforeBack={() => { onBeforeBack() }}
        >
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

  // show and click next
  track.find(ScrollTrack).node.showRightArrow()
  track.find('button').simulate('click')
  await expect(onBeforeNext.calledOnce).resolves.toBeTruthy
  await expect(onBeforeNext.calledWith({})).resolves.toBeTruthy

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').simulate('click')
  await expect(onBeforeBack.calledOnce).resolves.toBeTruthy
  await expect(onBeforeBack.calledWith({})).resolves.toBeTruthy
})

it('onAfter promises & callbacks called correctly', async () => {
  const onBeforeNext = spy()
  const onBeforeBack = spy()
  const onAfterNext = spy()
  const onAfterBack = spy()
  const track = mount(
    <StyleRoot>
      <div>
        <ScrollTrack
          onBeforeBack={onBeforeBack}
          onAfterBack={onAfterBack}
          onAfterNext={onAfterNext}
          onBeforeNext={() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  onBeforeNext()
                  resolve()
                }, 1)
            })
          }}
        >
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

  // show and click next
  track.find(ScrollTrack).node.showRightArrow()
  track.find('button').simulate('click')
  expect(onAfterNext.calledOnce).toBeTruthy
  expect(onAfterNext.calledWith({})).toBeTruthy
  await expect(onAfterBack.calledAfter(onBeforeNext)).resolves.toBeTruthy

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').simulate('click')
  expect(onAfterBack.calledOnce).toBeTruthy
  expect(onAfterBack.calledWith({})).toBeTruthy
  expect(onAfterBack.calledAfter(onBeforeBack)).toBeTruthy
})

it('works without any callbacks passed in', async () => {
  const track = mount(
    <StyleRoot>
      <div>
        <ScrollTrack>
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

  // show and click next
  track.find(ScrollTrack).node.showRightArrow()
  track.find('button').simulate('click')

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').simulate('click')
})
