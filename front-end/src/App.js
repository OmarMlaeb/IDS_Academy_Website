import React from 'react';

import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Program from './components/Program/program';
import Team from './components/Team/team';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Program/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
