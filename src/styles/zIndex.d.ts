type ZIndexes =
  | 'Z_INDEX0'
  | 'Z_INDEX1'
  | 'Z_INDEX2'
  | 'Z_INDEX3'
  | 'Z_INDEX4'
  | 'Z_INDEX5'
  | 'Z_INDEX6'
  | 'Z_INDEX7'
  | 'Z_INDEX8'
  | 'Z_INDEX9'

type ZIndexConfig = { zIndex: number }

declare const zIndex: { [Key in ZIndexes]: ZIndexConfig }

export default zIndex
