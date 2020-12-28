import React from 'react';

let StandingsCell = (props) => {

	if (props.cell === 'x') {
		return (
			<div className="standings-cell blank">&nbsp;</div>
		);
	} else {
		return (
			<div className="standings-cell">
				<span>{props.cell}</span>
			</div>
		);
	}

}

export default StandingsCell;
