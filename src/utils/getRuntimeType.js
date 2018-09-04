/*
 * This resolves an incompatibility with react-hot-loader.
 * For now, use this function for all element type comparisons.
 *
 * More info: https://github.com/instacart/Snacks/issues/235
 */
import * as React from 'react'
import memoize from './memoize'

const getRuntimeType = memoize((Component) => (<Component/>).type)

export default getRuntimeType
