import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./authContext";
import jwt from "jsonwebtoken";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { token } = useContext(AuthContext);

	const tokenDecoded = jwt.decode(token);
	const timeStamp = new Date().getTime();

	const validaToken = () => {
		if (token) {
			const time = timeStamp.toString().substr(0, 10);
			if (time > tokenDecoded.exp) {
				localStorage.removeItem("token");
				return false;
			} else {
				return true;
			}
		}
	};

	return (
		<Route
			{...rest}
			render={(props) =>
				validaToken() ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;
