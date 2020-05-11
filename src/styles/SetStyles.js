import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { Style } from '@instacart/radium'
import Normalize from './Normalize'
import GlobalTheme from './GlobalTheme'

const getFonts = assetsUrl => {
  return `@font-face {
      font-family: 'ic-icons';
      font-weight: normal;
      font-style: normal;
      src: url('${assetsUrl}/ic-icons.eot');
      src: url('${assetsUrl}/ic-icons.eot?#iefix') format('embedded-opentype'),
           url('${assetsUrl}/ic-icons.woff') format('woff'),
           url('${assetsUrl}/ic-icons.ttf') format('truetype'),
           url('${assetsUrl}/ic-icons.svg#ic-icons') format('svg');
    }

    @font-face {
      font-family: 'Open Sans';
      font-weight: 300;
      font-style: normal;
      src: font-url('${assetsUrl}/OpenSans-Light/OpenSans-Light.eot');
      src: font-url('${assetsUrl}/OpenSans-Light/OpenSans-Light.eot?#iefix') format('embedded-opentype'),
           local('Open Sans Light'),
           local('OpenSans-Light'),
           url('${assetsUrl}/OpenSans-Light/OpenSans-Light.woff') format('woff'),
           url('${assetsUrl}/OpenSans-Light/OpenSans-Light.ttf') format('truetype'),
           url('${assetsUrl}/OpenSans-Light/OpenSans-Light.svg#OpenSans') format('svg');
    }

    @font-face {
      font-family: 'Open Sans';
      font-weight: 400;
      font-style: normal;
      src: url('${assetsUrl}/OpenSans/OpenSans.eot');
      src: url('${assetsUrl}/OpenSans/OpenSans.eot?#iefix') format('embedded-opentype'),
           local('Open Sans'),
           local('OpenSans'),
           url('${assetsUrl}/OpenSans/OpenSans.woff') format('woff'),
           url('${assetsUrl}/OpenSans/OpenSans.ttf') format('truetype'),
           url('${assetsUrl}/OpenSans/OpenSans.svg#OpenSans') format('svg');
    }

    @font-face {
      font-family: 'Open Sans';
      font-weight: 600;
      font-style: normal;
      src: url('${assetsUrl}/OpenSans-Semibold/OpenSans-Semibold.eot');
      src: url('${assetsUrl}/OpenSans-Semibold/OpenSans-Semibold.eot?#iefix') format('embedded-opentype'),
           local('Open Sans Semibold'),
           local('OpenSans-Semibold'),
           url('${assetsUrl}/OpenSans-Semibold/OpenSans-Semibold.woff') format('woff'),
           url('${assetsUrl}/OpenSans-Semibold/OpenSans-Semibold.ttf') format('truetype'),
           url('${assetsUrl}/OpenSans-Semibold/OpenSans-Semibold.svg#OpenSans') format('svg');
    }

    @font-face {
      font-family: 'Open Sans';
      font-weight: 700;
      font-style: normal;
      src: url('${assetsUrl}/OpenSans-Bold/OpenSans-Bold.eot');
      src: url('${assetsUrl}/OpenSans-Bold/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
           local('Open Sans Bold'),
           local('OpenSans-Bold'),
           url('${assetsUrl}/OpenSans-Bold/OpenSans-Bold.woff') format('woff'),
           url('${assetsUrl}/OpenSans-Bold/OpenSans-Bold.ttf') format('truetype'),
           url('${assetsUrl}/OpenSans-Bold/OpenSans-Bold.svg#OpenSans') format('svg');
    }`
}

let fontLoaded = false

const writeFonts = assetsUrl => {
  // if on server, just return
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.innerHTML = getFonts(assetsUrl)
  document.head.appendChild(style)
}

@Radium
class Styles extends Component {
  static propTypes = {
    assetsUrl: PropTypes.string.isRequired,
  }

  componentWillMount() {
    if (fontLoaded) {
      return
    }

    writeFonts(this.props.assetsUrl)
    fontLoaded = true
  }

  render() {
    return <Style rules={{ ...Normalize, ...GlobalTheme }} />
  }
}

export default Styles
