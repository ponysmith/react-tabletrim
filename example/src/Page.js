import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './page.css'
import Nav from './Nav'
import Main from './pages/Main'
import Basic from './pages/Basic'
import ActiveCol from './pages/ActiveCol'
import ActiveColCallback from './pages/ActiveColCallback'
import CustomPrevNext from './pages/CustomPrevNext'

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
          <Route exact path="/basic" component={Basic} />
          <Route exact path="/active-col" component={ActiveCol} />
          <Route exact path="/active-col-callback" component={ActiveColCallback} />
          <Route exact path="/custom-prevnext" component={CustomPrevNext} />
        </Switch>
        </main>
      </div>
    </div>
  )
}

export default Page