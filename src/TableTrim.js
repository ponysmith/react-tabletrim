import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import TableTrimHeader from './TableTrimHeader'
import TableTrimBody from './TableTrimBody'
import { validateActiveCol, validateStickyCol, validateReactComponent } from './TableTrimValidators'

const TableTrim = (props) => {
  /**
   * Refs
   */
  const tableRef = useRef(null)

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
  useEffect(() => { isTrimmedCallback(_isTrimmed) }, [_isTrimmed])
  useEffect(() => { setActiveCol(props.activeCol) }, [props.activeCol])
  useEffect(() => { activeColCallback(_activeCol) }, [_activeCol])
  useEffect(() => { setPrevIndex(calculatePrevHelper(_activeCol)) })
  useEffect(() => { setNextIndex(calculateNextHelper(_activeCol)) })
  useEffect(() => { handleResize() }, [])


  /**
   * Window resize listener
   */
  let timeout = null
  window.addEventListener('resize', () => { 
    clearInterval(timeout); 
    timeout = setTimeout(handleResize, 200) 
  });
  const handleResize = () => {
    if(props.autoTrimEnabled === true & tableRef.current !== null) {
      if(tableRef.current.offsetWidth < props.autoTrimWidth && _isTrimmed === false) {
        setIsTrimmed(true)
      }
      if(tableRef.current.offsetWidth >= props.autoTrimWidth && _isTrimmed === true) {
        setIsTrimmed(false)
      }
    }
  }


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
  const isTrimmedCallback = (newIsTrimmed) => {
    if(typeof props.isTrimmedCallback === 'function') {
      props.isTrimmedCallback(newIsTrimmed);
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
        customPrevControl={props.customPrevControl}
        customNextControl={props.customNextControl}
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
  showActiveTitle: false,
  activeColCallback: null,
  isTrimmedCallback: null
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
  customPrevControl: PropTypes.func,
  customNextControl: PropTypes.func,
  // callbacks
  activeColCallback: PropTypes.func,
  isTrimmedCallback: PropTypes.func
}

export default TableTrim;