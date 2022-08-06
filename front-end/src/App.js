import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/common/header/Header.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/program' component={Program} />
          <Route exact path='/learn' component={Learn} />
          <Route exact path='/team' component={Team} />
  <Route exact path='/contact' component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App