import spacing from '../../styles/spacing'

export const getStyles = ({ externalStyles = {}, excludeScrollTrack = false } = {}) => ({
  wrapperStyles: {
    display: 'inline-block',
    minWidth: '100%',
    padding: 0,
    ...externalStyles.wrapperStyle,
  },
  pillsListStyles: {
    display: 'inline-block',
    padding: 0,
    marginRight: 4,
    marginLeft: 4,
    ...spacing.MARGIN_Y_SM,
    ...externalStyles.listStyle,
  },

  // Provide bottom margin to pills when in grid format
  ...(excludeScrollTrack && {
    pillOverrideStyles: {
      button: { marginBottom: 8 },
    },
  }),
})
