import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Button from './components/Buttons/Button'
import Checkbox from './components/Buttons/Checkbox'
import CircleButton from './components/Buttons/CircleButton'
import Radio from './components/Buttons/Radio'
import RadioGroup from './components/Buttons/RadioGroup'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route
          path='/components/buttons/button'
          component={Button}
        />
        <Route
          path='/components/buttons/checkbox'
          component={Checkbox}
        />
        <Route
          path='/components/buttons/circlebutton'
          component={CircleButton}
        />
        <Route
          path='/components/buttons/radio'
          component={Radio}
        />
        <Route
          path='/components/buttons/radiogroup'
          component={RadioGroup}
        />
      </Layout>
    </BrowserRouter>
  )
}
