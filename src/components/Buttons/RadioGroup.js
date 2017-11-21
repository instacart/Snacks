import React, { PropTypes } from 'react'
import Radio from './Radio'

const STYLES = {
  wrapEl: {}
}

class RadioGroup extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(Radio).isRequired,
    name: PropTypes.string.isRequired,
    selectedBtn: PropTypes.instanceOf(Radio),
    onChange: PropTypes.func,
    wrapEl: PropTypes.string,
    styles: PropTypes.shape({
      wrapEl: PropTypes.object,
    })
  }

  static defaultProps = {
    wrapEl: 'div',
    styles: {}
  }

  state = {
    selectedBtn: this.props.selectedBtn,
  }

  btnOnClick = (inputBtn) => {
    const { onChange } = this.props

    return (event) => {
      if (onChange && inputBtn && inputBtn !== this.state.selectedBtn) {
        onChange(event.target.value, inputBtn.props)
      }

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
