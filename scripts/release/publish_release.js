import prompt from 'prompt'
import {
  checkError,
  confirmResponsePattern,
  isPositiveResponse,
} from './utils'
import { version as packageVersion } from '../../package.json'

prompt.message = 'Confirm'

const confirmRelease = {
  name: `This will publish version ${packageVersion} of the Snacks package to the public npm registry. Are you sure you want to publish a new release of Snacks?`,
  type: 'string',
  pattern: confirmResponsePattern,
  required : true,
  default: 'yes'
}

const confirmReleaseCheck = (userResponse) => {
  if (!isPositiveResponse(userResponse)) {
    console.log('Release confirmation failed. Exiting build...')
    return false
  }

  return true
}

const confirmBuildPassing = {
  name: 'Is the circleCi build passing? (https://circleci.com/gh/instacart/Snacks/tree/master)',
  type: 'string',
  pattern: confirmResponsePattern,
  default: 'yes'
}

const confirmBuildCheck = (userResponse) => {
  if (!isPositiveResponse(userResponse)) {
    console.log('CircleCi test passing confirmation failed. Exiting build...')
    return false
  }

  return true
}

const publishRelease = () => {
  // execSync('npm publish')
  console.log('place holder -- npm publishing!')
}

console.log('Beginning npm publish for Snacks 🥕 🍿 🍪 🥜 🍎 🥨 ')
console.log('Press ctrl+c at any point to abort release')

prompt.start()
prompt.get([confirmRelease, confirmBuildPassing], (err, result) => {
  if(checkError(err)) { return prompt.stop() }
  if(!confirmReleaseCheck(result[confirmRelease.name])) { return prompt.stop() }
  if(!confirmBuildCheck(result[confirmBuildPassing.name])) { return prompt.stop() }
  publishRelease()
  prompt.stop()
})