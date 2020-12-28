import React from 'react';
import FixtureBlock from './fixtureBlock';

function sortFixtures(fixtures) {
	let sortedFixtures = {
		rounds: [],
	};

	fixtures.forEach((fixture, i) => {
		if (i > 0) {
			let [round, game, homeTeam, homeScore, awayTeam, awayScore, time] = fixture;

			if (!sortedFixtures.rounds.hasOwnProperty(round)) {
				sortedFixtures.rounds[round] = {
					fixtures: []
				};
			}
			sortedFixtures.rounds[round].fixtures.push({
				game,
				homeTeam,
				homeScore,
				awayTeam,
				awayScore,
				time
			});
		}
	});

	return Object.values(sortedFixtures.rounds);
}

let Fixtures = (props) => {

	let fixtures = sortFixtures(props.fixtures);

	function renderRounds(fixtures) {
		return fixtures.map((round, index) => <FixtureBlock round={index+1} key={index} fixtures={round.fixtures} />);
	}

	return (
		<div className="row">
			<div className="fixture-table d-flex flex-wrap">
				{renderRounds(fixtures)}
			</div>
		</div>
	);
}

export default Fixtures;
