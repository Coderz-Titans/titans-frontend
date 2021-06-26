import React, { Component } from 'react';
import About from './components/AboutUs';
import Main from './components/Main';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

