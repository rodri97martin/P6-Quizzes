import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';

export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name){
		this.props.onClick(name)
	}

	render() {
		return (
			<div>
				<Content question={this.props.question} 
					onQuestionAnswer={this.props.onQuestionAnswer} 
				/>

				<Actionbar onClick={this.onClick} currentQuestion={this.props.currentQuestion}/> 
			</div>
		);
	}
}


