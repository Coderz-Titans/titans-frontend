import React, { Component } from "react";
import Home from "./components/Home";
import Category from "./components/Category";
import Profile from "./components/Profile";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";

export class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/category">
              <Category />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
