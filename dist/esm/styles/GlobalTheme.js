export default {
  html: {
    fontSize: '16px'
  },
  'html, body': {
    height: '100%',
    mozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased'
  },
  body: {
    background: '#f7f7f7',
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, sans-serif',
    color: '#393939',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '14px'
  },
  a: {
    textDecoration: 'none',
    backgroundColor: 'transparent',
    ':hover': {
      outline: 0,
      textDecoration: 'underline'
    }
  }
};