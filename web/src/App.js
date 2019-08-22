import React from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import SwipeMatch from "./routes/SwipeMatch/SwipeMatch";
import LocateEvents from "./routes/LocateEvents/LocateEvents";
import InstantMessaging from "./routes/InstantMessaging/InstantMessaging";
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
