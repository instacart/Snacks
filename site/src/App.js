import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Button from './components/Buttons/Button'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route
          path='/components/buttons/button'
          component={Button}
        />
      </Layout>
    </BrowserRouter>
  )
}
