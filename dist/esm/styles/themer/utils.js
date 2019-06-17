import PropTypes from 'prop-types';
import colors from '../colors';
export var themeTemplate = {
  colors: {
    action: true,
    actionHover: true,
    primaryBackground: true,
    primaryForeground: true,
    secondaryBackground: true,
    secondaryForeground: true,
    secondaryForegroundFocus: true
  }
};
export var defaultTheme = {
  colors: {
    action: colors.GREEN_500,
    actionHover: colors.GREEN_700,
    primaryBackground: colors.WHITE,
    primaryForeground: colors.GREEN_500,
    secondaryBackground: colors.GREEN_500,
    secondaryForeground: colors.WHITE,
    secondaryForegroundFocus: colors.GRAY_46
  }
};
export function cleanConfig(themeConfig) {
  var cleanConfigObj = {};
  Object.keys(themeConfig).forEach(function (themeSection) {
    if (!themeTemplate[themeSection]) {
      console.warn("Snacks theme error: \"" + themeSection + "\" not a valid config section. These values will not be set. Please use Themer template: ", themeTemplate);
    } else {
      Object.keys(themeConfig[themeSection]).forEach(function (sectionKey) {
        var templateSectionKey = themeTemplate[themeSection][sectionKey];
        var newSectionKey = themeConfig[themeSection][sectionKey];

        if (!templateSectionKey) {
          console.warn("Snacks theme error: \"" + sectionKey + "\" not a valid config key. This value will not be set. Please use Themer template: ", themeTemplate);
        } else {
          if (!cleanConfigObj[themeSection]) {
            cleanConfigObj[themeSection] = {};
          }

          cleanConfigObj[themeSection][sectionKey] = newSectionKey;
        }
      });
    }
  });
  return cleanConfigObj;
}
export function validConfigValue(section, sectionKey) {
  if (!themeTemplate[section]) {
    console.warn("Snacks theme error: \"" + section + "\" not a valid config section. These values will not be set. Please use Themer template: ", themeTemplate);
    return false;
  }

  if (!themeTemplate[section][sectionKey]) {
    console.warn("Snacks theme error: \"" + sectionKey + "\" not a valid config key. This value will not be set. Please use Themer template: ", themeTemplate);
    return false;
  }

  return true;
}
export var themePropTypes = PropTypes.shape({
  colors: PropTypes.shape({
    action: PropTypes.string,
    actionHover: PropTypes.string,
    primaryBackground: PropTypes.string,
    primaryForeground: PropTypes.string,
    secondaryBackground: PropTypes.string,
    secondaryForeground: PropTypes.string,
    secondaryForegroundFocus: PropTypes.string
  })
});
export default {
  cleanConfig: cleanConfig,
  themePropTypes: themePropTypes,
  themeTemplate: themeTemplate,
  validConfigValue: validConfigValue
};