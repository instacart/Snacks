ScollTrack example:

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
