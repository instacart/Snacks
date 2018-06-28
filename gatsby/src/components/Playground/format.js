export default function format(input) {
  const indentLevel = Math.min(
    ...input.split('\n')
      .filter(line => line.replace(/\s/g, '') !== '')
      .map(line => line.match(/(^ *)/)[1].length)
  )
  return input
    .split('\n').map(line => line.slice(indentLevel)).join('\n')
    .trim()
}
