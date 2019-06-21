export type Size = 'xs' | 'sm' | 'md' | 'mdLg' | 'lg' | 'xl'

type Breakpoints = {
  [Key in Exclude<Size, 'xl'>]: {
    min: number
    max: number
  }
} & {
  xl: {
    min: number
  }
}

export declare const breakpoints: Breakpoints

type ScreenWidths = { [Key in Exclude<Size, 'xs'>]: number }

declare const responsive: { [Key in Size]: string } & {
  columnWidth: number
  screenWidths: ScreenWidths
  up: (size: Size) => string
  down: (size: Size) => string
  only: (size: Size) => string
  between: (lowerSize: Size, upperSize: Size) => string
}

export default responsive
