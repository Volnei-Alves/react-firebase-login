import axios, { create } from 'axios';

const api = create({
	baseURL: process.env.BASE_URL_API,

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
