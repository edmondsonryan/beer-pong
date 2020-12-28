import React from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from '../img/home.svg';
import fixturesIcon from '../img/fixtures.svg';
import finalsIcon from '../img/finals.svg';
import standingsIcon from '../img/standings.svg';

let Footer = () => {
	return (
		<footer>
			<div className="container">
				<nav className="row justify-content-between">
					<NavLink exact className="col text-center nav-item" activeClassName="active" to='/'>
						<img alt="" className="icon" src={homeIcon} />
						<span>Home</span>
					</NavLink>
					<NavLink exact className="col text-center nav-item" activeClassName="active" to='/fixtures'>
						<img alt="" className="icon" src={fixturesIcon} />
						<span>Fixtures</span>
					</NavLink>
					<NavLink exact className="col text-center nav-item" activeClassName="active" to='/standings'>
						<img alt="" className="icon" src={standingsIcon} />
						<span>Standings</span>
					</NavLink>
					<NavLink exact className="col text-center nav-item" activeClassName="active" to='/finals'>
						<img alt="" className="icon" src={finalsIcon} />
						<span>Finals</span>
					</NavLink>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
