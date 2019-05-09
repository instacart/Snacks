import Grow from './Grow'
import Fade from './Fade'
import Slide from './Slide'

declare const transitions: {
  Grow: typeof Grow
  Fade: typeof Fade
  Slide: typeof Slide
}

export default transitions
