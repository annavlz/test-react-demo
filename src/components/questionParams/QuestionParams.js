import React from 'react'
import Category from './Category'
import Difficulty from './Difficulty'

const QuestionParams = ({category, difficulty, dispatch}) => {
    return (
        <form noValidate autoComplete="off">
            <Category category={category} dispatch={dispatch}/>
            <Difficulty difficulty={difficulty} dispatch={dispatch} />
        </form>
    )
}

export default QuestionParams

