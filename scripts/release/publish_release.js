import prompt from 'prompt'
import {
  checkError,
  confirmResponsePattern,
  isPositiveResponse,
} from './utils'

prompt.message = 'Confirm'

const confirmRelease = {
  name: 'Are you sure you want to publish a new release of Snacks?',
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
  name: 'Is the circleCi build passing?',
  type: 'string',
  pattern: confirmResponsePattern,
  default: 'yes'
}

const confirmBuildCheck = (userResponse) => {
  if (!isPositiveResponse(userResponse)) {
    console.log('Tests confirmed not passing, exiting build...')
    return false
  }

  return true
}

const confirmVersion = {
  name: 'Is this a patch, minor or major version?',
  type: 'string',
  pattern: /patch|Patch|minor|Minor|Major|major|/,
  required: true,
  default: 'minor'
}

const publishRelease = () => {
  // execSync('npm publish')
  console.log('place holder -- npm publishing!')
}

console.log('Beginning npm publish for Snacks 🥕 🍿 🍪 🥜 🍎 🥨 ')
console.log('Press ctrl+c at any point to abort release')

prompt.start()
prompt.get([confirmRelease, confirmBuildPassing, confirmVersion], (err, result) => {
  if(checkError(err)) { return prompt.stop() }
  if(!confirmReleaseCheck(result[confirmRelease.name])) { return prompt.stop() }
  if(!confirmBuildCheck(result[confirmBuildPassing.name])) { return prompt.stop() }
  publishRelease()
  prompt.stop()
})