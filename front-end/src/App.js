import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/common/header/Header.jsx';

import Home from './components/home/Home.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          {/*<Route path='/about' exact component={About} />
          <Route path='/program' exact component={Program} />
          <Route path='/learn' exact component={Learn} />
          <Route path='/team' exact component={Team} />
          <Route path='/contact' exact component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App