import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Button from './components/docs/Button'
import Checkbox from './components/docs/Checkbox'
import CircleButton from './components/docs/CircleButton'
import Radio from './components/docs/Radio'
import RadioGroup from './components/docs/RadioGroup'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}
