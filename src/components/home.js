import React from 'react';
import { NavLink } from 'react-router-dom';

import teamsBg from '../img/teams-bg.jpg';
import ratingsBg from '../img/ratings-bg.jpg';

let teamsBgStyles = {
	backgroundImage: `url(${teamsBg})`
};

let ratingsBgStyles = {
	backgroundImage: `url(${ratingsBg})`
};

let Home = () => {
	return (
		<div className="text-left">
			<h5 className="font-weight-bold uppercase mb-1">Next Match</h5>
			<p>Team 1 v Team 2</p>

			<div className="bg-image my-4" style={teamsBgStyles}>
				<NavLink to="/teams">
					<button className="btn btn-tomato">View Teams</button>
				</NavLink>
			</div>

			<div className="bg-image" style={ratingsBgStyles}>
				<button className="btn btn-tomato right">Player Stats</button>
			</div>

		</div>
	);
}

export default Home;
