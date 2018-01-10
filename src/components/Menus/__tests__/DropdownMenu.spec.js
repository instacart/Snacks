import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount }     from 'enzyme'
import { spy }       from 'sinon'
import DropdownMenu  from '../DropdownMenu'
import MenuItem      from '../MenuItem'
import Button        from '../../Buttons/Button'

it('renders DropdownMenu with icons and trigger correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <DropdownMenu triggerElement={<Button> Share </Button>}>
          <MenuItem label="Share via Email" value="email" leftIcon="emailFilled" />
          <MenuItem label="Share via Facebook" value="facebook" leftIcon="facebookFilled" leftIconStyles={{color: '#3c5a99'}} />
          <MenuItem label="Share via Twitter" value="twitter" leftIcon="twitterFilled" leftIconStyles={{color: '#1da1f2'}}/>
        </DropdownMenu>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should call callbacks correctly', () => {
  const onClose = spy()
  const onOpen = spy()
  const onSelect = spy()

  const wrapper = mount(
    <DropdownMenu
      onClose={onClose}
      onOpen={onOpen}
      onSelect={onSelect}
      triggerElement={<Button> Share </Button>}
    >
      <MenuItem label="Share via Email" value="email" leftIcon="emailFilled" />
      <MenuItem label="Share via Facebook" value="facebook" leftIcon="facebookFilled" leftIconStyles={{color: '#3c5a99'}} />
      <MenuItem label="Share via Twitter" value="twitter" leftIcon="twitterFilled" leftIconStyles={{color: '#1da1f2'}}/>
    </DropdownMenu>
  )

  wrapper.find(Button).first().simulate('click')
  expect(onOpen.calledOnce).toBe(true)

  wrapper.find(MenuItem).first().simulate('click')
  expect(onSelect.calledOnce).toBe(true)
  expect(onClose.calledOnce).toBe(true)
})
