import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MovieList from './components/movies/movies-list';
import MovieDetail from './components/movies/movie-detail';
import Header from './components/shared/header'
import {api} from './helpers/request';
import {getData, storeData} from './helpers/localStorage';
import {validateDate} from './helpers/helpers';
import './assets/styles/movies.css'

const App = () => {
	const data = () => getData('token') || null;
	const Base = api('authentication/token/new')
	const auth = Base({})

	const [token, setToken] = useState(data)
	
	useEffect(() => {
		if (!token || validateDate(token.expired_at)) {
			auth.get()
			.then(res => {
				setToken(res)
				storeData('token', res)
			})
		}

	})
	return (
		<Router>
		    <Header/>
			<div className="movie-list">
			 <Switch>
	          <Route exact path="/portfolio">
	            <MovieList />
	          </Route>
	          <Route exact path="/portfolio/movie/:id">
	            <MovieDetail />
	          </Route>
	        </Switch>
				
			</div>
		</Router>
	)
}

export default App;