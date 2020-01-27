import React from 'react'
import classNames from 'classnames'

export const TableTrimBody = (props) => {

  /**
   * Render methods
   */
  const renderRows = () => {
    return props.rows.map( (row, rowIndex) => {
      return (props.isTrimmed)
        ? renderRowTrimmed(row, rowIndex)
        : renderRowUntrimmed(row, rowIndex)
    });
  }

  const renderRowTrimmed = (row, rowIndex) => {
    return (
      <tr className="tt-tr" key={`tt-body-row-${rowIndex}`}>
        { renderCell(row.cells[props.stickyCol], props.stickyCol, rowIndex) } 
        { renderCell(row.cells[props.activeCol], props.activeCol, rowIndex) }
      </tr>
    )
  }

  const renderRowUntrimmed = (row, rowIndex) => {
    return (
      <tr className="tt-tr" key={`tt-body-row-${rowIndex}`}>
        { row.cells.map( (cell, colIndex) => {
          return renderCell(cell, colIndex, rowIndex)
        })}
      </tr>
    )
  }

  const renderCell = (cell, colIndex, rowIndex) => {
    const isActiveCol = (colIndex == props.activeCol);
    const isStickyCol = (colIndex == props.stickyCol);
    const classnames = classNames({
      'tt-th': isStickyCol,
      'tt-td': !isStickyCol,
      'tt-sticky': isStickyCol,
      'tt-active': isActiveCol
    })
    return ( isStickyCol )
      ? (<th className={classnames} key={`tt-body-${rowIndex}-${colIndex}`}>{cell.content}</th>)
      : (<td className={classnames} key={`tt-body-${rowIndex}-${colIndex}`}>{cell.content}</td>) 
  }


  /**
   * Render Component
   */
  return (
    <tbody className="tt-body">
      { renderRows() }
    </tbody>
  )
}

TableTrimBody.propTypes = {

}

export default TableTrimBody;