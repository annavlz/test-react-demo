import React from 'react'
import MultipleQuestion from './MultipleQuestion'
import BooleanQuestion from './BooleanQuestion'

export default ({questionData, dispatch }) => {
    return questionData.type === "multiple" ? (
                <MultipleQuestion questionData={questionData} dispatch={dispatch}/>
            ) : (<BooleanQuestion questionData={questionData} dispatch={dispatch}/>)
            
}