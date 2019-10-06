import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import ScrollTrack from '../ScrollTrack/ScrollTrack'
import SelectionPill from './SelectionPill'
import { getStyles } from './styles'

const NoOp = () => {} // eslint-disable-line no-empty-function
class SelectionPills extends React.PureComponent {
  static propTypes = {
    /** Callback function called after pill click
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {pill} object All pill attributes for pill selected
     * @param {pillList} object List of all pills
     */
    onSelectPill: PropTypes.func,

    /** Any additional props to add to the wrapper element (e.g. data attributes). */
    elementAttributes: PropTypes.object,

    /** Any additional props to add to the inner ul element (e.g. data attributes). */
    listAttributes: PropTypes.object,

    /** Flag determining if pills selected state is controlled by parent through props or internal state */
    parentControlledState: PropTypes.bool,

    /** Array of selectionPill attributes */
    pills: PropTypes.array,

    /** Optional label placed in front of pills */
    label: PropTypes.string,

    /** Option to only allow a maximum number of selected items. No restriction if not set. */
    maxSelectionCount: PropTypes.number,

    /** Option to include a generated pill that will toggle all other pills on / off. Disabled if a maxSelectionCount or parentControlledState. */
    includeSelectAll: PropTypes.bool,

    /** Optional override of the select all pill label */
    selectAllLabel: PropTypes.string,

    /** Optional override styles */
    style: PropTypes.shape({
      wrapperStyle: PropTypes.object,
      listStyle: PropTypes.object,
      labelStyle: PropTypes.object,
    })
  }

  static defaultProps = {
    elementAttributes: {},
    onSelectPill: NoOp,
    pills: [],
    maxSelectionCount: null,
    includeSelectAll: false,
    selectAllLabel: 'All',
    parentControlledState: false,
    style: {},
  }

  state = {
    pillsList: this.props.pills,
    selectedCount: this.props.pills.filter(p => p.isSelected === true).length,
    allSelected: false,
  }

  // Initialize pills selected states
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

  onSelectAll = e => {
    const { selectAllLabel, onSelectPill } = this.props
    const { pillsList, allSelected } = this.state
    const selectedPill = { id: 'selectAllPill', isSelected: !allSelected, text: selectAllLabel }
    const newPillList = pillsList.map(p => {
      return {
        ...p,
        isSelected: false,
      }
    })

    this.setState({
      pillsList: newPillList,
      allSelected: !allSelected,
    })
    onSelectPill(e, selectedPill, newPillList)
  }

  onSelectPill = (e, pill) => {
    const { onSelectPill, pills, parentControlledState } = this.props
    const selectedPill = { ...pill, isSelected: !pill.isSelected }
    if (parentControlledState) {
      return onSelectPill(e, selectedPill, pills)
    }

    const { pillsList, selectedCount } = this.state
    const newPillList = pillsList.map(p => {
      if (p.id !== pill.id) {
        return p
      }
      return selectedPill
    })

    this.setState({
      pillsList: newPillList,
      selectedCount: pill.isSelected ? selectedCount - 1 : selectedCount + 1,
      allSelected: false,
    })
    onSelectPill(e, selectedPill, newPillList)
  }

  // Disable not selected pills when max pills reached. Not applicable when parent controlled
  isDisabledPill = pill => {
    const { maxSelectionCount, parentControlledState } = this.props
    const { selectedCount } = this.state
    if (parentControlledState || pill.isSelected) return false
    if (!selectedCount || !maxSelectionCount) return false
    return selectedCount >= maxSelectionCount
  }

  renderSelectAllPill = () => {
    const {
      maxSelectionCount,
      includeSelectAll,
      selectAllLabel,
      parentControlledState,
    } = this.props
    const { allSelected } = this.state
    if (maxSelectionCount || !includeSelectAll || parentControlledState) return

    return (
      <SelectionPill
        onClick={e => this.onSelectAll(e)}
        isSelected={allSelected}
        text={selectAllLabel}
        aria={{ label: selectAllLabel }}
        key="selectAllPill"
        id="selectAllPill"
        parentControlledState
      />
    )
  }

  renderLabel = () => {
    const { label, style } = this.props
    if (!label) return null
    return (
      <span id="selectionPillsLabel" style={style.labelStyle}>
        {label}
      </span>
    )
  }

  renderPill = (pill, idx) => (
    <SelectionPill
      isDisabled={this.isDisabledPill(pill)}
      onClick={e => this.onSelectPill(e, pill)}
      key={`selectionPill-${idx}`}
      id={pill.id || `selectionPill-${pill.text}-${idx}`}
      parentControlledState
      {...pill}
    />
  )

  render() {
    const { listAttributes, elementAttributes, parentControlledState, style } = this.props
    const listToRender = parentControlledState ? this.props.pills : this.state.pillsList
    const componentStyles = getStyles({ externalStyles: style })

    return (
      <ScrollTrack>
        <div style={componentStyles.wrapperStyles} ref="pillsTrack" {...elementAttributes}>
          {this.renderLabel()}
          <ul
            style={componentStyles.pillsListStyles}
            aria-labelledby="selectionPillsLabel"
            {...listAttributes}
          >
            {this.renderSelectAllPill()}
            {listToRender.map(this.renderPill)}
          </ul>
        </div>
      </ScrollTrack>
    )
  }
}

export default Radium(SelectionPills)
