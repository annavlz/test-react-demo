import React from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    radiogroup: {
        width: "80%",
        margin: "10%"
    },
    radio: {
        marginLeft: 130
    }

}

const Difficulty = ({classes, difficulty, dispatch}) => {
    return(
        <FormControl component="fieldset" className={classes.radiogroup}>
            <FormLabel component="legend">Difficulty</FormLabel>
            <RadioGroup
                aria-label="position"
                name="position"
                value={difficulty}
                onChange={(event) => dispatch({type: "SET_DIFFICULTY", value: event.target.value})}
                row
            >
                <FormControlLabel
                    className={classes.radio}
                    value="easy"
                    control={<Radio color="primary" />}
                    label="Easy"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    className={classes.radio}   
                    value="medium"
                    control={<Radio color="primary" />}
                    label="Medium"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    className={classes.radio}
                    value="Hard"
                    control={<Radio color="primary" />}
                    label="Hard"
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </FormControl>
    )
}

export default withStyles(styles)(Difficulty)