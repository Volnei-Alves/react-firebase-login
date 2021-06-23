import React, { useState, useEffect } from "react";
import api from "./Api";

function App() {
	const [title, setTitle] = useState();

	async function handle() {
		const testapi = await api.get("/");
		console.log(testapi);
		setTitle(testapi.data.mensage);
	}
	useEffect(() => {
		handle();
	}, []);
	return (
		<div>
			<h1>{title} </h1>
		</div>
	);
}

export default App;
