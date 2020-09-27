const axios = require('axios')
const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "5dc380a9f835bec65fd733732974a1cf"

export const api = resource => (params, method = 'get') =>{
	const url = `${API_URL}/${resource}?api_key=${API_KEY}`
	return ({
		get: () => axios({
			method: 'get',
			params: params,
			url: url
		})
		.then(x => x.data)
		.catch(e => e),
		post: (data) => axios({
			method: method,
			data: data,
			params: params,
			url: url
		})
		.then(x => x.data)
		.catch(e => e)
	})
}

