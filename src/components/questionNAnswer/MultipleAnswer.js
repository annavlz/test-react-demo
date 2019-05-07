import React, { useState, useMemo, memo } from 'react'
import { List, ListItem, Button } from '@material-ui/core'


const getAnswersList = ({answers, setAnswer}) => {
    return answers.map((answer, i) => (
        <ListItem key={answer.sortIndex} > 
            <Button
                id={i}
                variant="contained"
                onClick={() => setAnswer(answer.sortIndex)}
                style={{width:"100%"}}
            >
                {answer.text.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </Button>
        </ListItem>
    ))
}

const enhanceAnswers = (questionData) => questionData.incorrect_answers
    .map((text) => ({text, isCorrect: false, sortIndex: Math.random()}))
    .concat({text: questionData.correct_answer, isCorrect: true, sortIndex: Math.random()})
    .sort((a, b) => a.sortIndex - b.sortIndex)

export default memo(({questionData, setSelectedAnswer }) => {
    const [enhancedAnswers, setEnhancedAnswers] = useState([])

    useMemo(() => {
        setEnhancedAnswers(enhanceAnswers(questionData))
    }, [questionData])

    const setAnswer = (value) => {
        setSelectedAnswer(enhancedAnswers.find((answer) => answer.sortIndex === value))
    }

    return (
        <List>
            {getAnswersList({answers: enhancedAnswers, setAnswer})}  
        </List>)
})
