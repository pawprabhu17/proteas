import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About_CSA";
import News from "./components/News";
import Fixtures from "./components/Fixtures";
import Fans from "./components/Fans";
import Error from "./components/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about_csa" component={About} />
          <Route path="/news" component={News} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/fans" component={Fans} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
