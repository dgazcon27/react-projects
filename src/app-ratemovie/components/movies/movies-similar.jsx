import React, {useState, useEffect} from 'react';
import {api} from '../../helpers/request'


const MoviesSimilar = ({movie_id}) => {
	const [movies, setMovies] = useState([])

	const Base = api(`movie/${movie_id}/similar`);
	useEffect(() => {
		
	})
	return (

	);
}

export default MoviesSimilar;