import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Flashcard from "./pages/flashcard";
import Collection from './pages/collection'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/collection/:id" render={(props) => <Collection {...props} /> } exact/>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
