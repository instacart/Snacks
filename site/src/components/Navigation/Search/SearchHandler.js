import React from 'react'


function SearchHandler(Component) {
  class Wrapped extends React.PureComponent {

    render() {
      return (
        <Component
          {...this.props}
          handleAction={this.handleServerAction}
        />
      )
    }
  }
  return Wrapped
}

export default SearchHandler