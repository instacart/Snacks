import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import * as Snacks from 'ic-snacks'
import Layout from '../Layout'

export default ({pageContext}) => (
  <Layout>
    <LiveProvider code="<Button>Hello</Button>" scope={Snacks}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </Layout>
)
