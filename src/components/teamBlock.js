import React from 'react';
import classNames from 'classnames';

let TeamBlock = (props) => {

	let contentPosition;

	// work out if even or odd
	if (props.index % 2 === 0) {
		contentPosition = 'content-left';
	} else {
		contentPosition = 'content-right';
	}

	return (
		<div className={classNames('team-block', contentPosition)}>
			<div className="team-img-wrap" >
				<div className="team-img" style={{backgroundImage: "url(" + props.team[2] + ")"}}></div>
			</div>
			<div className="team-text">
				<h5>{props.team[0]}</h5>
				<p>{props.team[1]}</p>
				<button className="btn btn-tomato">
					View
				</button>
			</div>
		</div>
	);
}

export default TeamBlock;
