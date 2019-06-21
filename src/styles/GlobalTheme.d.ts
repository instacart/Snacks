declare const GlobalTheme: {
  html: {
    fontSize: string
  }
  'html, body': {
    height: string
    mozOsxFontSmoothing: string
    WebkitFontSmoothing: string
  }
  body: {
    background: string
    fontFamily: string
    color: string
    paddingTop: number
    paddingBottom: number
    paddingLeft: number
    paddingRight: number
    fontSize: string
  }
  a: {
    textDecoration: string
    backgroundColor: string
    ':hover': {
      outline: number
      textDecoration: string
    }
  }
}

export default GlobalTheme
