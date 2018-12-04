import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
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
				<Button name="Anterior" onClick={this.onClick} isDisabled={this.props.currentQuestion === 0}/>
				<Button name="Siguiente" onClick={this.onClick} isDisabled={this.props.currentQuestion === 9}/>
				<Button name="Submit" onClick={this.onClick} isDisabled={this.props.isFinished}/> 
			</div>
			
		);
	}
}