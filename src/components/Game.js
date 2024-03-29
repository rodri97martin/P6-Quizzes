import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import GameOver from './GameOver';


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
					<GameOver score={this.props.score}/>
          			<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/>
        		</div>
        	);
		} else {
			return (
				<div id="gameDiv">
					<Content question={this.props.question} 
						onQuestionAnswer={this.props.onQuestionAnswer} 
						timer={this.props.timer}
						submitTime={this.props.submitTime}
					/>
					<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion} isFinished={this.props.isFinished}/> 
				</div>
			);
		}
	}
}
