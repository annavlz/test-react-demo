import React, { useState, useMemo, useEffect, memo } from 'react'
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core'


const getAnswersList = (answers) => {
    console.log("LIST")
    return answers.map((answer) => (
        <FormControlLabel
            value={answer.index}
            control={<Radio color="primary" />}
            label={answer.text.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            labelPlacement="end"
            key={answer.sortIndex}
        />
    ))
}

const enhanceAnswers = (questionData) => questionData.incorrect_answers
    .map((text, i) => ({text, isCorrect: false, index: (i + 1).toString(), sortIndex: Math.random()}))
    .concat({text: questionData.correct_answer, isCorrect: true, index: "0", sortIndex: Math.random()})
    .sort((a, b) => a.sortIndex - b.sortIndex)

export default memo(({questionData, setSelectedAnswer }) => {
    const [enhancedAnswers, setEnhancedAnswers] = useState([])
    const [answerIndex, setAnswerIndex] = useState()

    useMemo(() => {
        console.log("SET ENHANCED ANWSERS")
        setEnhancedAnswers(enhanceAnswers(questionData))
    }, [questionData])

    const update = (value) => {
        setAnswerIndex(value)
        setSelectedAnswer(enhancedAnswers.find((answer) => answer.index === value))
    }

    console.log("MA", answerIndex)
    return (<RadioGroup
        aria-label="answer"
        name="answer"
        value={answerIndex}
        onChange={(event) => update(event.target.value)}
    >
     {getAnswersList(enhancedAnswers)}   
    </RadioGroup>)
})
