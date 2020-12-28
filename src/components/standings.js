import React from 'react';
import StandingsRow from './standingsRow.js';

function createRows(fixtures) {

	let rows = [];
	let filteredRows = [];

	fixtures.forEach((fixture, i) => {
		// split each row to get results table
		for (var cell = 8; cell < fixture.length; cell++) {
			if (!rows.hasOwnProperty(i)) {
				rows[i] = [];
			}
			rows[i].push(fixture[cell]);
		}
	});

	for (var i = 0; i < rows.length; i++) {
		let allEmpty = true;
		for (var j = 0; j < rows[i].length; j++) {
			if (rows[i][j].length > 0) {
				allEmpty = false;
				break;
			}
		}
		if (allEmpty === false) {
			filteredRows.push(rows[i]);
		}
	}

	return filteredRows;

}

let Standings = (props) => {

	let rows = createRows(props.fixtures)

	function createTable(rows) {
		return rows.map((row, index) => <StandingsRow key={index} row={row}></StandingsRow>);
	}

	return <div className="standings-table">{createTable(rows)}</div>;
}

export default Standings;
