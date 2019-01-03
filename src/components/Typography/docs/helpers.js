import React from 'react'

// eslint-disable-next-line
export const TypographyTableRow = ({ variant, usage, example = "Don't talk about snacks" }) => (
  <tr>
    <td className="typography-table-variant">
      <Text variant={`${variant}`}>{variant}</Text>
    </td>
    <td>
      <Text variant="T.18" fontWeight="bold">Common usage</Text>
      {usage.map(line => (
        <Text key={line} variant="T.14">
          {line}
        </Text>
      ))}
    </td>
    <td>
      <Text variant={`${variant}`}>{example}</Text>
    </td>
  </tr>
)
