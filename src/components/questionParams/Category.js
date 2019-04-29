import React from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import CATS from '../../helpers/categories'

const styles = {
    select: {
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%"
    },
    legend: {
        textAlign: "center"
    }
  };

const listCategories = (cat) => {
    return (
        <MenuItem value={cat.id} key={cat.id}>{cat.name}</MenuItem>
    )
}
const Category = ({classes, category, dispatch}) => {
    return(
    <FormControl className={classes.select}>
        <FormLabel component="legend" className={classes.legend}>Category</FormLabel>
        <Select
            value={category}
            onChange={(event) => {
                dispatch({type: "SET_CATEGORY", value:event.target.value})
            }}
            inputProps={{
                name: "category",
                id: "category"
            }}
        >
            {CATS.map(listCategories)}
        </Select>
    </FormControl>
  )
}
export default withStyles(styles)(Category)