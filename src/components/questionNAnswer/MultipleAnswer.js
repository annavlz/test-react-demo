import React from 'react'
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core'

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

export default ({answerIndex, setAnswerIndex, enhancedAnswers}) => {
    return (<RadioGroup
        aria-label="answer"
        name="answer"
        value={answerIndex}
        onChange={(event) => setAnswerIndex(event.target.value)}
    >
     {getAnswersList(enhancedAnswers)}   
    </RadioGroup>)
}