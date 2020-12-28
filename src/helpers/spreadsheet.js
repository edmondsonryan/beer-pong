import config from '../config';

function loadTeams(callback) {
	window.gapi.client.load('sheets', 'v4', () => {
		window.gapi.client.sheets.spreadsheets.values
			.get({
				spreadsheetId: config.spreadsheetId,
				range: 'Teams!A2:C'
			})
			.then(
				response => {
					const data = response.result.values;
					callback(data, 'teams');
				},
				response => {
					callback(false, null, response.result.error);
				}
			)
	});
}

function loadFixtures(callback) {
	window.gapi.client.load('sheets', 'v4', () => {
		window.gapi.client.sheets.spreadsheets.values
			.get({
				spreadsheetId: config.spreadsheetId,
				range: 'Fixtures!A1:Z'
			})
			.then(
				response => {
					const data = response.result.values;
					callback(data, 'fixtures');
				},
				response => {
					callback(false, null, response.result.error);
				}
			)
	});
}

export {
	loadTeams,
	loadFixtures
}
