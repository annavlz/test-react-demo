import React, {useEffect, useState} from 'react'
import { FormControl, FormLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MultipleAnswer from './MultipleAnswer'
import BooleanAnswer from './BooleanAnswer'
import Colors from '../../colors'

const styles = {
    radiogroup: {
        width: "80%",
        margin: "10%"
    },
    legend: {
        fontSize: 20
    }
}

const QuestionNAnswer = ({classes, questionData, dispatch}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(() => {     
        dispatch({type: "SET_BGCOLOR", value: selectedAnswer ? selectedAnswer.isCorrect ? Colors.correct : Colors.wrong : Colors.new})
    }, [selectedAnswer, dispatch])

    return(
        <FormControl component="fieldset" className={classes.radiogroup}>
            <FormLabel component="legend" className={classes.legend}>
                {questionData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </FormLabel>
            {questionData.type === "multiple" ? 
                (<MultipleAnswer questionData={questionData} setSelectedAnswer={setSelectedAnswer}/>)
                : (<BooleanAnswer questionData={questionData} setSelectedAnswer={setSelectedAnswer}/>)
            }
        </FormControl>
    )}
export default withStyles(styles)(QuestionNAnswer)