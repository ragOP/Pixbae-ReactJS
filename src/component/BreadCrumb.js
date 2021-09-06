import React from 'react'
import {Box, TextField } from '@material-ui/core'

const BreadCrumb = ({onTextChange, onCountChange}) => {
    return (
        <Box m={1} >
        <TextField 
            onChange={(e) => onTextChange(e.target.value)}
            label="Search images" 
        />
        <TextField 
            onChange={(e) => onCountChange(e.target.value)}
            label="Number of images" 
            
        />
    </Box>
    )
}

export default BreadCrumb
