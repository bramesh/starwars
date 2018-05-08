import React from 'react';
import {render} from 'react-dom';
// REACT-ROUTER
import {BrowserRouter as Router, Route} from 'react-router';
import Home from './components/pages/Home/Home';
import Features from './components/pages/Features/Features';
import Pricing from './components/pages/Pricing/Pricing';

const AppRoutes = props => (
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/features" component={Features} />
			<Route path="/pricing" component={Pricing} />
		</div>
	)

export default AppRoutes;
