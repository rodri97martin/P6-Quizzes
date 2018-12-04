import React from 'react';

export default class Pistas extends React.Component {
	render() {
		return (
			<div>
				<h2>Pistas:</h2>
				<ul>
					{this.props.tips.map((tip) => 
						<li> {tip} </li>
					)}
				</ul>
			</div>
		);
	}
}