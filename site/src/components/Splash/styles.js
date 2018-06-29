import backgroundSrc from './background.png'

export const splash = {
  width: '50%',
  position: 'absolute',
  bottom: 0,
  right: 0,
}

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
