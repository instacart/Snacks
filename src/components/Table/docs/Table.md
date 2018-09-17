Table example:

```jsx
    <div>
      <Table
        withHeader={true}
        data={[
          { name: 'Apple', title: 'fruit', emoji: '🍎' },
          { name: 'CARROT', title: 'vegetable', emoji: '🥕' },
          { name: 'Lemon', title: 'fruit', emoji: '🍋' },
          { name: 'Avocado', title: 'VEGETABLE', emoji: '🥑' }
        ]}
        definition={[
          { header: 'Name', attribute: 'name' },
          { header: 'Title', attribute: 'title', cellRender: (name, rowIndex, rowData) => (<span>{name.toLowerCase()}</span>) }
        ]}
        onRowClick={rowData => {
          alert(rowData.emoji)
        }}
      />
    </div>
```
