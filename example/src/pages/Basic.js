import React, { useState } from 'react'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const Basic = () => {
  /**
   * State
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_showSelectControl, setShowSelectControl] = useState(true)
  const [_showActiveTitle, setShowActiveTitle] = useState(false)
  const [_showPrevControl, setShowPrevControl] = useState(false)
  const [_showNextControl, setShowNextControl] = useState(false)

  /**
   * Methods
   */
  const handleIsTrimmed = () => setIsTrimmed(!_isTrimmed)
  const handleShowSelectControl = () => setShowSelectControl(!_showSelectControl)
  const handleShowActiveTitle = () => setShowActiveTitle(!_showActiveTitle)
  const handleShowPrevControl = () => setShowPrevControl(!_showPrevControl)
  const handleShowNextControl = () => setShowNextControl(!_showNextControl)
  const handleIsTrimmedCallback = (newIsTrimmed) => { setIsTrimmed(newIsTrimmed) }

  return (
    <section>      
      <h1>Basic Example</h1>
      <p>
        The table below is a basic implementation of <code>react-tabletrim</code>. To get a better idea of how you can customize <strong>TableTrim</strong>, feel free to play around with the params listed below.
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
            <button className="option-toggle" onClick={handleShowSelectControl}>
              <span className={ (_showSelectControl) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">showSelectControl</span>
            </button>
          </div>
          <div className="option">
            <button className="option-toggle" onClick={handleShowActiveTitle}>
              <span className={ (_showActiveTitle) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">showActiveTitle</span>
            </button>
          </div>
          <div className="option">
            <button className="option-toggle" onClick={handleShowPrevControl}>
              <span className={ (_showPrevControl) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">showPrevControl</span>
            </button>
          </div>
          <div className="option">
            <button className="option-toggle" onClick={handleShowNextControl}>
              <span className={ (_showNextControl) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">showNextControl</span>
            </button>
          </div>
        </div>

        <div id="example-table">
          <TableTrim 
            data={data} 
            isTrimmed={_isTrimmed}
            showSelectControl={_showSelectControl}
            showActiveTitle={_showActiveTitle}
            showPrevControl={_showPrevControl}
            showNextControl={_showNextControl}
            isTrimmedCallback={handleIsTrimmedCallback}
            />
        </div>
      </div>
    </section>
  );
}

export default Basic;
