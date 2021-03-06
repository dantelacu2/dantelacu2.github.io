import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

// reused components
import NavBar from './components/NavBar/NavBar';

// pages
import Masthead from './pages/Masthead/Masthead';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ValideaCapital from './pages/ValideaCapital/ValideaCapital';
import ChallengeCapital from './pages/ChallengeCapital/ChallengeCapital';
import MarinRestaurants from './pages/MarinRestaurants/MarinRestaurants';


function App() {
  return (
    <div style={{height: "100%"}}>
      <NavBar/>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Masthead/>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/validea-capital">
              <ValideaCapital/>
            </Route>
            <Route exact path="/challenge-capital">
              <ChallengeCapital/>
            </Route>
            <Route exact path="/marin-restaurants">
              <MarinRestaurants/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
