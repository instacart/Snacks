import * as React from 'react'

import colors from './styles/colors/index'
import Tooltip from './components/Tooltip/Tooltip'
import Button from './components/Buttons/Button'
import CircleButton from './components/Buttons/CircleButton'
import Radio from './components/Buttons/Radio'
import RadioGroup from './components/Buttons/RadioGroup'
import Checkbox from './components/Buttons/Checkbox'
import Switch from './components/Buttons/Switch'
import Column from './components/Grid/Column'
import GlobalTheme from './styles/GlobalTheme'
import Grid from './components/Grid/Grid'
import Icon from './components/Icon/Icon'
import SVGIcon from './components/SVGIcon/SVGIcon'
import Link from './components/Link/Link'
import LoadingBox from './components/Loading/LoadingBox'
import Pill from './components/Pill/Pill'
import NavigationPill from './components/NavigationPills/NavigationPill'
import NavigationPills from './components/NavigationPills/NavigationPills'
import SelectionPill from './components/SelectionPills/SelectionPill/SelectionPill'
import SelectionPills from './components/SelectionPills/SelectionPills'
import Normalize from './styles/Normalize'
import responsive from './styles/responsive'
import Row from './components/Grid/Row'
import ScrollTrack, {
  WithEqualWidthTrackInjectedProps,
  WithTrackProps,
} from './components/ScrollTrack/ScrollTrack'
import SetStyles from './styles/SetStyles'
import spacing from './styles/spacing'
import PhoneNumberField from './components/Forms/PhoneNumberField'
import DateField from './components/Forms/DateField'
import MaskedTextField from './components/Forms/MaskedTextField'
import TextField from './components/Forms/TextField'
import Select from './components/Forms/Select'
import ServerError from './components/Forms/ServerError'
import ValidationError from './components/Forms/ValidationError'
import FloatingLabel from './components/Forms/FloatingLabel'
import Form from './components/Forms/Form'
import FormComponent from './components/Forms/FormComponent'
import Menu from './components/Menus/Menu'
import MenuItem from './components/Menus/MenuItem'
import MenuDivider from './components/Menus/MenuDivider'
import DropdownMenu from './components/Menus/DropdownMenu'
import zIndex from './styles/zIndex'
import { Themer, ThemerContext, ThemerProvider } from './styles/themer/index'
import withTheme, { WithThemeInjectedProps } from './styles/themer/withTheme'
import Slide from './components/Transitions/Slide'
import Grow from './components/Transitions/Grow'
import Fade from './components/Transitions/Fade'
import Portal from './components/Portal/Portal'
import Text from './components/Typography/Text'
import { themePropTypes } from './styles/themer/utils'

// Radium only supports these interaction styles
type RadiumPseudos = ':hover' | ':focus' | ':active'
type RadiumCSSPseudosObject = { [K in RadiumPseudos]?: RadiumCSSObject }

// Allows for arbitrary properties as a last resort -- this enables support for "@media xxxxxxx" etc
type RadiumCSSOthersObject = { [propertiesName: string]: RadiumStyles }

interface RadiumCSSObject
  extends React.CSSProperties,
    RadiumCSSPseudosObject,
    RadiumCSSOthersObject {}

// Radium supports style arrays and merges multiple style objects
interface RadiumStylesArray extends Array<RadiumStyles> {}

// Radium ignores non-objects/arrays so you can do `this.state.isCool && styles.cool`
export type RadiumStyles =
  | null
  | undefined
  | boolean
  | number
  | string
  | RadiumCSSObject
  | RadiumStylesArray
  | React.CSSProperties

export type ElementAttributes<T> = (T extends keyof JSX.IntrinsicElements
  ? React.ComponentPropsWithoutRef<T>
  : T) & {
  [key: string]: string | number | undefined
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type GetRef<
  C extends React.ElementType,
  P = React.ComponentPropsWithRef<C>
> = 'ref' extends keyof P ? (P extends { ref?: React.Ref<infer R> } ? R : never) : never

export {
  // styles
  colors,
  zIndex,
  // style overriding ()
  GlobalTheme,
  Normalize,
  SetStyles,
  // theming
  Themer,
  ThemerContext,
  ThemerProvider,
  withTheme,
  WithThemeInjectedProps,
  themePropTypes,
  // grid system
  responsive,
  spacing,
  Grid,
  Column,
  Row,
  // forms
  Form,
  FormComponent,
  FloatingLabel,
  PhoneNumberField,
  DateField,
  MaskedTextField,
  ServerError,
  TextField,
  Select,
  ValidationError,
  // transitions
  Grow,
  Fade,
  Slide,
  // components
  Pill,
  Tooltip,
  Button,
  CircleButton,
  Radio,
  RadioGroup,
  Checkbox,
  Switch,
  Icon,
  SVGIcon,
  Link,
  LoadingBox,
  NavigationPill,
  NavigationPills,
  SelectionPill,
  SelectionPills,
  ScrollTrack,
  WithTrackProps,
  WithEqualWidthTrackInjectedProps,
  Menu,
  MenuItem,
  MenuDivider,
  DropdownMenu,
  Portal,
  Text,
}
