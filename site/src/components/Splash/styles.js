import {spacing} from 'ic-snacks'
import splashSrc from './splash.png'
import backgroundSrc from './background.png'

export const background = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundImage: `url(${backgroundSrc})`,
  backgroundSize: 'cover',
  zIndex: -1,
}

export const splash = {
  position: 'absolute',
  top: '25vh',
  right: 0,
  bottom: 0,
  left: '50vw',
  backgroundImage: `url(${splashSrc})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',
}

export const link = {
  marginRight: spacing.SM,
  textDecoration: 'none',
}
