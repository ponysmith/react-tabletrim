import React, { useState } from 'react'

import data from '../data'
import TableTrim from 'react-tabletrim'

export const CustomPrevNext = () => {
  /**
   * State
   */
  const [_isTrimmed, setIsTrimmed] = useState(false)
  const [_useCustomPrev, setUseCustomPrev] = useState(false)
  const [_useCustomNext, setUseCustomNext] = useState(false)

  /**
   * Methods
   */
  const handleIsTrimmed = () => setIsTrimmed(!_isTrimmed)
  const handleCustomPrev = () => setUseCustomPrev(!_useCustomPrev)
  const handleCustomNext = () => setUseCustomNext(!_useCustomNext)

  return (
    <section>      
      <h1>Custom Prev / Next buttons</h1>
      <p>
        By default, TableTrim renders a <code>select</code> element to choose the active column. However, you can customize TableTrim to render Previous and Next buttons as well / instead. To render the buttons, simply set the <code>showPrevControl</code> and/or <code>showNextControl</code> props to <code>true</code>. This will render the default previous and next <code>button</code> elements.
      </p>

      <p>
        In addition to rendering the Previous and Next controls, you can override the default rendering with a custom component. This is helpful if you want to customize the look and feel of the controls beyond basic style changes using the included CSS classes. To override the rendering of the controls, simply pass a custom React component to the appropriate TableTrim prop.
      </p>
      
      <pre>
        &lt;TableTrim<br />
          &nbsp;&nbsp;showPrevControl=&#123;true&#125;<br />
          &nbsp;&nbsp;customPrevControl=&#123; () => (&lt;span&gt;Custom Prev Control&lt;/span&gt;) &#125;<br />
          &nbsp;&nbsp;/&gt;
      </pre>

      <p>
        Your custom component will be rendered as HTML inside the actual Prev/Next control. This means that there is no need to reproduce or override the event handlers for the controls. Everything will continue to work as usual, just with your new, fancy component.
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
            <button className="option-toggle" onClick={handleCustomPrev}>
              <span className={ (_useCustomPrev) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">customPrevControl</span>
            </button>
          </div>
          <div className="option">
            <button className="option-toggle" onClick={handleCustomNext}>
              <span className={ (_useCustomNext) ? "fas fa-toggle-on" : "fas fa-toggle-off" }></span>
              <span className="option-title">customNextControl</span>
            </button>
          </div>
        </div>

        <div id="example-table" className="example-custom-prevnext">
          <TableTrim 
            data={data} 
            isTrimmed={_isTrimmed}
            showSelectControl={false}
            showPrevControl={true}
            showNextControl={true}
            customPrevControl={ (_useCustomPrev) ? () => (<i className="fas fa-caret-square-left custom-prev"></i>) : undefined }
            customNextControl={ (_useCustomNext) ? () => (<i className="fas fa-caret-square-right custom-next"></i>) : undefined }
            />
        </div>
      </div>
    </section>
  );
}

export default CustomPrevNext;
