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

Using custom next and back buttons

    <ScrollTrack
      backButtonElement={(
        <button>
          <Icon name="arrowLeft" />
        </button>
      )}
      nextButtonElement={(
        <button>
          <Icon name="arrowRight" />
        </button>
      )}
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
