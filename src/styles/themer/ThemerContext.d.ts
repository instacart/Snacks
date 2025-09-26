import { Context } from 'react'
import { Themer } from './Themer'

declare interface ThemerContextInterface {
  tick: number // for propogating theme updates through react
  themer: Themer
}

export declare const ThemerContext: Context<ThemerContextInterface>
