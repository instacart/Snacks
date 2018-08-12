import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Splash from './components/Splash'
import pages from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route
          path='/'
          exact
          component={Splash}
        />
        {
          Object.keys(pages).map(header => (
            Object.keys(pages[header]).map(page => (
              <Route
                path={pages[header][page].path}
                component={pages[header][page].component}
              />
            ))
          ))
        }
      </Layout>
    </BrowserRouter>
  )
}
