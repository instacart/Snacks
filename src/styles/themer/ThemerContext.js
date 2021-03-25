import { createContext } from 'react'
import { Themer } from './Themer'

export const ThemerContext = createContext({ themer: new Themer(), tick: 0 })
