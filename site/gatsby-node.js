const path = require('path')
const crypto = require('crypto')

// exports.createPages = ({actions: {createPage}, graphql}) => (
//   graphql(`
//     {
//       allFile {
//         edges {
//           node {
//             sourceInstanceName
//             relativePath
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if(result.errors) throw result.errors
//     const component = path.resolve('src/components/Component/index.js')
//     result.data.allFile.edges
//       .filter(({node}) => node.sourceInstanceName === 'components')
//       .filter(({node}) => !node.relativePath.match(/docs/))
//       .filter(({node}) => !node.relativePath.match(/__tests__/))
//       .filter(({node}) => node.relativePath.match('.js'))
//       .forEach(({node}) => {
//         createPage({
//           path: `components/${node.relativePath.replace('.js', '')}`,
//           component,
//         })
//       })
//   })
// )

exports.onCreateNode = ({node, actions: {createNode}}) => {
  if(node.internal.type !== 'File') return
  if(
    node.internal.mediaType !== 'application/javascript' &&
    node.internal.mediaType !== 'text/jsx'
  ) return
  if(node.sourceInstanceName !== 'components') return

  const fields = {
    path: `components/${node.relativePath.replace('.js', '')}`
  }
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(fields))
    .digest('hex')
  createNode({
    id: `allSnacksComponent--${contentDigest}`,
    // parent: 'allSnacksComponent',
    parent: null,
    children: [],
    ...fields,
    internal: {contentDigest, type: 'SnacksComponent'}
  })
}

// exports.sourceNodes = ({actions: {createNode}}) => {
//   createNode({
//     id: 'allSnacksComponent',
//     parent: null,
//     children: [],
//     internal: {
//       type: 'allSnacksComponent',
//       contentDigest: 'allSnacksComponent',
//     },
//   })
// }
