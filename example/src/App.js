import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Page from './Page'

const App = () => {

  const [_isNavExpanded, setNavExpanded] = useState(false);

  const handleNavToggle = () => {
    setNavExpanded(!_isNavExpanded);
  }

  return (
    <Router>
      <Header onMenuButtonClick={handleNavToggle} />
      <Page isNavExpanded={_isNavExpanded} />
    </Router>
  )
}

export default App;
