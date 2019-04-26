import React, {useState} from 'react'
import { Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        margin:50
    },
    container: {
        width: "50%",
        marginLeft: "25%",
        marginRight: "25%"
    }
}
const BooleanAnswer = ({classes, questionData, setSelectedAnswer}) => {
    const [answerValue, setAnswerValue] = useState()
    console.log(answerValue)
    return (
        <div className={classes.container}>
            <Fab className={classes.button} color="primary" size="large" onClick={() => setAnswerValue(true)}>TRUE</Fab>
            <Fab className={classes.button} color="secondary" size="large" onClick={() => setAnswerValue(false)}>FALSE</Fab>
        </div>
)
}
export default withStyles(styles)(BooleanAnswer)
