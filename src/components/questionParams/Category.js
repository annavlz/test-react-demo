import React from 'react';
import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const CATS = [
      { "id": 9, "name": "General Knowledge" },
      { "id": 10, "name": "Entertainment: Books" },
      { "id": 11, "name": "Entertainment: Film" },
      { "id": 12, "name": "Entertainment: Music" },
      { "id": 13, "name": "Entertainment: Musicals & Theatres" },
      { "id": 14, "name": "Entertainment: Television" },
      { "id": 15, "name": "Entertainment: Video Games" },
      { "id": 16, "name": "Entertainment: Board Games" },
      { "id": 17, "name": "Science & Nature" },
      { "id": 18, "name": "Science: Computers" },
      { "id": 19, "name": "Science: Mathematics" },
      { "id": 20, "name": "Mythology" },
      { "id": 21, "name": "Sports" },
      { "id": 22, "name": "Geography" },
      { "id": 23, "name": "History" },
      { "id": 24, "name": "Politics" },
      { "id": 25, "name": "Art" },
      { "id": 26, "name": "Celebrities" },
      { "id": 27, "name": "Animals" },
      { "id": 28, "name": "Vehicles" },
      { "id": 29, "name": "Entertainment: Comics" },
      { "id": 30, "name": "Science: Gadgets" },
      { "id": 31, "name": "Entertainment: Japanese Anime & Manga" },
      { "id": 32, "name": "Entertainment: Cartoon & Animations" }
]

const styles = {
    select: {
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%"
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
        <FormLabel component="legend">Category</FormLabel>
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