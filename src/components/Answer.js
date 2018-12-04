import React from 'react';

export default class Answer extends React.Component {
	render() {
		return (
			<input type="text" value={this.props.userAnswer} onChange={(e)=>{
					this.props.onQuestionAnswer(e.target.value);
				}} />
		);
	}
}