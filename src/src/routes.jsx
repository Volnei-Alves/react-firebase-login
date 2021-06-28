import React from "react";
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

import { AuthProvider } from "./authenticated/authContext";
import PrivateRoute from "./authenticated/privateRoutes";

import Login from "./authenticated/";
import Dashboard from "./views/Dashboard";

function Routes() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path={"/"} exact component={Login} />
					<PrivateRoute path={"/dashboard"} component={Dashboard} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default Routes;
