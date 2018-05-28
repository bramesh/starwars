import React from 'react';
import {render} from 'react-dom';
// REACT-ROUTER
import {BrowserRouter as Router, Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Family from './components/pages/Family';
import Faculty from './components/pages/Faculty';
import Members from './components/pages/Members';
import SchoolInfo from './components/pages/SchoolInfo';
import EventCalendar from './components/pages/EventCalendar';
import EditProfile from './components/pages/EditProfile';


import Layout from './components/Layout.js';

const NoMatch = () => (
	<div>
		<h1>404 - No match found</h1>
		<Link to="/">Go back to home</Link>
	</div>
)

const AppRoutes = props => (
		<div>
			<Switch>
				<Route path="/" exact component={Family} />
				<Route path="/faculty" component={Faculty} />
				<Route path="/members" component={Members} />
				<Route path="/schoolinfo" component={SchoolInfo} />
				<Route path="/eventcalendar" component={EventCalendar} />
				<Route path="/editprofile" component={EditProfile} />
				<Route component={NoMatch}/>
			</Switch>
		</div>
	)

export default AppRoutes;
