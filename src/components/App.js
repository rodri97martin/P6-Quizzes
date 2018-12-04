import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Game from './Game';
import TitleBar from './TitleBar';
import { questionAnswer } from '../redux/actions';
import { changeQuestion } from '../redux/actions';
import { submit } from '../redux/actions';
import { initQuestions } from '../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div>
        <TitleBar/>
        <Game question={this.props.questions[this.props.currentQuestion]} 
          onQuestionAnswer={(answer)=>{ this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
          onClick={this.onClick}
          currentQuestion={this.props.currentQuestion}
        />
        <h1>Score: {this.props.score}</h1>
        <h1>Finished: {this.props.finished.toString()}</h1>

      </div>
    );
  }

  onClick(name) {
    if (name === "Submit") {
      this.props.dispatch(submit(this.props.questions))
    } else {
      this.props.dispatch(changeQuestion(name));
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
