import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import Button from '../../../src/components/Buttons/Button'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <LiveProvider code="<Button>Click Me</Button>" scope={{Button}}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </Layout>
)

export default IndexPage
