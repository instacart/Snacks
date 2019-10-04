import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import ScrollTrack from '../ScrollTrack/ScrollTrack'
import spacing from '../../styles/spacing'
import SelectionPill from './SelectionPill'

const NoOp = () => {} // eslint-disable-line no-empty-function

const STYLES = {
  wrapperStyles: {
    display: 'inline-block',
    minWidth: '100%',
    padding: 0,
  },
  pillsListStyles: {
    display: 'inline-block',
    padding: 0,
    marginRight: 4,
    marginLeft: 4,
    ...spacing.MARGIN_Y_SM,
  },
}

class SelectionPills extends React.PureComponent {
  static propTypes = {
    /** Callback function called after pill click
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {props} object All the props passed to the component
     */
    onSelectPill: PropTypes.func,

    /** Any additional props to add to the wrapper element (e.g. data attributes). */
    elementAttributes: PropTypes.object,

    /** Any additional props to add to the inner ul element (e.g. data attributes). */
    listAttributes: PropTypes.object,

    /** Array of pill objects */
    pills: PropTypes.array,

    /** Optional label placed in front of pills */
    label: PropTypes.string,

    /** Optional label style overrides. */
    labelStyle: PropTypes.object,

    /** Option to only allow a maximum number of selected items. No restriction if not set */
    selectionMax: PropTypes.number,

    /** Option to include a generated pill that will toggle all other pills on / off */
    includeSelectAll: PropTypes.bool,
  }

  static defaultProps = {
    elementAttributes: {},
    onSelectPill: NoOp,
    pills: [],
    selectionMax: null,
    includeSelectAll: false,
  }

  state = {
    pillsList: this.props.pills,
    selectedCount: this.props.pills.filter(p => p.isSelected === true).length,
    selectionMax: this.props.selectionMax,
  }

  componentDidMount() {
    this.setState(prevState => ({
      pillsList: prevState.pillsList.map(p => {
        return {
          ...p,
          isSelected: p.isSelected || false,
        }
      }),
    }))
  }

  onSelectPill = (e, pill) => {
    const { onSelectPill } = this.props
    const { pillsList, selectedCount } = this.state
    const newPillList = pillsList.map(p => {
      if (p.id !== pill.id) {
        return p
      }
      return {
        ...p,
        isSelected: !pill.isSelected,
      }
    })

    this.setState({
      pillsList: newPillList,
      selectedCount: pill.isSelected ? selectedCount - 1 : selectedCount + 1,
    })
    onSelectPill(e, pill, newPillList)
  }

  renderLabel = () => {
    const { label, labelStyle } = this.props
    if (!label) return null
    return <span style={{ ...STYLES.labelStyles, ...labelStyle }}>{label}</span>
  }

  renderPill = (pill, idx) => {
    const { selectedCount, selectionMax } = this.state
    const disablePill = !pill.isSelected && selectionMax && selectedCount >= selectionMax
    return (
      <SelectionPill
        isSelected={pill.isSelected}
        isDisabled={disablePill || pill.isDisabled}
        onClick={e => this.onSelectPill(e, pill)}
        text={pill.text}
        key={`selectionPill-${idx}`}
        id={pill.id || `selectionPill-${pill.text}-${idx}`}
        listElementAttributes={pill.elementAttributes}
        elementAttributes={pill.elementAttributes}
      />
    )
  }

  render() {
    const { listAttributes, elementAttributes } = this.props
    const { pillsList } = this.state
    return (
      <ScrollTrack>
        <div style={STYLES.wrapperStyles} ref="pillsTrack" {...elementAttributes}>
          {this.renderLabel()}
          <ul style={STYLES.pillsListStyles} {...listAttributes}>
            {pillsList.map(this.renderPill)}
          </ul>
        </div>
      </ScrollTrack>
    )
  }
}

export default Radium(SelectionPills)
