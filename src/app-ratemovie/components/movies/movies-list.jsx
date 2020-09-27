import React, {useState, useEffect} from 'react';
import MoviePoster from './movie'
import {api} from '../../helpers/request'
import {
  Link
} from "react-router-dom";

const MovieList = ({query='a'}) => {
	const [movies, setMovies] = useState([])
	const Base = api('search/movie')
	const movies_api = Base({
		query: query,
		page: 1,
		include_adult: false
	})

	useEffect(() => {
		movies_api.get().then(response => {
			setMovies(response.results)
		})
	}, [])

	return (
		movies.map((movie,key) => 
			<Link to={`/portfolio/movie/${movie.id}`} key={key}>
				<MoviePoster
					img={movie.poster_path}
					title={movie.original_title}
					rate={movie.vote_average}
				/>
			</Link>
		)
	)
}

export default MovieList;