import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const ActiveCol = () => {
  /**
   * State
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_activeCol, setActiveCol] = useState(1)
  const _stickyCol = 0;

  /**
   * Methods
   */
  const handleIsTrimmed = () => setIsTrimmed(!_isTrimmed)
  const handleActiveCol = (e) => { setActiveCol(e.target.value) }
  const handleIsTrimmedCallback = (newIsTrimmed) => { setIsTrimmed(newIsTrimmed) }

  const renderActiveColOptions = () => {
    return data.header.cells.map((cell, index) => {
      return (index === _stickyCol)
        ? <option key={`activeColSelect-${index}`} value={index} disabled>{index}</option>
        : <option key={`activeColSelect-${index}`} value={index}>{index}</option>
    });
  }

  return (
    <section>      
      <h1>Set Active Column</h1>
      <p>
        In addition to using the built-in controls provided in TableTrim, you can also set the active column for the trimmed table by updating the <code>activeCol</code> prop. The example below sets the <code>activeCol</code> prop based on the value in the dropdown.
      </p>

      <p>
        Note that if you choose to update the <code>activeCol</code> prop yourself:
      </p>
      <ul>
        <li>
          The value of <code>activeCol</code> must be between <code>0</code> and <code>columns.length - 1</code>
        </li>
        <li>
          The value <code>activeCol</code> and <code>stickyCol</code> cannot be set to the same index.
        </li>
        <li>
          Setting the <code>activeCol</code> prop will override the value of <code>activeCol</code> in TableTrim's internal state. This means that if you are using both the built-in controls and the <code>activeCol</code> prop, the prop will take precedence. Also, if you are using both the controls and the prop, consider using the <Link to="/active-col-callback">Active Column Callback</Link> to keep the two in sync.
        </li>
      </ul>

      <h2>Example</h2>
      <div id="example-container">
        <div id="example-options">
          <div className="option">
            <button className="option-toggle" onClick={handleIsTrimmed}>
              <span className={ (_isTrimmed) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">isTrimmed</span>
            </button>
          </div>
          <div className="option">
            <select className="option-select" id="activeColSelect" selected={_activeCol} onChange={handleActiveCol}>
              {renderActiveColOptions()}
            </select>
            <label htmlFor="activeColSelect" className="option-title">activeCol</label>
          </div>
        </div>

        <div id="example-table">
          <TableTrim 
            data={data}
            stickyCol={_stickyCol} 
            isTrimmed={_isTrimmed}
            activeCol={_activeCol}
            showActiveTitle={true}
            showSelectControl={false}
            isTrimmedCallback={handleIsTrimmedCallback}
            />
        </div>
      </div>
    </section>
  );
}

export default ActiveCol;
