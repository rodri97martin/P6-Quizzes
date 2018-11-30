import React from 'react';
export default class Game extends React.Component {
	render() {
		return (
			<div>
				{this.props.question.question}   
				<input type="text" value={this.props.question.userAnswer || ''} onChange={(e)=>{
					this.props.onQuestionAnswer(e.target.value);
				}} />
				<br></br>
				<img height="300px"src={this.props.question.attachment.url} />
				<h1>Pistas:</h1>
				<ul>
					{this.props.question.tips.map((tip) => 
						<li> {tip} </li>
					)}
				</ul>
			</div>
		);
	}
}


