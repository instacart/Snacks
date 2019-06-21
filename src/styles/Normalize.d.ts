declare const Normalize: {
  html: {
    fontFamily: string
    msTextSizeAdjust: string
    webkitTextSizeAdjust: string
  }
  body: {
    marginTop: number
    marginRight: number
    marginBottom: number
    marginLeft: number
    boxSizing: string
  }
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary': {
    display: string
  }
  'audio, canvas, progress, video': {
    display: string
    verticalAlign: string
  }
  'audio:not([controls])': {
    display: string
    height: number
  }
  '[hidden], template': {
    display: string
  }
  a: {
    backgroundColor: string
  }
  'a:active, a:hover': {
    outline: number
  }
  'abbr[title]': {
    borderBottom: string
  }
  'b, strong': {
    fontWeight: string
  }
  dfn: {
    fontStyle: string
  }
  h1: {
    fontSize: string
    marginTop: string
    marginRight: number
    marginBottom: string
    marginLeft: number
  }
  mark: {
    background: string
    color: string
  }
  small: {
    fontSize: string
  }
  'sub, sup': {
    fontSize: string
    lineHeight: number
    position: string
    verticalAlign: string
  }
  sup: {
    top: string
  }
  sub: {
    bottom: string
  }
  img: {
    border: number
  }
  'svg:not(:root)': {
    overflow: string
  }
  figure: {
    marginTop: string
    marginRight: string
    marginBottom: string
    marginLeft: string
  }
  hr: {
    boxSizing: string
    height: number
  }
  pre: {
    overflow: string
  }
  'code, kbd, pre, samp': {
    fontFamily: string
    fontSize: string
  }
  'button, input, optgroup, select, textarea': {
    color: string
    font: string
    marginTop: number
    marginRight: number
    marginBottom: number
    marginLeft: number
  }
  button: {
    overflow: string
  }
  'button, select': {
    textTransform: string
  }
  'button, html input[type="button"], input[type="reset"], input[type="submit"]': {
    webkitAppearance: string
    cursor: string
  }
  'button[disabled], html input[disabled]': {
    cursor: string
  }
  'button::-moz-focus-inner, input::-moz-focus-inner': {
    border: number
    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
  }
  input: {
    lineHeight: string
  }
  'input[type="checkbox"], input[type="radio"]': {
    boxSizing: string
    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
  }
  'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
    height: string
  }
  'input[type="search"]': {
    webkitAppearance: string
    boxSizing: string
  }
  'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration': {
    webkitAppearance: string
  }
  fieldset: {
    border: string
    marginTop: number
    marginRight: string
    marginBottom: number
    marginLeft: string
    paddingTop: string
    paddingRight: string
    paddingLeft: string
    paddingBottom: string
  }
  legend: {
    border: number
    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
  }
  textarea: {
    overflow: string
  }
  optgroup: {
    fontWeight: string
  }
  table: {
    borderCollapse: string
    borderSpacing: number
  }
  'td, th': {
    paddingTop: number
    paddingRight: number
    paddingBottom: number
    paddingLeft: number
  }
}

export default Normalize
