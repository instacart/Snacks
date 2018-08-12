import React from 'react'
import {Title2, Body} from '../Typography'

export default function Introduction() {
  return (
    <div style={{width: '50vw'}}>
      <Title2>Introduction</Title2>
      <Body>
        Welcome to Snacks, Instacart’s design system. It is a repository of
        interface components for all of Instacart’s products. These components
        are a set of atomic pieces, designed for web, iOS, and Android. Paired
        with it, you will find React components for engineering use. 
      </Body>
      <Body>
        The first version of Snacks was introduced for a handful of reasons.
        First, to make communication and handoff simpler, between engineers and
        designers. And second, so we could scale our product with consistency.
        Snacks is both, a guide and a compass to help us stay on course as we
        build a better Instacart. 
      </Body>
      <Body>
        We are sharing this in hopes of helping those who are on a similar path.
        But you should know that Snacks was built very specifically for the use
        case of Instacart. It does not contain guidelines on how things for web
        should be built. Feel free to use it as you wish, but know that it is a
        living library of elements and there is much work ahead of us.
      </Body>
      <Body>
        Snacks is the heart of all the amazing work that goes into building
        Instacart. We hope you use and enjoy it!
      </Body>
    </div>
  )
}
