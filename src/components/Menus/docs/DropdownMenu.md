DropdownMenu Example:

```js
<div style={{display: 'flex'}}>
  <div style={{marginRight: '20px'}}>
    <DropdownMenu triggerElement={<Button> Share </Button>}>
      <MenuItem label="Share via Email" value="email" leftIcon="emailFilled" />
      <MenuItem label="Share via Facebook" value="facebook" leftIcon="facebookFilled" leftIconStyles={{color: '#3c5a99'}} />
      <MenuItem label="Share via Twitter" value="twitter" leftIcon="twitterFilled" leftIconStyles={{color: '#1da1f2'}}/>
    </DropdownMenu>
  </div>
  <div>
    <DropdownMenu triggerElement={
      <Button> <Icon name="shareAndroid2Filled"/> </Button>
    }>
      <MenuItem label="Share via Email" value="email" leftIcon="emailFilled" />
      <MenuItem label="Share via Facebook" value="facebook" leftIcon="facebookFilled" leftIconStyles={{color: '#3c5a99'}} />
      <MenuItem label="Share via Twitter" value="twitter" leftIcon="twitterFilled" leftIconStyles={{color: '#1da1f2'}}/>
    </DropdownMenu>
  </div>
</div>
```
