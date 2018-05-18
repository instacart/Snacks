Menu Example:

```js

function onSelect(e, foo) {
  console.log(foo)
}

<div style={{display: 'flex'}}>
  <div style={{marginRight: '30px'}}>
    <Menu onSelect={onSelect}>
      <MenuItem label="First" value="First" />
      <MenuItem label="Second" value="Second" />
      <MenuItem label="Third" value="Third" disabled />
      <MenuItem label="Fourth" value="Fourth"/>
      <MenuDivider />
      <MenuItem label="Fifth" value="Fifth" />
    </Menu>
  </div>

  <div>
    <Menu>
      <MenuItem label="Share via Email" value="email" leftIcon="emailFilled" labelStyles={{fill: 'green'}}/>
      <MenuItem label="Share via Facebook" value="facebook" leftIcon={<Icon name="facebook" style={{fill: '#3c5a99', fontSize: '22px'}} />} />
      <MenuItem label="Share via Twitter" value="twitter" leftIcon="twitter" leftIconStyles={{fill: '#1da1f2'}}/>
    </Menu>
  </div>
</div>
```
