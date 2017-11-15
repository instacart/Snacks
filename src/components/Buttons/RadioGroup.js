import React, { PropTypes } from 'react'
import Radio from './Radio'

const STYLES = {
  wrapEl: {}
}

class RadioGroup extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(Radio).isRequired,
    name: PropTypes.string.isRequired,
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
    selectedInputBtnId: null,
  }

  inputBtnOnClick = (inputBtn) => {
    return () => {
      this.setState({selectedInputBtnId: inputBtn.props.id})
    }
  }

  render() {
    const { children, styles, wrapEl: Element } = this.props
    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        name: this.props.name,
        onClick: this.inputBtnOnClick(child),
        isSelected: child.props.id === this.state.selectedInputBtnId
      })
    })

    return (
      <Element style={{...STYLES.wrapEl, ...styles.wrapEl}}>
        {childrenWithProps}
      </Element>
    )
  }
}

export default RadioGroup
