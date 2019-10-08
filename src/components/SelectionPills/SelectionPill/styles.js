import colors from '../../../styles/colors'
import { setAlpha } from '../../../utils'
import spacing from '../../../styles/spacing'

export const getStyles = ({
  isSelected = false,
  isFocused = false,
  isDisabled = false,
  primaryForeground,
  externalStyles = {},
} = {}) => {
  const backgroundColor = setAlpha(primaryForeground, 0.1)

  return {
    listElement: {
      display: 'inline-block',
    },
    labelButton: {
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
      ...externalStyles.button,

      ...(isFocused && {
        outline: '5px auto rgb(59, 153, 252)',
        borderColor: primaryForeground,
        ...externalStyles.focusedStyle,
      }),

      ...(isDisabled && {
        color: setAlpha(primaryForeground, 0.6),
        backgroundColor: colors.GRAY_97,
        ':hover': {
          backgroundColor: colors.GRAY_97,
        },
        ...externalStyles.disabledStyle,
      }),

      ...(isSelected && {
        backgroundColor,
        borderColor: primaryForeground,
        ':hover': {
          backgroundColor: setAlpha(primaryForeground, 0.3),
        },
        ...externalStyles.selectedStyle,
      }),
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
  }
}
