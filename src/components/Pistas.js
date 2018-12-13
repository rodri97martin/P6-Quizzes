import React from 'react';

export default class Pistas extends React.Component {
	render() {
		return (
			<div>
				<h4>Pistas:</h4>
				<ul>
					{this.props.tips.map((tip) => 
						<li> {tip} </li>
					)}
				</ul>
			</div>
		);
	}
}