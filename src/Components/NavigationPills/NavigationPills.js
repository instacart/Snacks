import React           from 'react'
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
  pills: React.PropTypes.array,
  onPillClick: React.PropTypes.func,
  label: React.PropTypes.string,
  activePill: React.PropTypes.string
}

export default Radium(NavigationPills)
