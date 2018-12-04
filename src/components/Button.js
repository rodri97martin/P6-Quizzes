import React from 'react';

export default class Button extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.onClick(this.props.name)
	}

	render() {
		return (
			<button onClick={this.onClick} disabled={this.props.isDisabled}> {this.props.name}</button>
		);
	}
}