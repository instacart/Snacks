export default {
  labelStyles: {
    marginRight: '10px',
  },
  wrapperStyles: {
    display: 'inline-block',
    height: '56px',
    minWidth: '100%',
    padding: '8px 8px 8px 24px',
    backgroundColor: '#fff',
  },
  pillsContainerStyles: {
    display: 'inline-block',
    margin: '0'
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
