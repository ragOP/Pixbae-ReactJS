import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
const Snackbars = ({open,close}) => {
    const handleClose=()=>{
        close(false);
    }
    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">Number should be between 3-200</Alert>
            </Snackbar>
        </div>
    )
}

export default Snackbars
