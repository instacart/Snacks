import React from 'react'
import renderer from 'react-test-renderer'
import ScrollTrack from '../ScrollTrack'
import { StyleRoot } from 'radium'
import { ReactWrapper, mount } from 'enzyme'
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

  // should have 2 buttons
  let buttons = track.find('button')
  let leftButton = buttons.first()
  let rightButton = buttons.last()
  expect(buttons).toHaveLength(2)

  // check that neither are showing
  let leftButtonStyle = leftButton.props().style
  let rightButtonStyle = rightButton.props().style
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')

  // show right arrow
  track.find(ScrollTrack).node.showRightArrow()

  // check arrow is showing and has correct styles
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // make sure styles are correct
  expect(buttons).toHaveLength(2)
  expect(rightButtonStyle.backgroundColor).toEqual(styles.RightArrow.backgroundColor)
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('none')

  // show left arrow
  track.find(ScrollTrack).node.showLeftArrow()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // make sure styles are correct
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.backgroundColor).toEqual(styles.LeftArrow.backgroundColor)

  // hide both arrows
  track.find(ScrollTrack).node.hideArrows()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // ensure both are hidden
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')
})

it('renders custom ScrollTrack buttons correctly', () => {
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
        <ScrollTrack
          styles={styles}
          backButtonElement={(
            <button>
              <span>back</span>
            </button>
          )}
          nextButtonElement={(
            <button>
              <span>next</span>
            </button>
          )}
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

  // should have 2 buttons
  let buttons = track.find('button')
  let leftButton = buttons.first()
  let rightButton = buttons.last()
  expect(buttons).toHaveLength(2)

  // check that neither are showing
  let leftButtonStyle = leftButton.props().style
  let rightButtonStyle = rightButton.props().style
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')

  // show right arrow
  track.find(ScrollTrack).node.showRightArrow()

  // check arrow is showing and has correct styles
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // make sure styles are correct
  expect(buttons).toHaveLength(2)
  expect(rightButtonStyle.backgroundColor).toEqual(styles.RightArrow.backgroundColor)
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('none')

  // show left arrow
  track.find(ScrollTrack).node.showLeftArrow()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // make sure styles are correct
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.backgroundColor).toEqual(styles.LeftArrow.backgroundColor)

  // hide both arrows
  track.find(ScrollTrack).node.hideArrows()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = leftButton.props().style
  rightButtonStyle = rightButton.props().style

  // ensure both are hidden
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')
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
  track.find('button').last().simulate('click')
  await expect(onBeforeNext.calledOnce).resolves.toBeTruthy
  await expect(onBeforeNext.calledWith({})).resolves.toBeTruthy

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').first().simulate('click')
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
  track.find('button').last().simulate('click')
  expect(onAfterNext.calledOnce).toBeTruthy
  expect(onAfterNext.calledWith({})).toBeTruthy
  await expect(onAfterBack.calledAfter(onBeforeNext)).resolves.toBeTruthy

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').first().simulate('click')
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
  track.find('button').last().simulate('click')

  // show and click back
  track.find(ScrollTrack).node.hideRightArrow()
  track.find(ScrollTrack).node.showLeftArrow()
  track.find('button').first().simulate('click')
})
