import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SwipeMatch from "./components/SwipeMatch";
import LocateEvents from "./components/LocateEvents";
import InstantMessaging from "./components/InstantMessaging";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={SwipeMatch} />
        <Route path="/swipe" component={SwipeMatch} />
        <Route path="/events" component={LocateEvents} />
        <Route path="/messages" component={InstantMessaging} />
      </Switch>
    </div>
  </Router>
);

export default App;
