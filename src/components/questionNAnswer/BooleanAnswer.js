import React, {memo} from 'react'
import { Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    buttonRight: {
        display: "inline-block",
        float: "right"
    },
    buttonLeft: {
        display: "inline-block",
        float: "left"
    },
    container: {
        width: "50%",
        marginLeft: "25%",
        marginRight: "25%"
    }
}

const BooleanAnswer = ({classes, correctAnswer, setSelectedAnswer}) => {
    return (
        <div className={classes.container}>
            <div className={classes.buttonLeft}>
            <Fab 
                color="primary" 
                size="large" 
                onClick={() => setSelectedAnswer({isCorrect: correctAnswer === "True"})}
            >
                TRUE
            </Fab>
            </div>
            <div className={classes.buttonRight}>
            <Fab  
                color="secondary" 
                size="large" 
                onClick={() => setSelectedAnswer({isCorrect: correctAnswer === "False"})}
            >
                FALSE
            </Fab>
            </div>
        </div>
)
}
export default withStyles(styles)(memo(BooleanAnswer))
