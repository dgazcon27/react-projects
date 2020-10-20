import React, {useEffect,useState} from 'react'
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {MovieImage} from './movie';
import {api} from '../../helpers/request'
import MoviesSimilar from './movies-similar';
import {SuccessAlert, ErrorAlert} from '../notifications/alerts';


const MovieDetail = () => {
	let { id } = useParams();
	const [moviesSimilar, setMoviesSimilar] = useState(null)
	const [movie, setMovie] = useState(null)
	const [isClicked, setClick] = useState(false)
	const [isDisable, setDisable] = useState(false)
	const styles = {
		box: "",
		titleclass: "text-movie-detail",
		boxCover: ""
	}

	useEffect(() => {
		const Base = api(`movie/${id}`)
		const moviesApi = Base({})
		const getMovies = async () => {
			try {
				const response = await moviesApi.get()
				if (response) {
					setMovie(response)
				}
			} catch(e) {
				console.log(e);
			}

		}

		getMovies()
		setMoviesSimilar(id)

		return () => {
			moviesApi.cancel()
		}

	}, [id])

	const handlerRate = async () => {
		const {value:range} = await Swal.fire({
		  title: '¿Cual es tu valoracion sobre esta pelicula?',
		  icon: 'question',
		  input: 'range',
		  inputAttributes: {
		    min: 0,
		    max: 10,
		    step: 1
		  },
		  inputValue: 5
		})
		if (range) {
			// pedir sesion de invitado
			const BaseAuth = api('authentication/guest_session/new')
			const auth = BaseAuth({})
			setDisable(true)
			try {
				const res = await auth.get()
				if (res) {
					const BaseRate = api(`movie/${id}/rating`)
					const rate = BaseRate({
						guest_session_id: res.guest_session_id
					}, 'post')

					const rateRequest = await rate.post({value: range})
					console.log(rateRequest)
					if (rateRequest) {
						setClick(true)
						parseInt(rateRequest, 10) === 34 ? 
							ErrorAlert('Oops...', 'Algo ha salido mal') :  
							SuccessAlert("Valoracion exitosa")
					}
				}
			} catch(e) {
				ErrorAlert('Oops...', 'Algo ha salido mal')
				console.log(e);
			}
		}
		
	}

	return (
		<Container className="container-box movie-detail">
			{ movie ? 
				<Row>
					<Col className="center" md={4} lg={4} sm={12}>
						<MovieImage
							img={movie.poster_path}
							title={movie.original_title}
							styles=""

						/>
						<button
						className="rate-button"
						onClick={handlerRate} 
						hidden={isClicked} 
						disabled={isDisable}>
							Valorar
						</button>

					</Col>
					<Col className="text-movie-detail" md={4} lg={4} sm={12}>
						<h1>{movie.original_title}</h1>
						<h3>{movie.release_date.split('-')[0]} - {movie.genres[0].name}</h3>
						<h2>Synopsis</h2>
						<p>{movie.overview}</p>
					</Col>
					<Col className="similar-container" md={4} lg={4} sm={12}>
						<h5>
							Peliculas Similares
						</h5>
						{moviesSimilar ? <MoviesSimilar id={moviesSimilar}/> : "Loading..."}
					</Col>
				</Row>
				: "Loading..."

			}
		</Container>
	);
}

export default MovieDetail;