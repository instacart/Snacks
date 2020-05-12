[Snacks](https://instacart.github.io/Snacks/)
=========================
[![npm](https://img.shields.io/npm/v/ic-snacks.svg?style=flat-square)](https://www.npmjs.com/package/ic-snacks) [![license](https://img.shields.io/npm/l/ic-snacks.svg?style=flat-square)](https://github.com/instacart/Snacks/blob/master/LICENSE) [![CircleCI](https://circleci.com/gh/instacart/Snacks.svg?style=shield)](https://circleci.com/gh/instacart/Snacks) 
[![Maintainability](https://api.codeclimate.com/v1/badges/2d104053b9eea615a68b/maintainability)](https://codeclimate.com/github/instacart/Snacks/maintainability) [![Code Coverage](https://codecov.io/gh/instacart/Snacks/branch/master/graph/badge.svg)](https://codecov.io/gh/instacart/Snacks)
[![Coverage Status](https://coveralls.io/repos/github/instacart/Snacks/badge.svg?branch=try_coveralls)](https://coveralls.io/github/instacart/Snacks?branch=try_coveralls)


JavaScript Component Library by Instacart

Please note: We're still in pre-release stage. If you opt to use Snacks, please be prepared for breaking changes in the future.

## Installation
You can use either `yarn` or `npm` to install Snacks and its dependencies.

### with yarn
```sh
yarn add 'ic-snacks'
```

### with npm
```sh
npm install 'ic-snacks'
```
### Installing peer dependencies
Snacks has a few peer dependencies required to use the library.
> If you already have these libraries listed in your app's dependencies, there's no need to install them again.

For the main component library:
- prop-types v15 or v16
- @instacart/radium v18+
- React v15 or v16
- ReactDom v15 or v16

If you'd like to use animations: react-transition-group v2.2

### Local Development as a dependancy
Sometimes it may be helpful to work on this project locally and view the changes in another app. This can be accomplished using npm link

```sh
# From this directory
npm link
# go to the app you are working on
cd ../workspace/my_working_app
# symlink this app
npm link ic-snacks
```

To reverse the process, you can do the following

```sh
# go to the app you are working on
cd ../workspace/my_working_app
# remove symlink
npm unlink ic-snacks
```


#### with yarn
```sh
yarn add @instacart/radium
yarn add prop-types
yarn add react
yarn add react-dom
yarn add react-transition-group
```

#### with npm
```sh
npm install @instacart/radium
npm install prop-types
npm install react
npm install react-dom
npm install react-transition-group
```

## Usage

Using a component:
```js
import { CircleButton } from 'ic-snacks'

const MyComponent = props => {
  const doYes = e => { alert('Snacks are the best!') }
  const doNo = e => { alert('Wrong choice, choose again.') }

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
          label='Favorite healthy snack:'
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
