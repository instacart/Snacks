/*
 * This resolves an incompatibility with react-hot-loader.
 * For now, use this function for all element type comparisons.
 * 
 * More info: https://github.com/instacart/Snacks/issues/235 
 */
import * as React from 'react'
import _ from 'underscore'

const getRuntimeType = _.memoize((Component) => (<Component/>).type)

export default getRuntimeType
