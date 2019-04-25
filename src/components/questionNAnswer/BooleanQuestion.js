import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {

}
const BooleanQuestion = ({classes, questionData}) => {
    return(<Typography>{questionData.question}</Typography>)
}
export default withStyles(styles)(BooleanQuestion)