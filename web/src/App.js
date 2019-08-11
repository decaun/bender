import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from './components/Navigation'
import swipeMatch from './components/swipeMatch'
import locateEvents from './components/locateEvents'
import instantMessaging from './components/instantMessaging'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation/>
				<Switch>
					<Route path="/" exact component={swipeMatch} />
          <Route path="/swipe" component={swipeMatch} />
					<Route path="/events" component={locateEvents} />
					<Route path="/messages" component={instantMessaging} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
