import { execSync } from 'child_process'
import prompt from 'prompt'
import semver from 'semver'
import { version as packageVersion } from './package.json'

import {
  checkError,
  confirmResponsePattern,
  isPositiveResponse,
} from './utils'

prompt.message = 'Confirm'

const upVersion = ({ versioningType, packageVersion }) => {
  const major = semver.major(packageVersion)
  const minor = semver.minor(packageVersion)
  const patch = semver.patch(packageVersion)

  switch(versioningType) {
    case 'patch': {
      return `${major}.${minor}.${parseInt(patch) + 1}`
    }
    case 'minor': {
      return `${major}.${parseInt(minor) + 1}.${patch}`
    }
    case 'major': {
      return `${parseInt(major) + 1}.${minor}.${patch}`
    }
    default: {
      throw `bad npm versioning type! Acceptable types: patch, minor, major. Type passes: ${versioningType}`
    }
  }
}

const confirmRelease = {
  name: 'This will build, git commit and up the package version. Are you sure you want to build a new release of Snacks?',
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

const confirmVersion = {
  name: 'Is this a patch, minor or major version?',
  type: 'string',
  pattern: /patch|Patch|minor|Minor|Major|major|/,
  required: true,
  default: 'patch'
}

const createBranch = version => execSync(`npm checkout -b ${version}`)
const runTests = () => execSync('npm test')
const buildProject = () => execSync('npm run build')
const buildStyleGuide = () => execSync('npm run styleguide:build')
const commitChanges = () => execSync('git add -A dist && git add -A docs')
const updatePackageVersion = versionType => execSync(`npm version ${versionType}`)
const pushChanges = version => execSync(`git push origin ${version}`)

console.log('Beginning build for Snacks 🥕 🍿 🍪 🥜 🍎 🥨 ')
console.log('Press ctrl+c at any point to abort release')

prompt.start()
prompt.get([confirmVersion], (err, result) => {
  const versioningType = result[confirmVersion.name]
  const newVersion = upVersion({ versioningType, packageVersion })
  console.log(`old version: ${packageVersion}, new version: ${newVersion}`)
  if(checkError(err)) { return prompt.stop() }
  if(!confirmReleaseCheck(result[confirmRelease.name])) { return prompt.stop() }
  createBranch(newVersion)
  runTests()
  buildProject()
  buildStyleGuide()
  commitChanges()
  updatePackageVersion(versioningType)
  pushChanges(newVersion)
  console.log('Build branch created and pushed to Snacks repository. To complete release merge that branch to master and then run the publish_release script')
  prompt.stop()
})