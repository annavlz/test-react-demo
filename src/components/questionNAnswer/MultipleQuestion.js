import React, {useState, useEffect, useMemo} from 'react'
import { FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import {Colors} from '../../App'
const styles = {
    radiogroup: {
        width: "80%",
        margin: "10%"
    },
    legend: {
        fontSize: 20
    }
}

const getAnswersList = (answers) => {
    return answers.map((answer) => (
        <FormControlLabel
            value={answer.index}
            control={<Radio color="primary" />}
            label={answer.text}
            labelPlacement="end"
            key={answer.sortIndex}
        />
    ))
}

const enhanceAnswers = (questionData) => questionData.incorrect_answers
        .map((text, i) => ({text, isCorrect: false, index: (i + 1).toString(), sortIndex: Math.random()}))
        .concat({text: questionData.correct_answer, isCorrect: true, index: "0", sortIndex: Math.random()})
        .sort((a, b) => a.sortIndex - b.sortIndex)

const MultipleQuestion = ({classes, questionData, dispatch}) => {
    const [answerIndex, setAnswerIndex] = useState()
    const [enhancedAnswers, setEnhancedAnswers] = useState([])
    useMemo(() => {
        setEnhancedAnswers(enhanceAnswers(questionData))
    }, [questionData])

    useEffect(() => {
        const selectedAnswer = enhancedAnswers.find((answer) => answer.index === answerIndex)
        const color = selectedAnswer ? selectedAnswer.isCorrect ? Colors.correct : Colors.wrong : Colors.new
        dispatch({type: "SET_BGCOLOR", value: color})
        // return () => setAnswerIndex(null)
    }, [answerIndex])

    return(
        <FormControl component="fieldset" className={classes.radiogroup}>
            <FormLabel component="legend" className={classes.legend}>
                {questionData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </FormLabel>
            <RadioGroup
                aria-label="answer"
                name="answer"
                value={answerIndex}
                onChange={(event) => setAnswerIndex(event.target.value)}
            >
             {getAnswersList(enhancedAnswers)}   
            </RadioGroup>
        </FormControl>
    )}
export default withStyles(styles)(MultipleQuestion)