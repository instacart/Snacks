Tables consist of displayed `data` and a `definition` used to lay out the rows.

```jsx
    <div>
      <Table
        data={[
          { name: 'Apple', title: 'fruit', emoji: '🍎' },
          { name: 'Carrot', title: 'vegetable', emoji: '🥕' },
          { name: 'Lemon', title: 'fruit', emoji: '🍋' },
          { name: 'Avocado', title: 'VEGETABLE', emoji: '🥑' }
        ]}
        definition={[
          { header: 'Name', attribute: 'name' },
          { header: 'Title', attribute: 'title', cellRender: (name, rowIndex, rowData) => (<span>{name.toLowerCase()}</span>) },
          { header: '👇', attribute: 'emoji' }
        ]}
      />
    </div>
```
