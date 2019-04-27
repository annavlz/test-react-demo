import React from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    radiogroup: {
        width: "80%",
        margin: "10%"
        
    },
    radio: {
        justifyContent: "space-between"
    },
    legend: {
        textAlign: "center"
    }

}

const Difficulty = ({classes, difficulty, dispatch}) => {
    return(
        <FormControl component="fieldset" className={classes.radiogroup}>
            <FormLabel component="legend" className={classes.legend}>Difficulty</FormLabel>
            <RadioGroup
                className={classes.radio}
                aria-label="position"
                name="position"
                value={difficulty}
                onChange={(event) => dispatch({type: "SET_DIFFICULTY", value: event.target.value})}
                row
            >
                <FormControlLabel
                    value="easy"
                    control={<Radio color="primary" />}
                    label="Easy"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="medium"
                    control={<Radio color="primary" />}
                    label="Medium"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="hard"
                    control={<Radio color="primary" />}
                    label="Hard"
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </FormControl>
    )
}

export default withStyles(styles)(Difficulty)