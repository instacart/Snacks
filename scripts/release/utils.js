const confirmResponsePattern = /yes|no|Yes|No|True|true|t|False|false|f/

const isPositiveResponse = userResponse => positiveResponses.includes(userResponse)

const positiveResponses = ['yes', 'Yes', 'y', 'true', 'True', 't']

const checkError = err => err && console.log(err)

export default { checkError, confirmResponsePattern, isPositiveResponse, positiveResponses }