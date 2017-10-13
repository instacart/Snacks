import React           from 'react'
import PropTypes       from 'prop-types'
import Radium          from 'radium'
import NavigationPill  from './NavigationPill'
import ScrollTrack     from '../ScrollTrack/ScrollTrack'
import colors          from '../../styles/colors'
import { spacings }    from '../../styles/spacing'

const styles = {
  labelStyles: {
    marginRight: '10px',
  },
  wrapperStyles: {
    display: 'inline-block',
    height: '56px',
    minWidth: '100%',
    padding: `${spacings.XS}px ${spacings.XS}px ${spacings.XS}px ${spacings.MD}px`,
    backgroundColor: colors.WHITE,
    boxSizing: 'border-box'
  },
  pillsContainerStyles: {
    display: 'inline-block',
    margin: '0'
  }
}

const NavigationPills = props => {
  const renderLabel = () => {
    if (!props.label) { return }

    return <label style={styles.labelStyles}>{props.label}</label>
  }

  const renderPill = (pill, idx) => {
    return (
      <NavigationPill
        isActive={props.activePill === pill.text}
        onClick={e => props.onPillClick(e, pill)}
        text={pill.text}
        key={`pill-${idx}`}
        elementAttributes={pill.elementAttributes}
      />
    )
  }

  const { pillsContainerStyles, wrapperStyles } = styles

  if (!props.pills || props.pills.length <= 1) { return null }

  return (
    <ScrollTrack>
      <div
        style={wrapperStyles}
        ref='pillsTrack'
        { ...props.elementAttributes }
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
  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes: PropTypes.object,

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

NavigationPills.defaultProps = {
  elementAttributes: {}
}

export default Radium(NavigationPills)
