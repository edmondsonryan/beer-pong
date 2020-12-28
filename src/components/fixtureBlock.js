import React from 'react';

let FixtureBlock = (props) => {

	function renderFixtures(fixtures) {

		var mappedFixtures = fixtures.map((fixture, index) => {
			let homeScore = fixture.homeScore !== '-' ? fixture.homeScore : null;
			let awayScore = fixture.awayScore !== '-' ? fixture.awayScore : null;

			return (<div key={index} className="col-12 d-flex flex-wrap mb-2">
				<div className="col-12 px-0 text-left uppercase font-weight-bold font-small">{fixture.time}</div>
				<div className="col-4 px-0 text-left">
					{fixture.homeTeam}
				</div>
				<div className="col-4 px-0">
					{homeScore} - {awayScore}
				</div>
				<div className="col-4 px-0 text-right">
					{fixture.awayTeam}
				</div>
			</div>);


		});

		return mappedFixtures;
	}

	return (
		<div className="w-100 mb-4">
			<div className="col-12 py-2 mb-3 text-left border-bottom fixture-table-header">
				<span className="font-weight-bold text-uppercase">Round {props.round}</span>
			</div>
			{renderFixtures(props.fixtures)}
		</div>
	);
}

export default FixtureBlock;
