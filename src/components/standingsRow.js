import React from 'react';
import StandingsCell from './standingsCell.js';

let StandingsRow = (props) => {

	function createRow(row) {
		let filtered = [];
		row.forEach((cell, i) => {
			if (cell.length > 0) {
				filtered.push(cell);
			} else {
				filtered.push('');
			}
		});

		return filtered.map((cell, index) => <StandingsCell key={index} cell={cell}></StandingsCell>);
	}

	return (
			<div className="standings-row d-flex">
				{createRow(props.row)}
			</div>
	);
}

export default StandingsRow;
