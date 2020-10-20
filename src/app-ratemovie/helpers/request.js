const axios = require('axios');
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "5dc380a9f835bec65fd733732974a1cf";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const parseError = e => {
	const error = e.toString().replace("Error: ", "")
	let response = null
	switch (error) {
		case "Request failed with status code 404":
			response = 404
		break;
		case "Network Error":
			response = 34
		break;
		default:
			response = 404
		break;
	}
	return(response)
}

export const api = resource => (params, method = 'get') =>{
	const url = `${API_URL}/${resource}?api_key=${API_KEY}`
	return ({
		get: () => axios({
			method: 'get',
			params: params,
			url: url
		},{
			cancelToken: source.token
		})
		.then(x => x.data)
		.catch(e => parseError(e)),
		post: (data) => axios({
			method: method,
			data: data,
			params: params,
			url: url
		})
		.then(x => x.data)
		.catch(e => parseError(e)),
		cancel: () => source.cancel
	})
}

