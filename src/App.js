import React, { useReducer  } from 'react';
import Axios from 'axios'
import { Paper, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import QuestionParams from './components/questionParams/QuestionParams'
import QuestionNAnswer from './components/questionNAnswer/QuestionNAnswer'
import reducer from './helpers/reducer'
import INIT_STATE from './helpers/initState'

const styles = {
  container: {
    marginLeft: "25%",
    marginRight: "25%",
    width: "50%"
  },
  question: {
    width: "10%",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "45%",
    marginRight: "45%",
    textAlign: "center"
  }
};

const getQuestion = async ({state, dispatch}) => {
  Axios.get(`https://opentdb.com/api.php?amount=1&category=${state.category}&difficulty=${state.difficulty}`)
  .then((response) => {
    dispatch({type: "SET_RESPONSE", value: response.data.results[0]})
  })
}

const App = ({classes}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  return (
    <div style={{backgroundColor: state.bgcolor, height: "100vh"}}>
      <Paper className={classes.container} >
        <Typography align="center" gutterBottom inline={false} variant="h4">TRIVIA</Typography>
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
          <QuestionNAnswer questionData={state.questionData} dispatch={dispatch}/>
        </Paper>
      )}
    </div>
  )}

export default withStyles(styles)(App);