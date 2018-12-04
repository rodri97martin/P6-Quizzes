import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from './actions';
import { CHANGE_QUESTION } from './actions';
import { SUBMIT } from './actions';
import { INIT_QUESTIONS } from './actions';

function score(state = 0, action = {}) {
	switch(action.type) {
		case SUBMIT:
			var newScore = 0;
			action.payload.questions.map((question)=>{
				if (question.userAnswer) {
					if (question.userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
					newScore++;
					} 
				}
			})
			return newScore;
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		case SUBMIT:
			return true;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUESTION:
			var newState;
			if (action.payload.index === "Siguiente") {
				newState = state + 1;
			} else {
				newState = state - 1;
			}
			return newState;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question, userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer }
			})
		default:
			return state;
	}
}


const GlobalState = (combineReducers({

	score,
	finished,
	currentQuestion,
	questions

}));

export default GlobalState;