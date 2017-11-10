### ScollTrack example:

    internalTrackStyles = {
      RightArrow: {
        backgroundColor: 'blue'
      }
    }

    styles = { padding: '8px 20px', marginRight: '5px', fontSize: '24px', borderRadius: '4px', backgroundColor: '#eee', color: '#43B02A', top: '8px' };
    <div style={{ height: '56px' }}>
      <ScrollTrack styles={internalTrackStyles}>
        <div style={{ padding: '8px 0' }}>
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "bananas")
            }}
            text={"bananas"}
          />
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "carrots")
            }}
            text={"carrots"}
          />
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "watermelon")
            }}
            text={"watermelon"}
          />
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "kale")
            }}
            text={"kale"}
          />
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "arugula")
            }}
            text={"arugula"}
          />
          <Icon name="cart" style={styles} />
          <Icon name="cart" style={styles} />
          <NavigationPill
            isActive={true}
            onClick={e => {
              e.preventDefault()
              console.log('NavigationPill click!', "spinach")
            }}
            text={"spinach"}
          />
        </div>
      </ScrollTrack>
    </div>

### ScrollTrack with equalWidthTrack wrapper
**NOTE: This HOC assumes the wrapped component is a container of equally and static sized elements**

`ScrollTrack.equalWidthTrack` is a higher order component that will supply the wrapped
component with two additional props: `startIndex` and `lastIndex`. This will enable the
child to determine how it wants to treat elements that are shown within the track
or hidden off the overflow.

The argument supplied to `equalWidthTrack` is the width of each element as defined
as a number or a function of props that will output the width of each element.

Example use case: *A container of item cards that all have a width of 90px and margins of 5px on both sides*

```js static
  const childWidth = 100;

  @ScrollTrack.equalWidthTrack(childWidth)
  class ItemCardsContainer extends Component {
    static propTypes = {
      trackProps: ScrollTrack.ScrollTrackPropTypes.trackProps,
      startIndex: PropTypes.number,
      lastIndex: PropTypes.number
    };

    render () {
      ...
    }
  }

  const childWidthFn = (props) => props.childWidth;

  @ScrollTrack.equalWidthTrack(childWidthFn)
  class ItemCardsContainerBasedOnFunction extends Component {
    static propTypes = {
      trackProps: ScrollTrack.ScrollTrackPropTypes.trackProps,
      startIndex: PropTypes.number,
      lastIndex: PropTypes.number
    };

    render () {
      ...
    }
  }
```

    const CustomComponent = ScrollTrack.equalWidthTrack(186)(({ startIndex, lastIndex, trackProps }) => {
      const { showRightArrow, showLeftArrow } = trackProps;
      const children = new Array(20).fill(1).map((_, index) => {
        const style = {
          backgroundColor: 'red',
          minWidth: '176px',
          minHeight: '176px',
          margin: '0 5px',
          opacity: (showLeftArrow && index === startIndex) || (showRightArrow && index === lastIndex) ? 0.6 : 1
        };

        return <div style={style}>Item</div>;
      });

      return (
        <div style={{ display: 'flex' }}>
          {children}
        </div>
      );
    });

    CustomComponent.propTypes = {
      trackProps: ScrollTrack.ScrollTrackPropTypes.trackProps,
    };

    <ScrollTrack>
      <CustomComponent />
    </ScrollTrack>


Using callbacks
```js static
  <ScrollTrack
    onBeforeNext={(props) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('before next!', props)
            resolve()
          }, 1000)
      })
    }}
    onAfterNext={(props) => { console.log('after next!', props) }}
    onBeforeBack={(props) => { console.log('before back!', props) }}
    onAfterBack={(props) => { console.log('after back!', props) }}
  >
    <div>
      <Icon name="cart" style={styles} />
      <Icon name="cart" style={styles} />
      <Icon name="cart" style={styles} />
      <Icon name="cart" style={styles} />
      <Icon name="cart" style={styles} />
      <Icon name="cart" style={styles} />
    </div>
  </ScrollTrack>
```

Doing async pagination:

    initialState = {
      items: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 }
      ]
    };


    const itemsToAddLater = (itemsCount) => {
      // generate more items
      const arr = []
      let i = 0
      while (i <= itemsCount) {
        i += 1
        arr.push({ id: itemsCount + i })
      }

      return arr
    };

    <ScrollTrack
      styles={{ Track: { height: '56px', padding: '10px 0' }, RightArrow: { top: '6px' }}}
      onBeforeNext={({atStart, atEnd, slideTo, parentWidth, trackWidth}) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
                // add items 1 second later, then resolve
                setState({items: state.items.concat(itemsToAddLater(state.items.length))}, resolve)
            }, 1000)
          })
      }}
    >
      <div>
        { state.items.map(item =>
          <Icon
            name="cart"
            style={{
              ...styles,
              ...{
                backgroundColor: item.id % 2 != 0 ? '#eee' : '#43B02A',
                color: item.id % 2 != 0 ? '#43B02A' : '#eee'
              }
            }}
            key={`pagination_item_${item.id}`}
          />
        )}
      </div>
    </ScrollTrack>

Using custom next and back button content

    <ScrollTrack
      backButtonContent={<Icon name="arrowLeft" />}
      nextButtonElement={<Icon name="arrowRight" />}
      styles={{
          Track: { height: '56px' },
          LeftArrow: { backgroundColor: '#7FE364', color: '#fff', border: 'none', borderRadius: '50%', height: '30px', width: '30px', lineHeight: '30px', fontWeight: '600' },
          RightArrow: { backgroundColor: '#7FE364', color: '#fff', border: 'none', borderRadius: '50%', height: '30px', width: '30px', lineHeight: '30px', fontWeight: '600' }
      }}
    >
      <div>
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
        <Icon name="cart" style={styles} />
      </div>
    </ScrollTrack>

Using Scroll offset


    offsetStyles = { height: '56px', lineHeight: '56px', width: '208px', backgroundColor: '#fff', display: 'inline-block', textAlign: 'center'};
    innerOffsetStyles={ margin: '0 16px', backgroundColor: '#efefef' };
    <div style={{ width: '1248px' }}>
      <ScrollTrack
        styles={{ Track: { height: '56px' } }}
        scrollOffset={104}
      >
        <div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>1</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>2</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>3</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>4</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>5</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>6</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>7</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>8</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>9</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>10</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>11</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>12</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>13</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>14</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>15</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>16</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>17</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>18</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>19</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>20</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>21</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>22</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>23</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>24</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>25</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>26</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>27</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>28</div></div>
          <div style={offsetStyles}><div style={innerOffsetStyles}>29</div></div>
        </div>
      </ScrollTrack>
    </div>
