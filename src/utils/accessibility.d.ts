export interface VisuallyHidden {
  clip: string
  clippath: string
  overflow: string
  position: string
  whiteSpace: string
  border: number
  margin: number
  padding: number
  height: number
  width: number
}

type accessibility = {
  VISUALLY_HIDDEN: VisuallyHidden
}

export default accessibility
