import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MultipleQuestion from './MultipleQuestion'
import BooleanQuestion from './BooleanQuestion'

const styles = {
    container: {
        marginLeft: "25%",
        marginRight: "25%",
        width: "50%"
      }
}
 const QuestionNAnswer = ({classes, questionData }) => {
    return questionData.type === "multiple" ? (
                <MultipleQuestion questionData={questionData} />
            ) : (<BooleanQuestion questionData={questionData} />)
            
}

export default withStyles(styles)(QuestionNAnswer)