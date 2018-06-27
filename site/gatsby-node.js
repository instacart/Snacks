const path = require('path')
const crypto = require('crypto')

exports.createPages = ({actions: {createPage}, graphql}) => (
  graphql(`
    {
      allSnacksComponent {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then((result) => {
    if(result.errors) throw result.errors
    const component = path.resolve('src/components/Component/index.js')
    result.data.allSnacksComponent.edges
      .forEach(({node}) => {
        createPage({
          path: node.path,
          component,
          context: {
            id: node.id,
            content: node.content,
          },
        })
      })
  })
)

exports.onCreateNode = async ({node, actions: {createNode}, loadNodeContent}) => {
  if(node.internal.type !== 'File') return
  if(
    node.internal.mediaType !== 'application/javascript' &&
    node.internal.mediaType !== 'text/jsx'
  ) return
  if(node.sourceInstanceName !== 'components') return
  if(node.relativePath.match(/docs/)) return
  if(node.relativePath.match(/__tests__/)) return
  if(!node.relativePath.match('.js')) return

  const name = node.relativePath.replace('.js', '')
  const fields = {
    path: `components/${name}`,
    content: await loadNodeContent(node),
  }
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(fields))
    .digest('hex')
  createNode({
    id: `SnacksComponent--${name}`,
    parent: null,
    children: [],
    ...fields,
    internal: {contentDigest, type: 'SnacksComponent'}
  })
}
