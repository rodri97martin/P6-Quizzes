import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Game';
import { questionAnswer } from './redux/actions';
import { changeQuestion } from './redux/actions';
import { submit } from './redux/actions';
import { initQuestions } from './redux/actions';

class App extends Component {
  render() {
    return (
      <div>
        <Game question={this.props.questions[this.props.currentQuestion]} onQuestionAnswer={(answer)=>{
          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
        }}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
