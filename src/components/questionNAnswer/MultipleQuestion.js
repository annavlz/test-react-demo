import React, {useState} from 'react'
import { FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    radiogroup: {
        width: "80%",
        margin: "10%"
    },
    legend: {
        fontSize: 20
    }
}

const getAnswersList = ({correct_answer, incorrect_answers}) => {
    return incorrect_answers.map((answer, i) => (
        <FormControlLabel
            value={i.toString()}
            control={<Radio color="primary" />}
            label={answer}
            labelPlacement="end"
            key={i}
        />
      ))
}
const MultipleQuestion = ({classes, questionData}) => {
    const [answer, setAnswer] = useState("0")
    return(
        <FormControl component="fieldset" className={classes.radiogroup}>
            <FormLabel component="legend" className={classes.legend}>
                {questionData.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}
            </FormLabel>
            <RadioGroup
                aria-label="answer"
                name="answer"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
            >
             {getAnswersList(questionData)}   
            </RadioGroup>
        </FormControl>
    )}
export default withStyles(styles)(MultipleQuestion)