[Snacks](https://instacart.github.io/Snacks/)
=========================
[![npm](https://img.shields.io/npm/v/ic-snacks.svg?style=flat-square)](https://www.npmjs.com/package/ic-snacks) [![license](https://img.shields.io/npm/l/ic-snacks.svg?style=flat-square)](https://github.com/instacart/Snacks/blob/master/LICENSE) [![CircleCI](https://circleci.com/gh/instacart/Snacks.svg?style=shield)](https://circleci.com/gh/instacart/Snacks)

JavaScript Component Library by Instacart

## Installation

### via yarn
```js
yarn add ic-snacks
```

### via npm
```js
npm install ic-snacks --save
```

## Usage

Using a component:
```js
import { CircleButton } from `ic-snacks`

const MyComponent = props => {
  const doYes = e => { alert("Snacks are the best!") }
  const doNo = e => { alert("Wrong choice, choose again.") }

  return (
    <div>
      <p>Do you love snacks?</p>
      <CircleButton onClick={doYes}>Yes</CircleButton>
      <CircleButton onClick={doNo}>No</CircleButton>
    </div>
  )
}
```

A more complicated component:
```js
import React, { Component } from 'react'
import { NavigationPills } from 'ic-snacks'

const choices = [
  { text: 'bananas' },
  { text: 'carrots' },
  { text: 'watermelon' },
  { text: 'snacks' },
  { text: 'kale' },
  { text: 'endives' },
  { text: 'arugula' },
  { text: 'spinach' },
  { text: 'potatoes' }
]

class Navigation extends Component {
  static state = {
    activePill: choices[0]
  }

  render() {
    return (
      <div>
        <NavigationPills
          pills={ choices }
          onPillClick={(e, choice) => {
            e.preventDefault();
            setState({ activePill: choice.text })
            console.log('Choice clicked!', choice)
          }}
          label={'Favorite healthy snack:'}
          activePill={state.activePill}
        />
      </div>
    )
  }
}
```

## Full Documentation
https://instacart.github.io/Snacks/

## Contributing
Please see [contributing docs](https://github.com/instacart/Snacks/blob/master/CONTRIBUTING.MD)
