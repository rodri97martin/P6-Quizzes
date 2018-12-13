import React from 'react';

export default class Timer extends React.Component {
	render() {
		return (
			<div>
				Time: 0{this.props.timer.minutes}:{this.props.timer.seconds < 10 ? '0' + this.props.timer.seconds : this.props.timer.seconds}
			</div>
		);
	}

	componentDidUpdate() {

	}
}