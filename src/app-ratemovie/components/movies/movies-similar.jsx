import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import {api} from '../../helpers/request'
import {MovieImage} from './movie';


const MoviesSimilar = ({id}) => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		const Base = api(`movie/${id}/similar`);
		const moviesSimilar = Base({})
		const getSimilar = async () => {
			try {
				const response = await moviesSimilar.get()
				if (response.results)
					setMovies(response.results.slice(0,4))
				// statements
			} catch(e) {
				// statements
				console.log(e);
			}
		}

		getSimilar()

		return () => {
			moviesSimilar.cancel()
		}

	}, [id])
	return (
		<div>
			{ movies ?
				<Row>
					{movies.map((movie, index) => 
						<Col lg={6} md={6} sm={6} key={index} >
							<Link to={`/portfolio/movie/${movie.id}`}>
								<MovieImage
									img={movie.poster_path}
									styles="similar-box"
								/>
							</Link>

						</Col>
					)}
				</Row> : ""

			}
		</div>
	);
}

export default MoviesSimilar;