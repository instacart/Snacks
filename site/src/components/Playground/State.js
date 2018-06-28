import {PureComponent} from 'react'

export default class State extends PureComponent {
  state = this.props.initial || {}
  setter = state => this.setState(state)
  render = () => this.props.children(this.state, this.setter)
}
