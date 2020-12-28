import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import config from './config';
import {loadTeams, loadFixtures} from './helpers/spreadsheet';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

import Teams from './components/teams';
import Stats from './components/stats';
import Standings from './components/standings';
import Fixtures from './components/fixtures';
import Finals from './components/finals';

import './App.scss';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
			fixtures: []
		}
	}

	componentDidMount() {

		window.gapi.load('client', this.initClient);
	}

	initClient = () => {
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				discoveryDocs: config.discoveryDocs
			})
			.then(() => {
				loadTeams(this.onLoad);
				loadFixtures(this.onLoad);
			});
	}

	onLoad = (data, type, error) => {
		if (data) {
			if (type === 'teams') {
				this.setState({
					teams: data
				});
			} else if (type === 'fixtures') {
				this.setState({
					fixtures: data
				});
			}
		}
	}

	render() {
	  	return (
		  	<Router>
				<div className="App">
				  	<Header />

					<div className="main">
						<Switch>
							<Route path="/teams">
								<div className="container">
									<Teams teams={this.state.teams} />
								</div>
							</Route>
							<Route path="/stats">
								<div className="container">
									<Stats />
								</div>
							</Route>
							<Route path="/fixtures">
								<div className="container">
									<Fixtures teams={this.state.teams} fixtures={this.state.fixtures} />
								</div>
							</Route>
							<Route path="/standings">
								<div className="container">
									<Standings fixtures={this.state.fixtures} />
								</div>
							</Route>
							<Route path="/finals">
								<div className="container">
									<Finals />
								</div>
							</Route>
							<Route path='/'>
								<div className="container">
									<Home />
								</div>
							</Route>
						</Switch>
					</div>

					<Footer />
				</div>
			</Router>
	  	);
	}

};

export default App;
