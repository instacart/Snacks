import React from 'react'
import renderer from 'react-test-renderer'
import { ReactWrapper, mount } from 'enzyme'
import { spy } from 'sinon'
import Icon from '../../Icon/Icon'
import ScrollTrack from '../ScrollTrack'

it('renders ScrollTrack correctly', () => {
  const tree = renderer
    .create(
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
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ScrollTrack without children correctly', () => {
  const tree = renderer
    .create(
      <div>
        <ScrollTrack leftOverride={0} />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders ScrollTrack buttons correctly', () => {
  const styles = {
    RightArrow: {
      backgroundColor: 'blue',
    },
    LeftArrow: {
      backgroundColor: 'red',
    },
  }

  const track = mount(
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
  )

  // should have 2 buttons
  let buttons = track.find('button')
  let leftButton = buttons.first()
  let rightButton = buttons.last()
  expect(buttons).toHaveLength(2)

  // check that neither are showing
  let leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  let rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')

  // show right arrow
  track
    .find(ScrollTrack)
    .instance()
    .showRightArrow()
  track.update()

  // check arrow is showing and has correct styles
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // make sure styles are correct
  expect(buttons).toHaveLength(2)
  expect(rightButtonStyle.backgroundColor).toEqual(styles.RightArrow.backgroundColor)
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('none')

  // show left arrow
  track
    .find(ScrollTrack)
    .instance()
    .showLeftArrow()
  track.update()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // make sure styles are correct
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.backgroundColor).toEqual(styles.LeftArrow.backgroundColor)

  // hide both arrows
  track
    .find(ScrollTrack)
    .instance()
    .hideArrows()
  track.update()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // ensure both are hidden
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')
})

it('renders custom ScrollTrack buttons correctly', () => {
  const styles = {
    RightArrow: {
      backgroundColor: 'blue',
    },
    LeftArrow: {
      backgroundColor: 'red',
    },
  }

  const tree = renderer
    .create(
      <div>
        <ScrollTrack
          styles={styles}
          backButtonContent={'HI'}
          nextButtonElement={<Icon name="cart" />}
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
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('works with custom ScrollTrack buttons correctly', () => {
  const styles = {
    RightArrow: {
      backgroundColor: 'blue',
    },
    LeftArrow: {
      backgroundColor: 'red',
    },
  }

  const track = mount(
    <div>
      <ScrollTrack
        styles={styles}
        backButtonContent={'HI'}
        nextButtonElement={<Icon name="cart" />}
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
  )

  // should have 2 buttons
  let buttons = track.find('button')
  let leftButton = buttons.first()
  let rightButton = buttons.last()
  expect(buttons).toHaveLength(2)

  // check that neither are showing
  let leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  let rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')

  // show right arrow
  track
    .find(ScrollTrack)
    .instance()
    .showRightArrow()
  track.update()

  // check arrow is showing and has correct styles
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // make sure styles are correct
  expect(buttons).toHaveLength(2)
  expect(rightButtonStyle.backgroundColor).toEqual(styles.RightArrow.backgroundColor)
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('none')

  // show left arrow
  track
    .find(ScrollTrack)
    .instance()
    .showLeftArrow()
  track.update()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // make sure styles are correct
  expect(rightButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.display).toEqual('block')
  expect(leftButtonStyle.backgroundColor).toEqual(styles.LeftArrow.backgroundColor)

  // hide both arrows
  track
    .find(ScrollTrack)
    .instance()
    .hideArrows()
  track.update()
  buttons = track.find('button')
  leftButton = buttons.first()
  rightButton = buttons.last()
  leftButtonStyle = window.getComputedStyle(leftButton.getDOMNode())
  rightButtonStyle = window.getComputedStyle(rightButton.getDOMNode())

  // ensure both are hidden
  expect(leftButtonStyle.display).toEqual('none')
  expect(rightButtonStyle.display).toEqual('none')
})

it('renders ScrollTrack with animation props correctly', () => {
  const tree = renderer
    .create(
      <div>
        <ScrollTrack scrollTimingFunction={'ease-in'} scrollSpeed={1000}>
          <p>one</p>
          <p>two</p>
          <p>three</p>
          <p>four</p>
          <p>five</p>
          <p>six</p>
          <p>seven</p>
        </ScrollTrack>
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('onBefore promises & callbacks called correctly', async () => {
  const onBeforeNext = spy()
  const onBeforeBack = spy()
  const track = mount(
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
        onBeforeBack={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              onBeforeBack()
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
  )

  // show and click next
  track
    .find(ScrollTrack)
    .instance()
    .showRightArrow()
  track
    .find('button')
    .last()
    .simulate('click')
  await expect(onBeforeNext.calledOnce).resolves.toBeTruthy
  await expect(onBeforeNext.calledWith({})).resolves.toBeTruthy

  // show and click back
  track
    .find(ScrollTrack)
    .instance()
    .hideRightArrow()
  track
    .find(ScrollTrack)
    .instance()
    .showLeftArrow()
  track
    .find('button')
    .first()
    .simulate('click')
  await expect(onBeforeBack.calledOnce).resolves.toBeTruthy
  await expect(onBeforeBack.calledWith({})).resolves.toBeTruthy
})

it('onAfter promises & callbacks called correctly', async () => {
  const onBeforeNext = spy()
  const onBeforeBack = spy()
  const onAfterNext = spy()
  const onAfterBack = spy()
  const track = mount(
    <div>
      <ScrollTrack
        onBeforeBack={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              onBeforeBack()
              resolve()
            }, 1)
          })
        }}
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
  )

  // show and click next
  track
    .find(ScrollTrack)
    .instance()
    .showRightArrow()
  track
    .find('button')
    .last()
    .simulate('click')
  expect(onAfterNext.calledOnce).toBeTruthy
  expect(onAfterNext.calledWith({})).toBeTruthy
  await expect(onAfterBack.calledAfter(onBeforeNext)).resolves.toBeTruthy

  // show and click back
  track
    .find(ScrollTrack)
    .instance()
    .hideRightArrow()
  track
    .find(ScrollTrack)
    .instance()
    .showLeftArrow()
  track
    .find('button')
    .first()
    .simulate('click')
  expect(onAfterBack.calledOnce).toBeTruthy
  expect(onAfterBack.calledWith({})).toBeTruthy
  expect(onAfterBack.calledAfter(onBeforeBack)).toBeTruthy
})

it('works without any callbacks passed in', async () => {
  const track = mount(
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
  )

  // show and click next
  track
    .find(ScrollTrack)
    .instance()
    .showRightArrow()
  track
    .find('button')
    .last()
    .simulate('click')

  // show and click back
  track
    .find(ScrollTrack)
    .instance()
    .hideRightArrow()
  track
    .find(ScrollTrack)
    .instance()
    .showLeftArrow()
  track
    .find('button')
    .first()
    .simulate('click')
})
