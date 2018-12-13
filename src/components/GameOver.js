import React from 'react';
import gameover from '../assets/gameOver.jpg';

export default class GameOver extends React.Component {
	render() {
		return (
			<div id="gameOver">
				<img class="quizImage" height="300px" src={gameover} />
          		<h1>Score: {this.props.score}</h1>
			</div>

		);
	}
}