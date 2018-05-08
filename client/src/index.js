import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import './bootstrap.min.css';
import Home from './components/pages/Home/Home';
import AppRoutes from './routes';
import Nav from './components/Nav.js';


const middleware =applyMiddleware(thunk, logger);
// WE WILL PASS INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const reducers = function(state, action) {
	return 0
}
const store = createStore(reducers, initialState, middleware);


const App = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Nav />
				<AppRoutes />
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
