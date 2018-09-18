Tables consist of displayed `data` and a `definition` used to lay out the rows.

```jsx
    <div>
      <Table
        data={[
          { name: 'Apple', type: 'fruit', emoji: '🍎' },
          { name: 'Carrot', type: 'vegetable', emoji: '🥕' },
          { name: 'Lemon', type: 'fruit', emoji: '🍋' },
          { name: 'Avocado', type: 'vegetable', emoji: '🥑' }
        ]}
        definition={[
          { header: 'Name', attribute: 'name' },
          { header: 'Type', attribute: 'type' },
          { header: '👇', attribute: 'emoji' }
        ]}
      />
    </div>
```

You can provide a specific render method for each cell, as well.

```jsx
    <div>
      <Table
        data={[
          { name: 'Apple', type: 'fruit', preference: 0.64 },
          { name: 'Carrot', type: 'vegetable', preference: 1.00 },
          { name: 'Lemon', type: 'fruit', preference: 0.20 },
          { name: 'Avocado', type: 'vegetable', preference: 0.86 }
        ]}
        definition={[
          { header: 'Name', attribute: 'name' },
          { header: 'Type', attribute: 'type' },
          { header: 'User Preference', attribute: 'preference', cellRender: (preference, rowIndex, rowData) => (<span>{preference * 100}%</span>) }
        ]}
      />
    </div>
```
