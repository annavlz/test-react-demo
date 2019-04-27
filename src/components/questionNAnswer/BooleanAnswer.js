import React, {useState, useEffect} from 'react'
import { Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        margin:50
    },
    container: {
        width: "50%",
        marginLeft: "25%",
        marginRight: "25%"
    }
}
const BooleanAnswer = ({classes, questionData, setSelectedAnswer}) => {
    const [answerValue, setAnswerValue] = useState()
    const isCorrect = questionData.correct_answer === answerValue
    const selectedAnswer = answerValue ? {isCorrect} : null
    useEffect(() => {
        setSelectedAnswer(selectedAnswer)
    }, [answerValue, setSelectedAnswer, selectedAnswer])
    
    return (
        <div className={classes.container}>
            <Fab className={classes.button} color="primary" size="large" onClick={() => setAnswerValue("True")}>TRUE</Fab>
            <Fab className={classes.button} color="secondary" size="large" onClick={() => setAnswerValue("False")}>FALSE</Fab>
        </div>
)
}
export default withStyles(styles)(BooleanAnswer)
