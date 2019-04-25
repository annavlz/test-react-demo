import React, { useReducer } from 'react';
import { Paper, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Category from './components/Category'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 10,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 10 * 2,
  }
};

const INIT_STATE = {
  category: 9
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {...state, category: action.value}
    case "SET_TYPE":
      return {...state, type: action.value}
    case "SET_DIFFICULTY":
      return {...state, difficulty: action.value}
    default:
      return state
  }
}

const App = ({classes}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  return (
    <Paper>
      <form className={classes.root} autoComplete="off">
        <Category state={state} dispatch={dispatch}/>
      </form>
    </Paper>
  )}

export default withStyles(styles)(App);
