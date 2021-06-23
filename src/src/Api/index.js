import axios, { create } from 'axios';

const api = create({
	baseURL: 'http://localhost:5001/react-firebase-login-7ba06/us-central1/api',
});

api.defaults.headers.common = {
	...axios.defaults.headers.common,
	Authorization: `Bearer ${localStorage.getItem("token")}`,
	"Access-Control-Allow-Origin": "*",
	"Content-Type": "application/json",
	"Access-Control-Allow-Headers":
		"Origin, X-Requested-With, Content-Type, Accept, Authorization",
}


export default api
