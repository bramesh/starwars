import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom'

class Nav extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <NavLink className="nav-link" activeClassName="active" to="/">Home <span className="sr-only">(current)</span></NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link" to="/features" activeClassName="active">Features</NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link" to="/pricing" activeClassName="active">Pricing</NavLink>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Nav;
