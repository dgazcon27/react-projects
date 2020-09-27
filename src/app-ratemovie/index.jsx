import React, {useState, useEffect} from 'react';
import MovieList from './components/movies/movies-list';
import MovieDetail from './components/movies/movie-detail';
import {api} from './helpers/request';
import {getData, storeData} from './helpers/localStorage';
import {validateDate} from './helpers/helpers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const App = () => {
	const data = () => getData('token') || null;
	const [token, setToken] = useState(data)
	const Base = api('authentication/token/new')
	const auth = Base({})
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
			<div>
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