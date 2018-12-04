import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Pistas from './Pistas';


export default class Content extends React.Component {
	render() {
		return (

			<div>
				<img height="300px" src={this.props.question.attachment.url} />
				<Question question={this.props.question}/>
				<Answer userAnswer={this.props.question.userAnswer || ''} onQuestionAnswer={this.props.onQuestionAnswer}/>
				<Pistas tips={this.props.question.tips}/>
			</div>
		);
	}
}