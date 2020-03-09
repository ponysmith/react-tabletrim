import React, { useState, useEffect } from 'react'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const Controls = () => {
  /**
   * State hooks
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_showSelectControl, setShowSelectControl] = useState(true)
  const [_showPrevControl, setShowPrevControl] = useState(false)
  const [_showNextControl, setShowNextControl] = useState(false)
  const [_showActiveTitle, setShowActiveTitle] = useState(false)

  /**
   * Effect hooks
   */
  useEffect(() => { setIsTrimmed(_isTrimmed) })
  useEffect(() => { setShowSelectControl(_showSelectControl) })
  useEffect(() => { setShowPrevControl(_showPrevControl) })
  useEffect(() => { setShowNextControl(_showNextControl) })
  useEffect(() => { setShowActiveTitle(_showActiveTitle) })

  /**
   * Methods
   */
  const handleIsTrimmed = (e) => setIsTrimmed(e.target.checked);
  const handleShowSelectControl = (e) => setShowSelectControl(e.target.checked)
  const handleShowPrevControl = (e) => setShowPrevControl(e.target.checked)
  const handleShowNextControl = (e) => setShowNextControl(e.target.checked)
  const handleShowActiveTitle = (e) => setShowActiveTitle(e.target.checked)

  return (
    <section>
      <table className="sandbox-options" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th width="150">Option</th>
            <th width="50">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><code><label htmlFor="option-isTrimmed">isTrimmed</label></code></th>
            <td><input type="checkbox" checked={_isTrimmed} id="option-isTrimmed" onChange={ handleIsTrimmed } /></td>
          </tr>
          <tr>
            <th><code><label htmlFor="option-showSelectControl">showSelectControl</label></code></th>
            <td><input type="checkbox" checked={_showSelectControl} id="option-showSelectControl" onChange={ handleShowSelectControl } /></td>
          </tr>
          <tr>
            <th><code><label htmlFor="option-showPrevControl">showPrevControl</label></code></th>
            <td><input type="checkbox" checked={_showPrevControl} id="option-showPrevControl" onChange={ handleShowPrevControl } /></td>
          </tr>
          <tr>
            <th><code><label htmlFor="option-showNextControl">showNextControl</label></code></th>
            <td><input type="checkbox" checked={_showNextControl} id="option-showNextControl" onChange={ handleShowNextControl } /></td>
          </tr>
          <tr>
            <th><code><label htmlFor="option-showActiveTitle">showActiveTitle</label></code></th>
            <td><input type="checkbox" checked={_showActiveTitle} id="option-showActiveTitle" onChange={ handleShowActiveTitle } /></td>
          </tr>
        </tbody>
      </table>

      <h2>Custom controls</h2>
      <TableTrim
        data={data}
        isTrimmed={_isTrimmed}
        showSelectControl={_showSelectControl}
        showPrevControl={_showPrevControl}
        showNextControl={_showNextControl}
        showActiveTitle={_showActiveTitle}
        />
    </section>
  );
}

export default Controls;
