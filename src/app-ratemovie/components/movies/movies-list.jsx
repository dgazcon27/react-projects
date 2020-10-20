import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MoviePoster} from './movie';
import {api} from '../../helpers/request';


const MovieList = () => {
	
	const [movies, setMovies] = useState([])
	const [query, setQuery] = useState({
			query: 'a',
			page: 1,
			include_adult: true,
			year: new Date().getFullYear()
		})
	const styles = {
		box: "flexbox-item movie-content",
		titleclass: "title-movie",
		boxCover: "box-cover"
	}
	
	useEffect(() => {
		const Base = api('search/movie')

		const movies_api = Base(query)

		const getMovies = async (request) => {
			try {
				const response = await request.get()
				if (response.results) {
					const results = response.results.reduce(function(result, value, index, array) {
					  if (index % 4 === 0)
					    result.push(array.slice(index, index + 4));
					  return result;
					}, []);
					setMovies(movies.concat(results))
				}
				// statements
			} catch(e) {
				// statements
				console.log(e);
			}
		}		

		getMovies(movies_api)

		return () => {
			movies_api.cancel()
		}
	}, [query])

	useEffect(() => {
		let isCancelled = false;
		const scroll = () => {
			window.onscroll = function(ev) {
			    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			        // you're at the bottom of the page
			       	let {page} = query
			       	let newQuery = {...query, page: page+1}
			       	if (!isCancelled) {
			       		setQuery(newQuery)
			       	}
			    }
			};
		}

		scroll()

		window.addEventListener('scroll', scroll)

		return () => {
			window.removeEventListener('scroll', scroll)
			isCancelled = true;
		}
		
	}, [query])

	return (
		<div>
			{ movies.length > 0 ?
				<Container className="container-box">
				{
					movies.map((row, index) => 
						<Row key={index} className="text-center">
						{
							row.map((movie,key) =>
								<Col md={6} lg={3} sm={12} key={key}>
									<Link to={`/portfolio/movie/${movie.id}`} >
										<MoviePoster
											img={movie.poster_path}
											title={movie.original_title}
											rate={movie.vote_average}
											styles={styles}
										/>
									</Link>
								</Col>
							)
						}
						</Row>
					)
				}
				</Container> :
				<Container>
				</Container>
			}
		</div>
	)
}

export default MovieList;