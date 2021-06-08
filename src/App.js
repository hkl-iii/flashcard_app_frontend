import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/home";
import Flashcard from "./pages/flashcard";

function App() {

	return (
		<Router>
			<div>
				<nav>
					<ul style={{}}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/flashcard">FlashCard</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/flashcard">
						<Flashcard />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
