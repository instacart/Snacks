export const confirmResponsePattern = /yes|no|Yes|No|True|true|t|False|false|f/

export const isPositiveResponse = userResponse => positiveResponses.includes(userResponse)

export const positiveResponses = ['yes', 'Yes', 'y', 'true', 'True', 't']

export const checkError = err => err && console.log(err)

export default { checkError, confirmResponsePattern, isPositiveResponse, positiveResponses }