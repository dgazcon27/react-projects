import React from 'react';
import ReactDOM from 'react-dom';
import App from './app-ratemovie'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css'
import './assets/styles/ihover.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
