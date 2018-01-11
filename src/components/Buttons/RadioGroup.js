import React, { PropTypes } from 'react'
import Radio from './Radio'

const STYLES = {
  wrapEl: {}
}

const NoOp = () => {} // eslint-disable-line no-empty-function
let initHasSelectedRadio

class RadioGroup extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf((propValue, key) => {
      const child = propValue[key]

      if (child.type.name !== 'Radio') {
        return new Error('Children must be an Array of Radio components.')
      }

      if (initHasSelectedRadio && child.props.isSelected) {
        return new Error('Only one radio button can be selected in the group.')
      }

      if (child.props.isSelected) { initHasSelectedRadio = true }
    }).isRequired,
    name: PropTypes.string.isRequired,
    selectedBtn: PropTypes.instanceOf(Radio),
    onChange: PropTypes.func,
    wrapEl: PropTypes.string,
    styles: PropTypes.shape({
      wrapEl: PropTypes.object,
    })
  }

  static defaultProps = {
    onChange: NoOp,
    styles: {},
    wrapEl: 'div',
  }

  state = {
    selectedBtn: this.props.selectedBtn,
  }

  btnOnClick = (inputBtn) => {
    const { onChange } = this.props

    return (event) => {
      onChange(event.target.value, inputBtn.props)
      this.setState({selectedBtn: inputBtn})
    }
  }

  render() {
    const { children, styles, wrapEl: Element } = this.props
    const childrenWithProps = React.Children.map(children, child => {
      const { selectedBtn } = this.state

      return React.cloneElement(child, {
        name: this.props.name,
        onClick: this.btnOnClick(child),
        isSelected: child.props.id === (selectedBtn ? selectedBtn.props.id : false)
      })
    })

    return (
      <Element
        style={{...STYLES.wrapEl, ...styles.wrapEl}}
      >
        {childrenWithProps}
      </Element>
    )
  }
}

export default RadioGroup
