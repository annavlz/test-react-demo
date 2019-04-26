import React, { useState, useMemo, useEffect } from 'react'
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

const enhanceAnswers = (questionData) => questionData.incorrect_answers
    .map((text, i) => ({text, isCorrect: false, index: (i + 1).toString(), sortIndex: Math.random()}))
    .concat({text: questionData.correct_answer, isCorrect: true, index: "0", sortIndex: Math.random()})
    .sort((a, b) => a.sortIndex - b.sortIndex)


export default ({questionData, setSelectedAnswer}) => {
    const [enhancedAnswers, setEnhancedAnswers] = useState([])
    const [answerIndex, setAnswerIndex] = useState()
    const selectedAnswer = enhancedAnswers.find((answer) => answer.index === answerIndex)
    useMemo(() => {
        setEnhancedAnswers(enhanceAnswers(questionData))
    }, [questionData])

    useEffect(() => {
        setSelectedAnswer(selectedAnswer)
    }, [answerIndex])
    

    return (<RadioGroup
        aria-label="answer"
        name="answer"
        value={answerIndex}
        onChange={(event) => setAnswerIndex(event.target.value)}
    >
     {getAnswersList(enhancedAnswers)}   
    </RadioGroup>)
}
