import { Context } from 'react'
import { Themer } from './Themer'
import * as React from 'react'

export interface ThemerProviderProps {
  children?: React.ReactNode
  themer: Themer
}

export declare const ThemerProvider: React.ComponentType<ThemerProviderProps>
