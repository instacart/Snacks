import Introduction from './components/foundations/Introduction'

import Colors from './components/utilities/Colors'
import Icons from './components/utilities/Icons'

import Button from './components/components/Button'
import CircleButton from './components/components/CircleButton'

import Checkbox from './components/form/Checkbox'
import Radio from './components/form/Radio'
import RadioGroup from './components/form/RadioGroup'

export default {
  Foundations: {
    Introduction: {
      component: Introduction,
      path: '/foundations/introduction',
    },
    Installation: {
      path: '/foundations/installation',
    },
    'Basic Usage': {
      path: '/foundations/basic_usage',
    },
  },
  Layout: {
    Column: {
      path: '/layout/column',
    },
    Row: {
      path: '/layout/row',
    },
    Spacing: {
      path: '/layout/spacing',
    },
    Responsive: {
      path: '/layout/responsive',
    },
  },
  Utilities: {
    Colors: {
      component: Colors,
      path: '/utilities/colors',
    },
    Transitions: {
      path: '/utilities/transitions',
    },
    Icons: {
      component: Icons,
      path: '/utilities/icons',
    },
    ScrollTrack: {
      path: '/utilities/scrolltrack',
    },
    Slide: {
      path: '/utilities/slide',
    },
    Themer: {
      path: '/utilities/themer',
    },
  },
  Components: {
    Button: {
      component: Button,
      path: '/components/button',
    },
    CircleButton: {
      component: CircleButton,
      path: '/components/circlebutton',
    },
    DropdownMenu: {
      path: '/components/dropdownmenu',
    },
    Menu: {
      path: '/components/menu',
    },
    MenuDivider: {
      path: '/components/menudivider',
    },
    MenuItem: {
      path: '/components/menuitem',
    },
    NavigationPill: {
      path: '/components/navigationpill',
    },
    NavigationPills: {
      path: '/components/navigationpills',
    },
  },
  Forms: {
    Checkbox: {
      component: Checkbox,
      path: '/components/checkbox',
    },
    FloatingLabel: {
      path: '/components/floatinglabel',
    },
    Form: {
      path: '/components/form',
    },
    FormComponent: {
      path: '/components/formcomponent',
    },
    HelperText: {
      path: '/components/helpertext',
    },
    PhoneNumberfield: {
      path: '/components/radio',
    },
    Radio: {
      component: Radio,
      path: '/components/radio',
    },
    RadioGroup: {
      component: RadioGroup,
      path: '/components/radiogroup',
    },
    Select: {
      path: '/components/select',
    },
    ServerError: {
      path: '/components/servererror',
    },
    TextField: {
      path: '/components/textfield',
    },
    TextFieldHint: {
      path: '/components/textfieldhint',
    },
    ValidationError: {
      path: '/components/validationerror',
    },
  },
}
