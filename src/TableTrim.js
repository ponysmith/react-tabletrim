import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import TableTrimHeader from './TableTrimHeader'
import TableTrimBody from './TableTrimBody'
import { validateActiveCol, validateStickyCol } from './TableTrimValidators'

const TableTrim = (props) => {
  /**
   * State
   */
  const [_isTrimmed, setIsTrimmed] = useState(props.isTrimmed);
  const [_activeCol, setActiveCol] = useState(props.activeCol);
  const [_prevIndex, setPrevIndex] = useState();
  const [_nextIndex, setNextIndex] = useState();

  /**
   * Effects
   */
  useEffect(() => { setIsTrimmed(props.isTrimmed) }, [props.isTrimmed])
  useEffect(() => { 
    setActiveCol(props.activeCol);
    activeColCallback(props.activeCol);
  }, [props.activeCol])
  useEffect(() => { 
    activeColCallback(_activeCol) 
  }, [_activeCol])
  useEffect(() => { setPrevIndex(calculatePrevHelper(_activeCol)) })
  useEffect(() => { setNextIndex(calculateNextHelper(_activeCol)) })

  /**
   * Refs
   */
  const tableRef = useRef(null)

  /**
   * Helpers
   */
  const calculatePrevHelper = (currentActive) => {
    const max = props.data.header.cells.length - 1;
    const prev = (currentActive == 0) ? max : currentActive - 1;
    return (prev != props.stickyCol) ? prev : calculatePrevHelper(prev);
  }
  const calculateNextHelper = (currentActive) => {
    const max = props.data.header.cells.length - 1;
    const next = (currentActive == max) ? 0 : currentActive + 1;
    return (next != props.stickyCol) ? next : calculateNextHelper(next);
  }
  const activeColCallback = (newActiveCol) => {
    if(typeof props.activeColCallback === 'function') {
      props.activeColCallback(newActiveCol);
    }
  }

  return (
    <table ref={tableRef} className="tt-table" width="100%" cellPadding="0" cellSpacing="0">
      <TableTrimHeader 
        // from state
        isTrimmed={_isTrimmed}
        activeCol={_activeCol}
        prevIndex={_prevIndex}
        nextIndex={_nextIndex}
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
        setActiveCol={setActiveCol}
        />
      <TableTrimBody
        // from state
        isTrimmed={_isTrimmed}
        activeCol={_activeCol}
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
  isTrimmed: false,
  stickyCol: 0,
  activeCol: 1,
  autoTrimEnabled: true,
  autoTrimWidth: 640,
  showSelectControl: true,
  showPrevControl: false,
  showNextControl: false,
  nextControlHtml: 'Next',
  prevControlHtml: 'Previous',
  showActiveTitle: false,
  activeColCallback: null
}


/**
 * Prop validation
 */
TableTrim.propTypes = {
  // required
  data: PropTypes.object.isRequired,
  // optional
  isTrimmed: PropTypes.bool,
  autoTrimEnabled: PropTypes.bool,
  autoTrimWidth: PropTypes.number,
  stickyCol: PropTypes.number && validateStickyCol,
  activeCol: PropTypes.number && validateActiveCol,
  showActiveTitle: PropTypes.bool,
  showSelectControl: PropTypes.bool,
  showPrevControl: PropTypes.bool,
  showNextControl: PropTypes.bool,
  nextControlHtml: PropTypes.string,
  prevControlHtml: PropTypes.string,
  // callbacks
  activeColCallback: PropTypes.func
}

export default TableTrim;