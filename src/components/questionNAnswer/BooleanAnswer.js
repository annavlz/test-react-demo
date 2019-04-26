import React from 'react'
import { Typography } from '@material-ui/core'

export default ({questionData, dispatch}) => {
    return(<Typography>{questionData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</Typography>)
}
