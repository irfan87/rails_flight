import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
	render(
		<Router>
			<Route path="/" component={App} />
		</Router>,
		document.body.appendChild(document.createElement("div"))
	);
});
