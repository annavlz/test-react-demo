import React, { useReducer } from 'react';
import Axios from 'axios'
import { Paper, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import QuestionParams from './components/questionParams/QuestionParams'
import QuestionNAnswer from './components/questionNAnswer/QuestionNAnswer'

const styles = {
  container: {
    marginLeft: "25%",
    marginRight: "25%",
    width: "50%"
  },
  question: {
    width: "10%",
    marginTop: 50,
    marginBottom: 50,
    marginLeft: "45%",
    marginRight: "45%",
    textAlign: "center"
  }
};

const INIT_STATE = {
  category: 9,
  difficulty: "medium",
  questionData: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {...state, category: action.value}
    case "SET_DIFFICULTY":
      return {...state, difficulty: action.value}
    case "SET_RESPONSE": 
      return { ...state, questionData: action.value}
    default:
      return state
  }
}

const getQuestion = async ({state, dispatch}) => {
  Axios.get("https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple")
  .then((response) => {
    dispatch({type: "SET_RESPONSE", value: response.data.results[0]})
  })
  
  // 
}

const App = ({classes}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  console.log(state)
  return (
    <div>
      <Paper className={classes.container}>
        <Typography align="center" gutterBottom inline={false} variant="h1">TRIVIA</Typography>
        <QuestionParams category={state.category} difficulty={state.difficulty} dispatch={dispatch} />
      </Paper>
      <Button 
          className={classes.question}
          onClick={() => getQuestion({state, dispatch})}
          variant="contained"
        >
          <Typography variant="h1">?</Typography>
        </Button>
      {state.questionData.type && (
        <Paper className={classes.container}>
          <QuestionNAnswer questionData={state.questionData} />
        </Paper>
      )}
    </div>
  )}

export default withStyles(styles)(App);

// {"response_code":0,"results":[{"category":"Entertainment: Books","type":"multiple","difficulty":"easy","question":"What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?","correct_answer":"A Study in Scarlet","incorrect_answers":["The Sign of the Four","A Case of Identity","The Doings of Raffles Haw"]}]}
// {"response_code":0,"results":[{"category":"Entertainment: Books","type":"boolean","difficulty":"easy","question":"The &quot;Berenstein Bears&quot; is the correct spelling of the educational children&#039;s book series&#039; name.","correct_answer":"False","incorrect_answers":["True"]}]}