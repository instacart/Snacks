import React from 'react'
import PropTypes from 'prop-types'
import Radio from './Radio'

const STYLE = {
  wrapEl: {},
}

const NoOp = () => {} // eslint-disable-line no-empty-function
let initHasSelectedRadio

class RadioGroup extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf((propValue, key) => {
      const child = propValue[key]

      if (child.type.name !== 'Radio') {
        return new Error('Children must be an Array of Radio components.')
      }

      if (initHasSelectedRadio && child.props.isSelected) {
        return new Error('Only one radio button can be selected in the group.')
      }

      if (child.props.isSelected) {
        initHasSelectedRadio = true
      }
    }).isRequired,
    name: PropTypes.string.isRequired,
    selectedBtn: PropTypes.instanceOf(Radio),
    onChange: PropTypes.func,
    wrapEl: PropTypes.string,

    /**
     * Optional style overrides merged into emotion css
     *
     * @deprecated
     * This prop exists for backwards compatibility and will be
     * removed in a future version
     */
    style: PropTypes.shape({
      wrapEl: PropTypes.object,
    }),
  }

  static defaultProps = {
    onChange: NoOp,
    style: {},
    wrapEl: 'div',
  }

  state = {
    selectedBtn: this.props.selectedBtn,
  }

  handleBtnChange = inputBtn => {
    const { onChange } = this.props

    return event => {
      onChange(event.target.value, inputBtn.props)
      this.setState({ selectedBtn: inputBtn })
    }
  }

  render() {
    const { children, className, style, wrapEl: Element } = this.props
    const childrenWithProps = React.Children.map(children, child => {
      const { selectedBtn } = this.state

      return React.cloneElement(child, {
        name: this.props.name,
        onChange: this.handleBtnChange(child),
        isSelected: child.props.id === (selectedBtn ? selectedBtn.props.id : false),
      })
    })

    return (
      <Element className={className} css={{ ...STYLE.wrapEl, ...style.wrapEl }}>
        {childrenWithProps}
      </Element>
    )
  }
}

export default RadioGroup
