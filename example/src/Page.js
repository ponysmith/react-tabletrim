import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './page.css'
import Nav from './Nav'
import Main from './pages/Main'
import Default from './pages/Default'
import Columns from './pages/Columns'
import Controls from './pages/Controls'

export const Page = ({ isNavExpanded }) => {
  return (
    <div id="page-container">
      <div id="page-nav" className={ (isNavExpanded) ? "nav-expanded" : "" }>
        <Nav isNavExpanded={isNavExpanded} />
      </div>
      <div id="page-content" className={ (isNavExpanded) ? "nav-expanded" : "" }>
        <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/default" component={Default} />
          <Route exact path="/columns" component={Columns} />
          <Route exact path="/controls" component={Controls} />
        </Switch>
        </main>
      </div>
    </div>
  )
}

export default Page