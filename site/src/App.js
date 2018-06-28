import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Splash from './components/Splash'
import Button from './components/docs/Button'
import Checkbox from './components/docs/Checkbox'
import CircleButton from './components/docs/CircleButton'
import Radio from './components/docs/Radio'
import RadioGroup from './components/docs/RadioGroup'
import SVGIcons from './components/docs/SVGIcons'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route
          path='/'
          exact
          component={Splash}
        />
        <Route
          path='/components/button'
          component={Button}
        />
        <Route
          path='/components/checkbox'
          component={Checkbox}
        />
        <Route
          path='/components/circlebutton'
          component={CircleButton}
        />
        <Route
          path='/components/radio'
          component={Radio}
        />
        <Route
          path='/components/radiogroup'
          component={RadioGroup}
        />
        <Route
          path='/components/svgicons'
          component={SVGIcons}
        />
      </Layout>
    </BrowserRouter>
  )
}
