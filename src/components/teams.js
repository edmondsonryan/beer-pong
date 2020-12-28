import React from 'react';
import TeamBlock from './teamBlock';

let Teams = (props) => {

	function renderTeams(teams) {
		return teams.map((team, index) => <TeamBlock team={team} index={index} key={index} /> );
	}

	return (
		<div>
			{renderTeams(props.teams)}
		</div>
	);
}


export default Teams;
