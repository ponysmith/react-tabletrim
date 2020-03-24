import React, { useState } from 'react'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const ActiveColCallback = () => {
  /**
   * State
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_activeCol, setActiveCol] = useState(1)

  /**
   * Methods
   */
  const handleIsTrimmed = () => setIsTrimmed(!_isTrimmed)
  const handleActiveColCallback = (col) => { setActiveCol(col) }
  const handleIsTrimmedCallback = (newIsTrimmed) => { setIsTrimmed(newIsTrimmed) }

  return (
    <section>      
      <h1>Active Column Callback</h1>
      <p>
        TableTrim has an <code>activeColCallack</code> prop which allows you to hook into any updates made to the internal state for <code>activeCol</code>. This can be especially useful if you have some other part of your application that needs to respond to the active column.
      </p>

      <h2>Current Active Column</h2>
      <p>
        Trim the table below and then update the active column using the built-in controls. The value of <code>activeCol</code> below will update via the <code>activeColCallback</code>.
      </p>

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
            <span className="option-raw">{_activeCol}</span>
            <span className="option-title">activeCol</span>
          </div>
        </div>

        <div id="example-table">
          <TableTrim 
            data={data} 
            isTrimmed={_isTrimmed}
            activeColCallback={handleActiveColCallback}
            isTrimmedCallback={handleIsTrimmedCallback}
            />
        </div>
      </div>
    </section>
  );
}

export default ActiveColCallback;
