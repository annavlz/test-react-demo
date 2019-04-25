import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {

}
const MultipleQuestion = ({classes, questionData}) => {
    return(
        <div>
            <Typography>{questionData.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}</Typography>

        </div>
    
    )}
export default withStyles(styles)(MultipleQuestion)