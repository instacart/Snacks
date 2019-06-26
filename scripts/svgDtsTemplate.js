function svgDtsTemplate({ types: t, template }, _, { componentName }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  const {
    typeAnnotation,
  } = typeScriptTpl.ast`type Foo = React.FunctionComponent<React.SVGProps<SVGSVGElement>>`
  const componentNameWithAnnotation = {
    ...componentName,
    typeAnnotation: t.tsTypeAnnotation(typeAnnotation),
  }
  return typeScriptTpl.ast`
    import * as React from 'react';
    declare const ${componentNameWithAnnotation}
    export default ${componentName};
  `
}
module.exports = svgDtsTemplate
