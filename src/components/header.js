import React from 'react';
// import Helmet from 'react-helmet';

import icon from '../img/header.svg';
import { NavLink } from 'react-router-dom';

import {
	useLocation
} from 'react-router-dom';

let Header = () => {

	let {pathname} = useLocation();
	let title;

	// set the title
	if (pathname !== '/') {
		title = toTitleCase(pathname.replace('/', ''));
	} else {
		title = 'Home';
	}

	return (
		<header>
			<div className="container top-nav">
				<div className="d-flex">
					<img src={icon} />
					<h1>{title}</h1>
				</div>
			</div>
			{ checkIfTabs(pathname) }
		</header>
	);
}


function checkIfTabs(pathname) {
	if (pathname === '/teams' || pathname === '/stats') {
		return (
			<ul className="nav-tabs">
				<NavLink exact className="col text-center" activeClassName="active" to='/teams'>
					<li>Teams</li>
				</NavLink>
				<NavLink exact className="col text-center" activeClassName="active" to='/stats'>
					<li>Player Stats</li>
				</NavLink>
			</ul>
		);
	}
}

function toTitleCase(str) {
	return str.replace(
		/\w\S*/g,
		function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

export default Header;
