import React from 'react';

export default class Timer extends React.Component {
	
	componentDidUpdate() {
		if (this.props.timer.running && this.props.timer.minutes === 0 && this.props.timer.seconds === 0) {
			this.props.submitTime();
		}
	}
	
	render() {
		return (
			<div>
				Time: 0{this.props.timer.minutes}:{this.props.timer.seconds < 10 ? '0' + this.props.timer.seconds : this.props.timer.seconds}
			</div>
		);
	}
}