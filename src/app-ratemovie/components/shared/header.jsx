import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect, useState} from 'react';
import {MovieImage} from '../movies/movie';


import {api} from '../../helpers/request';
import logo from '../../assets/images/movie-logo.png'


const initialForm = {
	search: "",
}

const Header = () => {
	
	const [form, setForm] = useState(initialForm)
	const [movies, setMovies] = useState([])
	const [query, setQuery] = useState("")
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		const Base = api("search/movie")
		const movies_api = Base({
			query: query,
			page: 1,
			include_adult: false
		})
		const getMovies = () => {
			if (query) {
				 movies_api.get().then(response => {
				 	const getMovies = response.results.slice(0,4)
					setMovies(getMovies)
				})
			}
			setMovies([])
		}

		getMovies()

		return () => {
			movies_api.cancel();
		}
		
	}, [query])

	const handlerChange = e => {
		let { value, name } = e.target;
		setForm({...form,
			[name]:value
		})
		if (timer) setTimer(clearTimeout(timer))
		setTimer(setTimeout(() => {
			setQuery(value)
		}, 1000))
	}

	const handlerRedirect = () => {
		setQuery("")
		setMovies([])
		setForm({search: ""})
	}

	return (
		<div>
			<Navbar expand="lg" className="justify-content-center top-header">
				<Navbar.Brand><Link className="brand" to="/portfolio"><img src={logo} alt="logo"/> Rate This Movie</Link></Navbar.Brand>
			    <Form inline>
			      <FormControl
			      	name="search"
			      	value={form.search} 
			      	onChange={handlerChange}
			      	type="text" 
			      	placeholder="Search" 
			      	className="mr-sm-2" 
		      	  />
			    </Form>
				<div className="result-movies" hidden={movies.length === 0}>
					{movies ? 
						movies.map((movie) =>
							<div key={movie.id}>
								<Link to={`/portfolio/movie/${movie.id}`} onClick={handlerRedirect} >
									<li>
										<MovieImage
											img={movie.poster_path}
											styles=""
										/>
										{movie.title}
									</li>
								</Link> 
							</div>
						)
					: ""}
				</div>
			</Navbar>
		</div>
	)
}

export default Header;