import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import TableTrimHeader from './TableTrimHeader'
import TableTrimBody from './TableTrimBody'


const TableTrim = (props) => {
  /**
   * Set up state hooks
   */
  const [isTrimmed, setIsTrimmed] = useState(props.isTrimmed);
  const [activeCol, setActiveCol] = useState(props.activeCol);
  const [prevIndex, setPrevIndex] = useState();
  const [nextIndex, setNextIndex] = useState();

  /**
   * Wire up effects to ensure external changes to props are propogated
   */
  useEffect(() => {
    setActiveCol(props.activeCol);
  }, [props.activeCol])
  useEffect(() => {
    setPrevIndex(calculatePrev(activeCol))
  })
  useEffect(() => {
    setNextIndex(calculateNext(activeCol))
  })

  /**
   * Helpers
   */
  const calculatePrev = (activeCol) => {
    const max = props.data.header.cells.length - 1;
    const prev = (activeCol == 0) ? max : activeCol - 1;
    return (prev != props.stickyCol) ? prev : calculatePrev(prev);
  }
  const calculateNext = (activeCol) => {
    const max = props.data.header.cells.length - 1;
    const next = (activeCol == max) ? 0 : activeCol + 1;
    return (next != props.stickyCol) ? next : calculateNext(next);
  }

  /**
   * Events
   */
  const handleActivateCol = (col) => {
    setActiveCol(col)
  }

  return (
    <table className="tt-table" cellPadding="0" cellSpacing="0">
      <TableTrimHeader 
        // from state
        isTrimmed={isTrimmed}
        activeCol={activeCol}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        // from props
        cells={props.data.header.cells} 
        stickyCol={props.stickyCol}
        showActiveTitle={props.showActiveTitle}
        showPrevControl={props.showPrevControl}
        showNextControl={props.showNextControl}
        showSelectControl={props.showSelectControl}
        prevControlHtml={props.prevControlHtml}
        nextControlHtml={props.nextControlHtml}
        // methods
        setActiveCol={handleActivateCol}
        />
      <TableTrimBody
        // from state
        isTrimmed={isTrimmed}
        activeCol={activeCol}
        // from props
        rows={props.data.body.rows} 
        stickyCol={props.stickyCol}
        />
    </table>
  )
}


/** 
 * Default props
 */
TableTrim.defaultProps = {
  stickyCol: 0,
  activeCol: 1,
  autoTrim: false,
  isTrimmed: false,
  autoTrimWidth: 760,
  showSelectControl: true,
  showPrevControl: false,
  showNextControl: false,
  nextControlHtml: 'Next',
  prevControlHtml: 'Previous',
  showActiveTitle: false
}


/**
 * Prop validation
 */
TableTrim.propTypes = {
  // required
  data: PropTypes.object.isRequired,
  // optional
  isTrimmed: PropTypes.bool,
  stickyCol: PropTypes.number,
  stickyColWidth: PropTypes.number,
  activeCol: PropTypes.number,
  autoTrimEnabled: PropTypes.bool,
  showActiveTitle: PropTypes.bool,
  showSelectControl: PropTypes.bool,
  showPrevControl: PropTypes.bool,
  showNextControl: PropTypes.bool,
  nextControlHtml: PropTypes.string,
  prevControlHtml: PropTypes.string
}

export default TableTrim;