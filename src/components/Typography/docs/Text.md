Consistent typography and hierarchy is our most useful tool in creating a clear and understandable product for our customers.

Provide a `variant` prop to specify which typography variant to use:

```jsx static
(
  <Text variant="T.14">
    T.14 (body text)
  </Text>
)
```

With an optional `fontWeight`:

```jsx static
(
  <Text variant="T.14" fontWeight="bold">
    T.14 (bold body text)
  </Text>
)
```

With an optional `elementType`. `Text` comes with a default typography variant => HTML element mapping, but you may need to pass a custom element type to ensure your markup is correct:

```jsx static
(
  <Text variant="T.18" elementType="h2">
    T.18 (title/subtitle text)
  </Text>
)
```

Provide an optional style object (will override any existing styles as it's applied last). Use only when other component props are insufficient (e.g. for gutters):

```jsx static
(
  <Text variant="T.14" style={{ marginBottom: 10 }}>
    T.14 (body text)
  </Text>
)
```

```jsx noeditor
const TypographyTableRow = require('./helpers').TypographyTableRow

(
  <div style={{marginTop: '24px'}}>
    <style dangerouslySetInnerHTML={{__html: `
      .typography-table td {
        padding: 10px;
        vertical-align: top;
      }
      .typography-table-variant {
        white-space: nowrap;
      }
    `}} />
    <hr />
    <div style={{marginTop: '24px'}}>
      <Text variant="T.28" fontWeight="bold" style={{marginBottom: 16}}>Type Guidelines: Web and Mobile Web</Text>
      <Text variant="T.16">Guidelines on font treatment along with suggested use cases</Text>
    </div>
    <table className="typography-table" style={{width: '100%', marginTop: '24px'}}>
      <tbody>
        <TypographyTableRow
          variant="T.92"
          usage={['Web: Oversized screen titles', 'Mobile: Calling out metrics and numbers on dashboards or other relevant screens']}
          example="Snacks"
        />
        <TypographyTableRow
          variant="T.82"
          usage={['Web: Oversized screen titles', 'Mobile: Calling out metrics and numbers on dashboards or other relevant screens']}
          example="Snacks"
        />
        <TypographyTableRow
          variant="T.72"
          usage={['Web: Oversized screen titles', 'Mobile: Calling out metrics and numbers on dashboards or other relevant screens']}
          example="Snacks"
        />
        <TypographyTableRow
          variant="T.64"
          usage={['Web: Oversized screen titles', 'Mobile: Calling out metrics and numbers on dashboards or other relevant screens']}
          example="Snacks"
        />
        <TypographyTableRow
          variant="T.58"
          usage={['Web: Title size', 'Mobile: Calling out metrics and numbers on dashboards or other relevant screens']}
          example="Snacks"
        />
        <TypographyTableRow
          variant="T.46"
          usage={['Web: Top level headers. Ideal as titles on web or subtitles paired with larger sizes']}
        />
        <TypographyTableRow
          variant="T.36"
          usage={['Web: Standard size for web titles', 'Mobile: Large titles']}
        />
        <TypographyTableRow
          variant="T.28"
          usage={['Web: Titles for sections, modals, trays, etc.', 'Mobile: Large titles']}
        />
        <TypographyTableRow
          variant="T.22"
          usage={['Web: Subtitles and section titles', 'Mobile: Large titles']}
        />
        <TypographyTableRow
          variant="T.18"
          usage={['Web: Subtitles and section titles', 'Mobile: Title. Also used as body size on shopper products']}
        />
        <TypographyTableRow
          variant="T.16"
          usage={['Web: Body text where 14 is too small', 'Mobile: Title, subtitle, or body text']}
        />
        <TypographyTableRow
          variant="T.14"
          usage={['Web: Body text, usually good for paragraphs', 'Mobile: Subtitle or body text']}
        />
        <TypographyTableRow
          variant="T.12"
          usage={['Web: Subtext for de-emphaiszed information', 'Mobile: Body text (e.g. on item cards). More commonly seen on customers side']}
        />
        <TypographyTableRow
          variant="T.11"
          usage={['Web: DO NOTE USE! Does not meet accessibility standards', 'Mobile: Subtext for de-emphasized information like legal jargon. More commonly seen on customers side']}
        />
      </tbody>
    </table>
  </div>
)
```
