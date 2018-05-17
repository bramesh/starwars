import React from 'react';
import {render} from 'react-dom';
// REACT-ROUTER
import {BrowserRouter as Router, Route} from 'react-router';
import Home from './components/pages/Home/Home';
import Family from './components/pages/Family';
import Faculty from './components/pages/Faculty';
import Members from './components/pages/Members';
import SchoolInfo from './components/pages/SchoolInfo';
import EventCalendar from './components/pages/EventCalendar';
import EditProfile from './components/pages/EditProfile';


import Layout from './components/Layout.js';
const AppRoutes = props => (
		<div>
			<Route path="/" exact component={Family} />
			<Route path="/faculty" component={Faculty} />
			<Route path="/members" component={Members} />
			<Route path="/schoolinfo" component={SchoolInfo} />
			<Route path="/eventcalendar" component={EventCalendar} />
			<Route path="/editprofile" component={EditProfile} />
		</div>
	)

export default AppRoutes;
