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
    this.download = this.download.bind(this);
  }

  download() {
    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=a56673ed15ebc70ba6f2')
      .then(res => res.json())
      .then((questions) => {
        this.props.dispatch(initQuestions(questions));
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.download();
  }

  render() {
    return (
      <div>
        <TitleBar/>
        <Game question={this.props.questions[this.props.currentQuestion]} 
          onQuestionAnswer={(answer)=>{ this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
          onClick={this.onClick}
          currentQuestion={this.props.currentQuestion}
          isFinished={this.props.finished}
          score={this.props.score}
          timer={this.props.timer}
        />
      </div>
    );
  }
  

  onClick(name) {
    if (name === "Submit") {
      this.props.dispatch(submit(this.props.questions))
    } else if (name === "Play Again"){
      this.download();
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
