Read more @ https://github.com/nbwar/icformable

```jsx static
@FormComponent
class ICCustomInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    required: React.PropTypes.bool,
  }

  render() {
    return (
      <div>
        <input
          name={this.props.name}
          disabled={this.props.disabled}
          required={this.props.required}
        />
      </div>
    )
  }
}
```
