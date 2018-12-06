import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import gameover from '../assets/gameOver.jpg';


export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name){
		this.props.onClick(name)
	}

	render() {

		if (this.props.isFinished === true) {
			return (
				<div>
          			<img height="300px" src={gameover} />
          			<h1>Score: {this.props.score}</h1>
          			<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
        		</div>
        	);
		} else {
			return (
				<div>
					<Content question={this.props.question} 
						onQuestionAnswer={this.props.onQuestionAnswer} 
					/>
					<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/> 
				</div>
			);
		}
	}
}
