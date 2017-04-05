export default {
  containerStyles: {
    overflow: 'hidden',
    height: '56px',
    backgroundColor: '#fff',
    position: 'relative',
  },
  innerContainerStyles: {
    display: 'block',
    minWidth: '100%',
    whiteSpace: 'nowrap',
    paddingLeft: '24px',
    marginTop: '8px',
    position: 'relative',
    transition: 'left 150ms ease-in-out'
  },
  labelStyles: {
    marginRight: '10px',
  },
  pillsContainerStyles: {
    display: 'inline-block',
    margin: '0'
  },
  slideButtonStyles: {
    default: {
      position: 'absolute',
      zIndex: '10',
      top: '8px',
      backgroundColor: '#fff',
      border: '0',
      color: 'green',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.26), 0 1px 4px 0 rgba(0, 0, 0, 0.16)',
      transition: 'background-color 150ms ease-in-out',
      textAlign: 'center',
      lineHeight: '1',
      ':hover': {
        backgroundColor: '#f7f7f7'
      },
      ':active': {
        backgroundColor: '#f7f7f7'
      },
      ':focus': {
        backgroundColor: '#f7f7f7',
        outline: 'none'
      }
    },
    left: {
      left: '8px'
    },
    right: {
      right: '8px'
    }
  },
  pill: {
    container: {
      display: 'inline-block'
    },
    main: {
      default: {
        padding: '12px 16px',
        display: 'block',
        fontSize: '14px',
        color: '#3ea327',
        backgroundColor: '#f7f7f7',
        borderRadius: '24px',
        margin: '0 4px',
        lineHeight: '1.2',
        transition: 'background-color 150ms ease-in-out',

        ':hover': {
          textDecoration: 'none',
          backgroundColor: '#eee'
        },
        ':focus': {
          textDecoration: 'none',
          backgroundColor: '#eee',
          outline: 'none'
        }
      },
      active: {
        backgroundColor: '#43B02A',
        color: '#fff',

        ':hover': {
          backgroundColor: '#43B02A'
        },
        ':focus': {
          backgroundColor: '#43B02A',
        }
      }
    }
  }
}
