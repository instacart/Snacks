import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'

class Form extends React.Component {
  static propTypes = {
    /** Form html chilren */
    children: PropTypes.node,
    /** HTML form attributes */
    formProps: PropTypes.shape({}),
    /** onSubmit callback will pass in model as parameter */
    onSubmit: PropTypes.func,
    /** onValidationError callback will pass in invalid FormComponents as parameter */
    onValidationError: PropTypes.func,
    /** errors from server mapped to model names. Will attach serverErrors styling to FormComppnents */
    serverErrors: PropTypes.shape({}),
  }

  static childContextTypes = {
    ICFormable: PropTypes.object,
  }

  constructor() {
    super()
    this.state = { serverErrors: null }
    this.model = {}
    this.formComponents = {}
    this.invalidComponents = []
  }

  getChildContext() {
    return {
      ICFormable: {
        registerComponent: this.registerComponent,
        unregisterComponent: this.unregisterComponent,
      },
    }
  }

  componentDidMount() {
    this.updateModel()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.serverErrors && !isEqual(this.state.serverErrors, nextProps.serverErrors)) {
      this.setState({ serverErrors: nextProps.serverErrors }, () => {
        this.setErrorsOnFormComponents(this.state.serverErrors)
      })
    }
  }

  setErrorsOnFormComponents(serverErrors) {
    Object.keys(serverErrors).forEach(name => {
      const component = this.formComponents[name]
      component.setState({
        isValid: false,
        serverError: serverErrors[name],
      })
    })
  }

  handleSubmit = e => {
    e && e.preventDefault()
    this.updateModel()

    if (this.formIsValid()) {
      this.setState({ serverErrors: null }, () => {
        this.props.onSubmit && this.props.onSubmit(this.model)
      })
    } else {
      this.props.onValidationError && this.props.onValidationError(this.invalidComponents)
    }
  }

  registerComponent = component => {
    this.formComponents[component.props.name] = component
  }

  unregisterComponent = component => {
    delete this.formComponents[component.props.name]
    delete this.model[component.props.name]
  }

  formIsValid() {
    const components = Object.values(this.formComponents)
    this.invalidComponents = components.filter(component => !component.validate())
    return this.invalidComponents.length === 0
  }

  updateModel() {
    Object.keys(this.formComponents).forEach(name => {
      const component = this.formComponents[name]
      if (component.props.disabled) {
        delete this.model[name]
      } else {
        this.model[name] = component.getValue()
      }
    })
  }

  render() {
    const { children, formProps } = this.props

    return (
      <form {...formProps} onSubmit={this.handleSubmit}>
        {children}
      </form>
    )
  }
}

export default Form
