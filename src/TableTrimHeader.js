import React from 'react'
import classNames from 'classnames'

export const TableTrimHeader = (props) => {

  /**
   * Render methods
   */
  const renderHeaderTrimmed = () => {
    return (
      <tr className="tt-tr">
        { renderCell(props.cells[props.stickyCol], props.stickyCol) }
        { renderCell(props.cells[props.activeCol], props.activeCol) }
      </tr>
    )
  }

  const renderHeaderUntrimmed = () => {
    return (
      <tr className="tt-tr">
        { 
          props.cells.map( (cell, colIndex) => {
            return renderCell(cell, colIndex)
          })
        }
      </tr>
    );
  }

  const renderCell = (cell, colIndex) => {
    const isActiveCol = (colIndex == props.activeCol);
    const isStickyCol = (colIndex == props.stickyCol);
    const classnames = classNames({
      'tt-th': true,
      'tt-sticky': isStickyCol,
      'tt-active': isActiveCol
    })
    return (
      <th className={classnames} key={`tt-header-${colIndex}`}>
        { (!props.isTrimmed || isStickyCol || props.showActiveTitle) && renderTitle(cell) }
        { (props.isTrimmed && isActiveCol && props.showPrevControl) && renderPrevControl() }
        { (props.isTrimmed && isActiveCol && props.showNextControl) && renderNextControl() }
        { (props.isTrimmed && isActiveCol && props.showSelectControl) && renderSelectControl(props.cells) }
      </th>
    ) 
  }

  const renderTitle = (cell) => {
    return (<span className="tt-title">{ cell.content }</span>)
  }

  const renderPrevControl = () => {
    return (<button className="tt-prev" onClick={ () => props.setActiveCol(props.prevIndex) }>{ props.prevControlHtml }</button>)
  }

  const renderNextControl = () => {
    return (<button className="tt-next" onClick={ () => props.setActiveCol(props.nextIndex) }>{ props.nextControlHtml }</button>)
  }

  const renderSelectControl = (cells) => {
    return (
      <select className="tt-select" value={props.activeCol} onChange={ handleSelectChange }>
        { renderSelectOptions(cells) }
      </select>
    )
  }

  const renderSelectOptions = (cells) => {
    return cells.map( (cell, index) => {
      return (index != props.stickyCol)
        ? ( <option key={index} value={index}>{cell.content}</option> )
        : null
    });
  }


  /**
   * Event handlers
   */
  const handleSelectChange = (e) => {
    props.setActiveCol(e.target.value);
  }


  /**
   * Render Component
   */
  return (
    <thead className="tt-head">
      { props.isTrimmed && renderHeaderTrimmed() }
      { !props.isTrimmed && renderHeaderUntrimmed() }
    </thead>
  )
}

export default TableTrimHeader;