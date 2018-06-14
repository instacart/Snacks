export const confirmResponsePattern = /^\s*(?:true|false|t|f|no|yes)\s*$/i

export const isPositiveResponse = userResponse => positiveResponses.includes(userResponse)

export const positiveResponses = ['yes', 'Yes', 'y', 'true', 'True', 't']

export const checkError = err => err && console.log(err)

export default { checkError, confirmResponsePattern, isPositiveResponse, positiveResponses }