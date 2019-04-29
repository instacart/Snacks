Light:
```jsx static
(
  <div>
    <LoadingBox background="light" />
  </div>
)
```

Standard:
```jsx static
(
  <div>
    <LoadingBox />
  </div>
)
```

Dark:
```jsx static
(
  <div>
    <LoadingBox background="dark" />
  </div>
)
```

Circle:
```jsx static
(
  <div>
    <LoadingBox shape="circle" background="dark" size={150} />
  </div>
)
```

Square:
```jsx static
(
  <div>
    <LoadingBox shape="square" background="light" size={150} />
  </div>
)
```

Line:
```jsx static
(
  <div>
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
    <LoadingBox shape="line" />
  </div>
)
```

Example Combination:

```jsx static
const cardStyles = {
  display: 'flex',
  flexDirection: 'row',
  width: '280px',
}
const baseLineStyle = { marginTop: 10 }

(
  <div style={cardStyles}>
    <div style={{ flexGrow: 1 }}>
      <LoadingBox size={100} background="dark" />
      <LoadingBox shape="line" />
      <LoadingBox shape="line" />
      <LoadingBox shape="line" />
    </div>
    <div>
      <LoadingBox shape="circle" />
    </div>
  </div>
)
````

**Note:** the size prop can be a percentage (supplied as a string) or a number in pixels:

```jsx static
(
  <div style={{ width: 200 }}>
    <LoadingBox shape="line" size="50%" />
    <LoadingBox shape="line" size={100} />
  </div>
)
```
