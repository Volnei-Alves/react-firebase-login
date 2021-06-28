import React, { useState } from "react";
import jwt from "jsonwebtoken";

import { useHistory } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

import api from "../Api";

import logo from "../assets/logo.png";

function Auth() {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [bgDisabled, setBgDisabled] = useState(true);
	const [errors, setErros] = useState("");

	/* --------------------------------------------------------------------- */

	// verify email e password
	if (email && password) {
		if (bgDisabled) {
			setBgDisabled(false);
			setErros("");
		}
	}

	if (localStorage.getItem("token")) history.push("/home");

	/* -------------------------------------------------------------------- */

	function loginUser(e) {
		e.preventDefault();

		setLoading(true);

		api
			.post("/login", {
				email: email,
				password: password,
			})
			.then((response) => {
				const tokenDecoded = jwt.decode(
					response.data.user.stsTokenManager.accessToken
				);
				localStorage.setItem("handle", JSON.stringify(tokenDecoded.handle));

				localStorage.setItem(
					"token",
					response.data.user.stsTokenManager.accessToken
				);
				//history.push('/home')
				window.location.reload();
			})
			.catch((error) => {
				if (error) {
					setEmail("");
					setPassword("");
					setLoading(false);
					setErros("Email ou senha Invalidos!!");
				}
			});
	}

	/* ---------------------------------------------------------------------------- */

	const LoadingRefresh = () => (
		<div className="flex justify-center items-center h-screen  animate-spin">
			<FiLoader size={34} className=" text-6x1 text-blue-500" />
		</div>
	);

	return (
		<>
			{loading ? (
				<LoadingRefresh />
			) : (
				<section className="flex  items-center justify-center h-screen">
					<div>
						<div className="mb-10 mr-2">
							<img src={logo} width="150" alt="" />
						</div>

						<div className="w-full max-w-xs">
							<form
								className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
								onSubmit={loginUser}
							>
								<div className="mb-4">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<div className="mb-6">
									<label
										className="block text-gray-700 text-sm font-bold mb-2"
										htmlFor="password"
									>
										Senha
									</label>
									<input
										className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									{errors ? (
										<p className="text-red-500 text-sm italic">{errors}</p>
									) : (
										""
									)}
								</div>
								<div className="flex items-center justify-between">
									{bgDisabled ? (
										<button
											className=" bg-blue-500 opacity-25 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
											disabled
										>
											Entrar
										</button>
									) : (
										<button
											className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
											type="submit"
										>
											{loading ? (
												<FiLoader
													size={18}
													className="animate-spin h-5 w-5 mr-3 "
												/>
											) : (
												""
											)}
											Entrar
										</button>
									)}

									<a
										className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
										href="#"
									>
										Recupera Senha?
									</a>
								</div>
							</form>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default Auth;
