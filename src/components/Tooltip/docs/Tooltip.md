Examples:

```js

initialState = {
  size: 'medium',
  placement: 'bottom',
  style: 'primary',
  trigger: 'button',
  isVisible: false,
}

const handlePlacementChange = (placement) => {
  setState({placement: placement})
}

const handleStyleChange = (style) => {
  setState({style: style})
}

const handleSizeChange = (size) => {
  setState({size: size})
}

const handleTriggerChange = (trigger) => {
  setState({trigger: trigger})
}

handleTargetClick = () => {
  setState({isVisible: !state.isVisible})
}

showOnClickContainer = () => {
  return {
    position: 'relative',
    width: '200px',
    height: '200px',
    backgroundColor: 'rgb(20, 110, 4)',
  }
}

const targetDivStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  top: 0,
  left: 0,
}

const targetDiv = () => {
  return <div style={targetDivStyles}/>
}

<div>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div>
      <h3>Size</h3>
      <RadioGroup name="size" onChange={handleSizeChange}>
        <Radio id="size1" value="small">Small</Radio>
        <Radio id="size2" value="medium">Medium</Radio>
        <Radio id="size3" value="large">Large</Radio>
      </RadioGroup>
    </div>
    <div>
      <h3>Style</h3>
      <RadioGroup name="style" onChange={handleStyleChange}>
        <Radio id="style1" value="primary">Primary</Radio>
        <Radio id="style2" value="secondary">Secondary</Radio>
        <Radio id="style3" value="dark">Dark</Radio>
      </RadioGroup>
    </div>
    <div>
      <h3>Placement</h3>
      <RadioGroup name="placement" onChange={handlePlacementChange}>
        <Radio id="placement1" value="left">Left</Radio>
        <Radio id="placement2" value="right">Right</Radio>
        <Radio id="placement3" value="top">Top</Radio>
        <Radio id="placement4" value="bottom">Bottom</Radio>
      </RadioGroup>
    </div>

    <div>
      <h3>Trigger</h3>
      <RadioGroup name="trigger" onChange={handleTriggerChange}>
        <Radio id="trigger1" value="icon">Icon</Radio>
        <Radio id="trigger2" value="button">Button</Radio>
      </RadioGroup>
    </div>
  </div>

  <div style={{padding: '30px', textAlign: 'center'}}>
    <Tooltip
      target={state.trigger === 'icon' ? <Icon name='info' /> : <Button> Toggle </Button>}
      placement={state.placement}
      size={state.size}
      snacksStyle={state.style}
    >
      {state.size} {state.style} {state.placement}
    </Tooltip>
  </div>
  
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
    <h3>Show Tooltip When Clicking Target</h3>
    <div onClick={handleTargetClick} style={showOnClickContainer()}>
      <Tooltip 
        target={targetDiv()}
        placement={'right'}
        snacksStyle={state.style}
      >
        Tooltip When Clicking Target
      </Tooltip>
    </div>
  </div>
  
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
    <h3>Show Tooltip Onload</h3>
    <div style={showOnClickContainer()}>
      <Tooltip 
        target={targetDiv()}
        placement={'right'}
        snacksStyle={state.style}
        isVisible={true}
      >
        <div style={{width: '100%', height: '100%'}}>
          Tooltip Onload
        </div>
      </Tooltip>
    </div>
  </div>

</div>
```

