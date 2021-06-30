import React from "react";
// import "./App.css";
import "./profile.css";
import "./category.css";
import "./aboutUs.css";
import "./main.css";
import "./news.css";
import "./logout.css";
import "./login.css";

import Home from "./components/Home";
import Category from "./components/Category";
import Profile from "./components/Profile";
import News from "./components/News";
import About from "./components/About";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
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
          {/* 
          <Route path="/about">
            <Login />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
