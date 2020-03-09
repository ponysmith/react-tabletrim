import React, { useState, useEffect } from 'react'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const Columns = () => {
  /**
   * State hooks
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_stickyCol, setStickyCol] = useState(0)
  const [_activeCol, setActiveCol] = useState(1)

  /**
   * Effect hooks
   */
  useEffect(() => { setIsTrimmed(_isTrimmed) })
  useEffect(() => { setStickyCol(_stickyCol) })
  useEffect(() => { setActiveCol(_activeCol) })

  /**
   * Methods
   */
  const handleIsTrimmed = (e) => setIsTrimmed(e.target.checked);
  const handleStickyCol = (e) => setStickyCol(parseInt(e.target.value, 10))
  const handleActiveCol = (e) => setActiveCol(parseInt(e.target.value, 10))

  /**
   * Render Methods
   */
  const renderOptions = (type) => {
    const colCount = data.header.cells.length;
    
    let options = [];
    let disabled, key;
    for(let i = 0; i < colCount; i++) {
      key = `option-${type}-${i}`;
      disabled = (type === 'sticky' && _activeCol === i) || (type === 'active' && _stickyCol === i)
      options.push(<option key={key} disabled={disabled} value={i}>{i}</option>)
    }
    return options;
  }

  return (
    <React.Fragment>
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
            <th><code><label htmlFor="option-stickyCol">stickyCol</label></code></th>
            <td><select value={_stickyCol} onChange={ handleStickyCol }>{ renderOptions('sticky') }</select></td>
          </tr>
          <tr>
            <th><code><label htmlFor="option-activeCol">activeCol</label></code></th>
            <td><select value={_activeCol} onChange={ handleActiveCol }>{ renderOptions('active') }</select></td>
          </tr>
        </tbody>
      </table>

      <h1>Custom column settings</h1>
      <TableTrim 
        data={data} 
        isTrimmed={_isTrimmed}
        activeCol={_activeCol} 
        stickyCol={_stickyCol} 
        showSelectControl={false}
        showActiveTitle={true}
        />
    </React.Fragment>
  );
}

export default Columns;
