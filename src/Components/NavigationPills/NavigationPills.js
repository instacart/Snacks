import React           from 'react'
import PropTypes       from 'prop-types'
import Radium          from 'radium'
import Icon            from '../Icon/Icon'
import componentStyles from './NavigationPillStyles'
import NavigationPill  from './NavigationPill'
import ScrollTrack     from '../ScrollTrack/ScrollTrack'

const NavigationPills = props => {
  const renderLabel = () => {
    if (!props.label) { return }

    return <label style={componentStyles.labelStyles}>{props.label}</label>
  }

  const renderPill = (pill, idx) => {
    return (
      <NavigationPill
        isActive={props.activePill === pill.text}
        onClick={e => props.onPillClick(e, pill)}
        text={pill.text}
        key={`pill-${idx}`}
      />
    )
  }

  const { pillsContainerStyles, wrapperStyles } = componentStyles

  if (!props.pills || props.pills.length <= 1) { return null }

  return (
    <ScrollTrack>
      <div
        style={wrapperStyles}
        ref='pillsTrack'
      >
        {renderLabel()}
        <ul style={pillsContainerStyles}>
          {props.pills.map(renderPill)}
        </ul>
      </div>
    </ScrollTrack>
  )
}

NavigationPills.propTypes = {
  /** array of pill objects */
  pills: PropTypes.array,
  /** Callback function called after pill click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {props} object All the props passed to the component
  */
  onPillClick: PropTypes.func,
  /** optional label placed in front of pills */
  label: PropTypes.string,
  /** string matching the text of one of the pills. Determines which pill is active, if any */
  activePill: PropTypes.string
}

export default Radium(NavigationPills)
