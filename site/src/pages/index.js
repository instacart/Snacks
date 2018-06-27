import React from 'react'
import { Link } from 'gatsby'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import {Button} from 'ic-snacks'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <LiveProvider code="<Button />" scope={{Button}}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </Layout>
)

export default IndexPage
