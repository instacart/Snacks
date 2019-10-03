import colors from '../../../styles/colors'
import { setAlpha } from '../../../utils'
import spacing from '../../../styles/spacing'

export const getStyles = (props, primaryForeground) => {
  const backgroundColor = setAlpha(primaryForeground, 0.1)

  return {
    container: {
      display: 'inline-block',
    },
    checkbox: {
      display: 'block',
      fontWeight: 600,
      fontSize: 14,
      height: 32,
      lineHeight: '32px',
      borderRadius: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.GRAY_88,
      color: primaryForeground,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: '4px',
      marginRight: '4px',
      ...spacing.PADDING_X_SM,
      transition: 'background-color 150ms ease-in-out',
      ':hover': {
        backgroundColor,
      },
    },
    checkBoxOverrideStyle: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clippath: 'inset(50%)',
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      height: 1,
      width: 1,
    },
    focusStyles: {
      outline: '5px auto rgb(59, 153, 252)',
      borderColor: primaryForeground,
    },
    disabledStyles: {
      color: setAlpha(primaryForeground, 0.6),
      backgroundColor: colors.GRAY_97,
      ':hover': {
        backgroundColor: colors.GRAY_97,
      },
    },
    activeStyles: {
      backgroundColor,
      borderColor: primaryForeground,
      ':hover': {
        backgroundColor: setAlpha(primaryForeground, 0.3),
      },
    },
  }
}
