import React, {useEffect,useState} from 'react'
import Swal from 'sweetalert2';
import MoviePoster from './movie';
import {api} from '../../helpers/request'
import {getData, storeData} from '../../helpers/localStorage';
import {validateDate} from '../../helpers/helpers';
import {
  useParams
} from "react-router-dom";


const MovieDetail = () => {
	let { id } = useParams();
	const sessionGuest = getData('session') || null
	const Base = api(`movie/${id}`)
	const moviesApi = Base({})

	const [movie, setMovie] = useState(null)
	const [session, setSession] = useState(sessionGuest)
	const [isClicked, setClick] = useState(false)
	useEffect(() => {
		moviesApi.get()
		.then(x => setMovie(x))
	}, [])

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
			new Promise((resolve, reject) => {
				if (!session || !validateDate(session.expiret_at)) {
					auth.get()
					.then(res => {
						if (res.success) {
							storeData('session', res)
							resolve(res)
						} else {
							reject()
						}
					})
				} else
					resolve(session)
			})
			.then(res => {
				const BaseRate = api(`movie/${id}/rating`)
				const rate = BaseRate({
					guest_session_id: res.guest_session_id
				}, 'post')
				rate.post({value: range})
				.then(r => {
					setClick(true)
					if (parseInt(r.status_code, 10) == 34) {
						Swal.fire({
						  icon: 'error',
						  title: 'Oops...',
						  text: 'Algo ha salido mal',
						})
					} else {
						Swal.fire({
						  icon: 'success',
						  title: 'Valoracion exitosa',
						})
					}
				})
				.catch(r => console.log(r))
			})
			.catch(err => {
				console.log(err)
			})
		}
		
	}

	return (
		<div>
			{movie ? (
				<div>
					<MoviePoster
						img={movie.poster_path}
						title={movie.original_title}
						rate={movie.vote_average}
					/>
					{ !isClicked ? 
						<button onClick={handlerRate}>Valorar</button>
						: ""
					}
				</div>
			) : (<h2>Loading...</h2>)
			}
		</div>
	);
}

export default MovieDetail;