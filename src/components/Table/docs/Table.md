Table example:

```jsx
    <div>
      <Table
        data={[
          { name: 'Apple', title: 'fruit' },
          { name: 'Carrot', title: 'vegetable' },
          { name: 'Lemon', title: 'fruit' },
          { name: 'Avocado', title: 'VEGETABLE' }
        ]}
        definition={[
          { header: 'Name', attribute: 'name' },
          { header: 'Title', attribute: 'title', cellRender: (name, rowIndex, rowData) => (<span>{name.toLowerCase()}</span>) }
        ]}
      />
    </div>
```

You can apply row click events with the prop `onRowClick`

Individual cells can have their own click handler as well, using `onClick` within a `definition`. These will override any applied `onRowClick`.

```jsx
    <div>
      <Table
        withHeader={false}
        data={[
          { name: 'Apple', title: 'fruit', emoji: '🍎' },
          { name: 'Carrot', title: 'vegetable', emoji: '🥕' },
          { name: 'Lemon', title: 'fruit', emoji: '🍋' },
          { name: 'Avocado', title: 'VEGETABLE', emoji: '🥑' }
        ]}
        definition={[
          { header: 'Name', attribute: 'name', onClick: rowData => alert(`Cell click for "${rowData.name}"`) },
          { header: 'Title', attribute: 'title', cellRender: (name, rowIndex, rowData) => (<span>{name.toLowerCase()}</span>) }
        ]}
        onRowClick={rowData => {
          alert(rowData.emoji.repeat(3))
        }}
      />
    </div>
```
