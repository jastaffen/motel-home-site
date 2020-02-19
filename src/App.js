import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import BannerContainer from './containers/BannerContainer';
import About from './components/About';
import Home from './containers/Home';
import FixedContactContainer from './containers/FixedContactContainer';

function App() {


  return (
    <Router>
      <div>
        <BannerContainer />
        <div>
          <div className="fixed-contact-container">
            <FixedContactContainer />
          </div>

            <Switch>
              <Redirect push from="/" exact to="/home" />
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
            
        </div>
      </div>
    </Router>
  );
}

export default App;
