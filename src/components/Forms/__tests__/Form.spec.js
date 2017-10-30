import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount }     from 'enzyme'
import { spy, stub } from 'sinon'
import Form          from '../Form'
import TextField     from '../TextField'
import Button        from '../../Buttons/Button'

it('renders Form with TextField correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <Form>
        <TextField
          name="email"
          type="email"
          id="email_id"
          floatingLabelText="Email"
        />
      </Form>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('fires the onSubmit prop when valid', () => {
  const onSubmit = spy()
  const wrapper = mount(
    <Form
     onSubmit={onSubmit}
    >
      <div style={{width: '335px'}}>
        <div style={{marginBottom: '10px'}}>
          <TextField
            name="email"
            type="email"
            id="email_id"
            floatingLabelText="Email"
            value="test@test.com"
          />
        </div>

        <div style={{marginTop: '10px'}}>
          <Button type="submit">
           Submit
          </Button>
        </div>
      </div>
    </Form>
  )

  stub(wrapper.instance(), 'formIsValid').callsFake(() => (true))
  stub(wrapper.instance(), 'updateModel').callsFake(() => {})

  wrapper.find(Button).simulate('submit')
  expect(onSubmit.calledOnce).toBe(true)
})

it('wont fire the onSubmit prop when not valid', () => {
  const onSubmit = spy()
  const wrapper = mount(
    <Form
     onSubmit={onSubmit}
    >
      <div style={{width: '335px'}}>
        <div style={{marginBottom: '10px'}}>
          <TextField
            name="email"
            type="email"
            id="email_id"
            floatingLabelText="Email"
            value="test@test.com"
          />
        </div>

        <div style={{marginTop: '10px'}}>
          <Button type="submit">
           Submit
          </Button>
        </div>
      </div>
    </Form>
  )

  stub(wrapper.instance(), 'formIsValid').callsFake(() => (false))
  stub(wrapper.instance(), 'updateModel').callsFake(() => {})

  wrapper.find(Button).simulate('submit')
  expect(onSubmit.calledOnce).toBe(false)
})

it('wont fire the onSubmit prop when not valid', () => {
  const onSubmit = spy()
  const wrapper = mount(
    <Form
     onSubmit={onSubmit}
    >
      <div style={{width: '335px'}}>
        <div style={{marginBottom: '10px'}}>
          <TextField
            name="email"
            type="email"
            id="email_id"
            floatingLabelText="Email"
            value="test@test.com"
          />
        </div>

        <div style={{marginTop: '10px'}}>
          <Button type="submit">
           Submit
          </Button>
        </div>
      </div>
    </Form>
  )

  stub(wrapper.instance(), 'formIsValid').callsFake(() => (false))
  stub(wrapper.instance(), 'updateModel').callsFake(() => {})

  wrapper.find(Button).simulate('submit')
  expect(onSubmit.calledOnce).toBe(false)
})
